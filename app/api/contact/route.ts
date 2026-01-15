import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiting (for production, use Redis or external service)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 3; // Max 3 emails per 15 minutes per IP

// Input sanitization function
function sanitizeInput(input: string): string {
    return input
        .replace(/[<>]/g, '') // Remove potential HTML tags
        .trim()
        .substring(0, 1000); // Limit length
}

// Email validation
function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
}

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const userRequests = rateLimitMap.get(ip) || [];
    
    // Remove old requests outside the window
    const validRequests = userRequests.filter((time: number) => now - time < RATE_LIMIT_WINDOW);
    
    if (validRequests.length >= MAX_REQUESTS) {
        return false;
    }
    
    validRequests.push(now);
    rateLimitMap.set(ip, validRequests);
    return true;
}

export async function POST(req: Request) {
    try {
        // Get client IP for rate limiting
        const forwarded = req.headers.get('x-forwarded-for');
        const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
        
        // Check rate limit
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' }, 
                { status: 429 }
            );
        }

        const { name, email, message } = await req.json();

        // Validate and sanitize inputs
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const sanitizedName = sanitizeInput(name);
        const sanitizedEmail = sanitizeInput(email);
        const sanitizedMessage = sanitizeInput(message);

        // Validate email format
        if (!isValidEmail(sanitizedEmail)) {
            return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
        }

        // Validate field lengths
        if (sanitizedName.length < 2 || sanitizedName.length > 100) {
            return NextResponse.json({ error: 'Name must be between 2 and 100 characters' }, { status: 400 });
        }

        if (sanitizedMessage.length < 10 || sanitizedMessage.length > 1000) {
            return NextResponse.json({ error: 'Message must be between 10 and 1000 characters' }, { status: 400 });
        }

        // Check for required environment variables
        if (!process.env.SMTP_MAIL || !process.env.SMTP_PASS) {
            console.error('Missing SMTP configuration');
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_MAIL,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"${process.env.SMTP_NAME || 'Portfolio'}" <${process.env.SMTP_MAIL}>`,
            to: process.env.SMTP_MAIL,
            replyTo: sanitizedEmail,
            subject: `🚀 New Portfolio Message from ${sanitizedName}`,
            text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\n\nMessage:\n${sanitizedMessage}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; color: #333;">
          <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px;">New Contact Form Message</h2>
          <p style="margin: 10px 0;"><strong>Name:</strong> ${sanitizedName}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
          <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #10b981; border-radius: 4px;">
            <p style="margin-top: 0;"><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; line-height: 1.6;">${sanitizedMessage}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #777; text-align: center;">Sent from your Portfolio Contact Form</p>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Message sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json({ error: 'Failed to send message. Please try again later.' }, { status: 500 });
    }
}