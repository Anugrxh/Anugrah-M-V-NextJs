"use client";

import BlurText from "@/components/ui/BlurText";
import ScrollFloat from "@/components/ui/ScrollFloat";
// @ts-ignore
import TextType from "@/components/TextType";
import TiltedCard from '@/components/ui/TiltedCard';
// @ts-ignore
import ChromaGrid from '@/components/ui/ChromaGrid';

export default function Home() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div className="px-6 py-40">
      <div className="flex flex-col gap-32 max-w-7xl mx-auto">
        <section id="about" className="min-h-[60vh] flex flex-col justify-center">
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

        {/* Experience Section */}
        <section id="experience" className="min-h-[80vh] border-t border-white/5 pt-20">
          <ScrollFloat animationDuration={0.8} scrollStart="top 85%">
            <h2 className="text-5xl font-bold text-white mb-12 tracking-tight">Experience</h2>
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
            <h2 className="text-5xl font-bold text-white mb-12 tracking-tight">Projects</h2>
          </ScrollFloat>

          <ChromaGrid
            items={[
              {
                title: 'PREPWISE',
                subtitle: 'AI Powered Interview Training Platform',
                handle: 'React, Node.js, Express, Tailwind CSS, Gemini AI',
                borderColor: '#4F46E5',
                gradient: 'linear-gradient(145deg, rgba(79, 70, 229, 0.4), rgba(0,0,0,0.8))',
                url: '#',
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
                url: '#',
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
                url: '#',
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
                url: '#',
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
            <h2 className="text-5xl font-bold text-white mb-12 tracking-tight">Skills</h2>
          </ScrollFloat>
          <div className="flex flex-wrap gap-4">
            {["Python", "JavaScript", "React", "Node.js", "Django", "FastAPI", "Next.js", "GSAP", "Tailwind CSS", "MySQL", "MongoDB", "AI/ML"].map((skill, index) => (
              <ScrollFloat key={skill} animationDuration={0.5} stagger={index * 0.05} scrollStart="top 90%">
                <span className="px-6 py-3 glass rounded-full text-white/80 font-medium inline-block">
                  {skill}
                </span>
              </ScrollFloat>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-[80vh] border-t border-white/5 pt-20">
          <ScrollFloat animationDuration={0.8} scrollStart="top 85%">
            <h2 className="text-5xl font-bold text-white mb-12 tracking-tight">Education</h2>
          </ScrollFloat>
          <div className="flex flex-col gap-8">
            <ScrollFloat animationDuration={1} scrollStart="top 80%">
              <div>
                <h3 className="text-2xl font-bold text-white">MCA — Kannur University</h3>
                <p className="text-white/50">2024 — 2026 | CGPA: 8.78</p>
              </div>
            </ScrollFloat>
            <ScrollFloat animationDuration={1} scrollStart="top 80%">
              <div>
                <h3 className="text-2xl font-bold text-white">BCA — Kannur University</h3>
                <p className="text-white/50">2020 — 2023 | CGPA: 7.36</p>
              </div>
            </ScrollFloat>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-[60vh] border-t border-white/5 pt-20 pb-40">
          <ScrollFloat animationDuration={0.8} scrollStart="top 85%">
            <h2 className="text-5xl font-bold text-white mb-12 tracking-tight">Get in Touch</h2>
          </ScrollFloat>
          <ScrollFloat animationDuration={1} scrollStart="top 85%">
            <p className="text-2xl text-white/70">
              amvanugrah@gmail.com
            </p>
          </ScrollFloat>
        </section>
      </div>
    </div>
  )
}