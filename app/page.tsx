"use client";

import BlurText from "@/components/ui/BlurText";
import ScrollFloat from "@/components/ui/ScrollFloat";
// @ts-ignore
import TextType from "@/components/TextType";
import TiltedCard from '@/components/ui/TiltedCard';
// @ts-ignore
import ChromaGrid from '@/components/ui/ChromaGrid';
import Counter from '@/components/ui/Counter';
import MagicBento from '@/components/MagicBento';
import SpotlightCard from '@/components/SpotlightCard';
import ElectricBorder from '@/components/ElectricBorder';
import { Star } from 'lucide-react';
import ShinyText from '@/components/ShinyText';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {

  return (
    <div id="about" className="px-6 pt-40 pb-0">
      <div className="flex flex-col gap-32 max-w-7xl mx-auto">
        <section className="min-h-[60vh] flex flex-col justify-center">
          <div className="text-white font-bold leading-[0.9]">
            <TextType
              text={["ANUGRAH M V"]}
              typingSpeed={100}
              cursorCharacter="|"
              showCursor={true}
              loop={false}
              className="text-6xl md:text-9xl mb-8"
              variableSpeed={undefined}
              onSentenceComplete={undefined}

            />
          </div>
          <ScrollFloat animationDuration={1.2} delay={0.5}>
            <BlurText
              text="Results-driven Full Stack Engineer specializing in AI-powered applications, high-performance web systems, and scalable RESTful APIs. I combine strong backend engineering with creative frontend development to build production-ready solutions that solve complex real-world problems."
              delay={50}
              animateBy="words"
              direction="top"
              className="mt-8 text-xl md:text-2xl text-white/50 max-w-2xl block leading-relaxed"
            />
          </ScrollFloat>
        </section>

        {/* Stats Section */}
        <section id="stats" className="border-t border-white/5 pt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Years of Experience", value: 1, suffix: "+" },
              { label: "Satisfied Clients", value: 10, suffix: "+" },
              { label: "Completed Projects", value: 30, suffix: "+" },
              { label: "Client Retention Rate", value: 99, suffix: "%" }
            ].map((stat, index) => (
              <ScrollFloat key={index} animationDuration={0.5} stagger={index * 0.1} scrollStart="top 90%">
                <div className="flex flex-col items-center justify-center p-6 rounded-2xl 
                  bg-gradient-to-br from-white/10 to-white/5 
                  border border-white/10 hover:border-emerald-500/30
                  backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] 
                  transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(16,185,129,0.2)] group cursor-default">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors flex items-center">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <span className="text-sm md:text-base text-white/60 text-center font-medium group-hover:text-white/90 transition-colors">{stat.label}</span>
                </div>
              </ScrollFloat>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-[80vh] border-t border-white/5 pt-20">
          <ScrollFloat animationDuration={0.8} scrollStart="top 85%">
            <h2 className="text-5xl font-bold text-white mb-12 tracking-tight text-center">
              <ShinyText text="Experience" disabled={false} speed={3} />
            </h2>
          </ScrollFloat>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Snapshare */}
            {/* Snapshare */}
            <ScrollFloat animationDuration={1} stagger={0.1} scrollStart="top 80%" className="h-full">
              <TiltedCard
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="auto"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
                className="!h-auto md:!h-full"
                imageClassName="!h-auto md:!h-full"
              >
                <div className="glass-morphism backdrop-blur-[340px] border-4 border-white/40 p-8 h-full rounded-[15px] flex flex-col justify-between group-hover:bg-white/5 transition-colors duration-300">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-white/40 text-xs font-mono tracking-wider">OCT 2025 — PRESENT</span>
                      <span className="text-white/40 text-xs font-mono">Remote, Bangalore</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-1">Snapshare</h3>
                    <p className="text-xl text-primary font-medium mb-4">Full Stack Engineer</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {["React", "Next.js", "Tailwind CSS", "FastAPI", "PostgreSQL", "Docker", "AWS"].map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-white/70">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2 text-white/60 text-sm leading-relaxed list-disc list-outside pl-4">
                      <li>Developing and maintaining full-stack web applications using Next.js, React, and FastAPI.</li>
                      <li>Designing and implementing robust RESTful APIs.</li>
                      <li>Building responsive, high-performance user interfaces.</li>
                      <li>Collaborating with remote teams in an agile environment and participating in code reviews.</li>
                    </ul>
                  </div>
                </div>
              </TiltedCard>
            </ScrollFloat>

            {/* Luminar */}
            <ScrollFloat animationDuration={1} stagger={0.1} scrollStart="top 80%" className="h-full">
              <TiltedCard
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="auto"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
                className="!h-auto md:!h-full"
                imageClassName="!h-auto md:!h-full"
              >
                <div className="glass-morphism backdrop-blur-[340px] border-4 border-white/40 p-8 h-full rounded-[15px] flex flex-col justify-between group-hover:bg-white/5 transition-colors duration-300">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-white/40 text-xs font-mono tracking-wider">JUN 2023 — DEC 2023</span>
                      <span className="text-white/40 text-xs font-mono">Kochi, India</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-1">Luminar Technolab</h3>
                    <p className="text-xl text-primary font-medium mb-4">Developer Intern</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Python", "Django", "MySQL", "JavaScript", "Bootstrap"].map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-white/70">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2 text-white/60 text-sm leading-relaxed list-disc list-outside pl-4">
                      <li>Developed full-stack applications using Django backend.</li>
                      <li>Built and consumed REST APIs to integrate various services.</li>
                      <li>Designed and optimized MySQL databases for performance.</li>
                      <li>Created responsive UIs using Bootstrap and improved application maintainability.</li>
                    </ul>
                  </div>
                </div>
              </TiltedCard>
            </ScrollFloat>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-[80vh] border-t border-white/5 pt-20">
          <ScrollFloat animationDuration={0.8} scrollStart="top 85%">
            <h2 className="text-5xl font-bold text-white mb-12 tracking-tight text-center">
              <ShinyText text="Projects" disabled={false} speed={3} />
            </h2>
          </ScrollFloat>

          <ChromaGrid
            items={[
              {
                title: 'PREPWISE',
                subtitle: 'AI Powered Interview Training Platform',
                handle: 'React, Node.js, Express, Tailwind CSS, Gemini AI',
                borderColor: '#4F46E5',
                gradient: 'linear-gradient(145deg, rgba(79, 70, 229, 0.4), rgba(0,0,0,0.8))',
                url: 'https://github.com/Anugrxh',
                description: [
                  "Built a complete interview training platform with modern frontend and backend",
                  "Integrated facial emotion analysis using FER2013 dataset",
                  "Implemented Gemini AI for intelligent feedback and answer evaluation",
                  "Added speech-to-text and text-to-speech for interactive interviews"
                ]
              },
              {
                title: 'EXOPLANET HUNTER AI',
                subtitle: 'NASA Space Apps Hackathon Project',
                handle: 'React, Python, Machine Learning, NASA Datasets',
                borderColor: '#F59E0B',
                gradient: 'linear-gradient(145deg, rgba(245, 158, 11, 0.4), rgba(0,0,0,0.8))',
                url: 'https://github.com/Anugrxh',
                description: [
                  "Built an AI system in 48 hours to classify exoplanets using NASA datasets",
                  "Engineered ML model using 12 planetary features",
                  "Developed 2D orbital visualizations and habitability analysis",
                  "Delivered a working prototype under extreme time constraints"
                ]
              },
              {
                title: 'CHATFREE',
                subtitle: 'Full Stack AI Chat Application',
                handle: 'React, Node.js, Express, Gemini AI, Tailwind CSS',
                borderColor: '#10B981',
                gradient: 'linear-gradient(145deg, rgba(16, 185, 129, 0.4), rgba(0,0,0,0.8))',
                url: 'https://github.com/Anugrxh',
                description: [
                  "Developed an AI-powered chat application with real-time messaging",
                  "Integrated Gemini LLM with context retention",
                  "Implemented secure authentication using JWT and session validation",
                  "Added rate limiting and chat history management"
                ]
              },
              {
                title: 'KERALA ROAD SURVIVAL',
                subtitle: 'AI Pothole Detection System',
                handle: 'React, Flask, YOLO, A* Algorithm',
                borderColor: '#EF4444',
                gradient: 'linear-gradient(145deg, rgba(239, 68, 68, 0.4), rgba(0,0,0,0.8))',
                url: 'https://github.com/Anugrxh',
                description: [
                  "Built an AI model to detect potholes using YOLO",
                  "Implemented A* pathfinding algorithm for safe route calculation",
                  "Developed Flask REST APIs for inference",
                  "Created real-time visualizations using React frontend"
                ]
              }
            ]}
            className="w-full h-auto"
          />
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-[80vh] border-t border-white/5 pt-20">
          <ScrollFloat animationDuration={0.8} scrollStart="top 85%">
            <h2 className="text-5xl font-bold text-white mb-12 tracking-tight text-center">
              <ShinyText text="Skills" disabled={false} speed={3} />
            </h2>
          </ScrollFloat>
          <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:justify-center md:gap-4">
            {[
              { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
              { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
              { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
              { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
              { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
              { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
              { name: "AWS", icon: "data:image/jpeg;base64,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" },
              { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
              { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
              { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
              { name: "Django", icon: "https://cdn.simpleicons.org/django/092E20" },
              { name: "GSAP", icon: "https://cdn.simpleicons.org/greensock/88CE02" },
              { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
              { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
              { name: "AI/ML", icon: "https://i.pinimg.com/1200x/8a/7b/42/8a7b42aa37e3c690ec9bcbafb3a8e7f6.jpg" } // Using OpenAI icon with brand color
            ].map((skill, index) => (
              <ScrollFloat key={skill.name} animationDuration={0.5} stagger={index * 0.05} scrollStart="top 90%">
                <span className="px-4 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg text-white/90 font-medium flex w-full justify-center items-center gap-2 md:gap-4 
                  bg-gradient-to-br from-white/10 to-white/5 
                  border border-white/10 hover:border-white/30 
                  backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] 
                  hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] 
                  transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-default whitespace-nowrap">
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                  {skill.name}
                </span>
              </ScrollFloat>
            ))}
          </div>
        </section>



        {/* Education Section */}
        <section id="education" className="min-h-[60vh] border-t border-white/5 pt-20">
          <ScrollFloat animationDuration={0.8} scrollStart="top 85%">
            <h2 className="text-5xl font-bold text-white mb-12 tracking-tight text-center">
              <ShinyText text="Education" disabled={false} speed={3} />
            </h2>
          </ScrollFloat>
          <MagicBento
            cards={[
              {
                title: "Kannur University",
                label: "Master of Computer Applications",
                description: (
                  <div className="flex flex-col gap-1">
                    <span>Jan 2024 — May 2026</span>
                    <span className="text-white/80 font-semibold">CGPA: 8.78</span>
                  </div>
                ),
                color: "rgba(255,255,255,0.05)"
              },
              {
                title: "Kannur University",
                label: "Bachelor of Computer Applications",
                description: (
                  <div className="flex flex-col gap-1">
                    <span>Jan 2020 — May 2023</span>
                    <span className="text-white/80 font-semibold">CGPA: 7.36</span>
                  </div>
                ),
                color: "rgba(255,255,255,0.05)"
              }
            ]}
            enableStars={true}
            enableBorderGlow={true}
            enableSpotlight={true}
            glowColor="16, 185, 129" // Emerald glow
          />
        </section>



        {/* Testimonials Section */}
        <section id="testimonials" className="min-h-[60vh] border-t border-white/5 pt-20">
          <ScrollFloat animationDuration={0.8} scrollStart="top 85%">
            <h2 className="text-5xl font-bold text-white mb-12 tracking-tight text-center">
              <ShinyText text="Testimonials" disabled={false} speed={3} />
            </h2>
          </ScrollFloat>
          <ScrollFloat animationDuration={0.8} scrollStart="top 80%">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  text: "Absolutely loved the experience! Everything was smooth, intuitive, and the final result exceeded my expectations. Highly recommend to anyone looking for top-notch service and quality.",
                  author: "Amal",
                  location: "Bangalore",
                  color: "rgba(0, 229, 255, 0.2)", // Cyan
                  hex: "#00E5FF"
                },
                {
                  text: "Collaborating with Anugrah was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Anugrah's enthusiasm for every facet of development truly stands out.",
                  author: "Gopika",
                  location: "Kannur",
                  color: "rgba(255, 0, 128, 0.2)", // Pink/Magenta
                  hex: "#FF0080"
                },
                {
                  text: "Anugrah was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
                  author: "Akash Raj",
                  location: "Kannur",
                  color: "rgba(0, 255, 128, 0.2)", // Emerald/Green
                  hex: "#00FF80"
                }
              ].map((t, i) => (
                <ElectricBorder key={i} color={t.hex} borderRadius={24} className="h-full">
                  <SpotlightCard className="h-full flex flex-col justify-between bg-white/5 backdrop-blur-xl rounded-[inherit]" spotlightColor={t.color as any}>
                    <div>
                      <div className="flex gap-1 mb-4 text-orange-400">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star key={starIndex} size={16} fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-white/80 leading-relaxed mb-6 font-light italic">"{t.text}"</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{t.author}</h4>
                      <p className="text-sm text-white/40 font-mono">@{t.location}</p>
                    </div>
                  </SpotlightCard>
                </ElectricBorder>
              ))}
            </div>
          </ScrollFloat>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-[80vh] border-t border-white/5 pt-20 pb-32">
          <ScrollFloat animationDuration={0.8} scrollStart="top 85%">
            <h2 className="text-5xl font-bold text-white mb-12 tracking-tight text-center">
              <ShinyText text="Get in Touch" disabled={false} speed={3} />
            </h2>
          </ScrollFloat>

          <div className="max-w-3xl mx-auto w-full">
            <ScrollFloat animationDuration={1} scrollStart="top 85%">
              <div className="text-center space-y-8">
                <div>
                  {/* <h3 className="text-3xl font-bold text-white mb-4">Let&apos;s collaborate</h3> */}


                </div>

                <ContactForm />
              </div>
            </ScrollFloat>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}