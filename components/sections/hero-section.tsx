"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, MapPin, Download, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { links } from '@/constants/Links';

const typewriterText = [
  "Full-Stack Developer",
  "MERN Stack Developer",
  "NEXT.JS + NUXT.JS Developer",
  "Node.js Expert",
  "ROR Developer",
  "Django Developer",
  "Python Enthusiast"
];

const FloatingElements = [
  "React",
  "Node.js",
  "Nuxt.js",
  "Next.js",
  "ROR",
  "Django",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Docker",
  "AWS",
];

export function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [visibleElements, setVisibleElements] = useState<string[]>(["React","Node.js","Nuxt.js","Next.js","Express.js","MongoDB"]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = typewriterText[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % typewriterText.length);
      }
    }, isDeleting ? 100 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex]);

  // Generate related floating elements in circular pattern
  useEffect(() => {
    const generateRelatedElements = () => {
      // Group related technologies
      const techGroups = [
        ['React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 'TypeScript'], // MERN Stack
        ['Python', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'AWS'], // Python Stack
        ['Vue.js', 'Nuxt.js', 'ROR', 'MySQL', 'Redis', 'Docker'], // Alternative Stack
        ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'Vercel'], // Modern React
        ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'AWS'], // FastAPI Stack
        ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT', 'Heroku'] // Real-time Stack
      ];
      
      const randomGroup = techGroups[Math.floor(Math.random() * techGroups.length)];
      setVisibleElements(randomGroup);
    };

    generateRelatedElements();
    const interval = setInterval(generateRelatedElements, 7000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <div className="space-y-2">
            <Badge variant="outline" className="mb-4">
              <MapPin className="w-3 h-3 mr-1" />
              Available for Remote Work
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Umar Aziz
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground h-8">
              <span className="font-mono">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl">
            I craft responsive UIs, scalable APIs, and cross-platform apps with a focus on 
            clean architecture, speed, and real-world impact. Let&apos;s bring your vision to life!
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href={`mailto:${links.email}`}>
              <Button size="lg" className="group text-white">
                Get In Touch
                <Mail className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={() => {
                try {
                  const link = document.createElement('a');
                  link.href = links.cv;
                  link.download = 'Umar-Aziz-CV.pdf';
                  link.target = '_blank';
                  link.rel = 'noopener noreferrer';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  
                  // Optional: Show success message
                  console.log('CV download initiated successfully');
                } catch (error) {
                  console.error('Error downloading CV:', error);
                  // Fallback: Open in new tab
                  window.open(links.cv, '_blank');
                }
              }}
            >
              Download CV
              <Download className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          <div className="flex gap-4 justify-center lg:justify-start">
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                <Github className="w-5 h-5" />
              </Button>
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5" />
              </Button>
            </a>
            <a href={links.portfolio} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                <ExternalLink className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <Image
                src="/images/umar-aziz-profile-pic.jpg"
                width={840}
                height={840}
                alt="Umar Aziz"
                className="w-full h-full object-cover" style={{ objectPosition: 'center -20px' }}
              />
            </div>
          </div>
          
          {/* Dynamic Floating Elements */}
          {visibleElements.map((element, index) => {
            const positions = [
              { top: '10%', left: '10%', delay: '0s' },
              { top: '20%', right: '10%', delay: '0.5s' },
              { bottom: '20%', left: '5%', delay: '1s' },
              { top: '60%', right: '5%', delay: '1.5s' },
              { bottom: '10%', right: '20%', delay: '2s' },
              { top: '40%', left: '5%', delay: '2.5s' }
            ];
            
            const position = positions[index] || positions[0];
            const animationDelay = `${index * 0.3}s`;
            
            return (
              <div
                key={`${element}-${index}`}
                className="absolute animate-float opacity-0 animate-fade-in"
                style={{
                  ...position,
                  animationDelay: animationDelay,
                  animationDuration: '1s'
                }}
              >
                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-2 shadow-lg border hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <code className="text-sm font-mono text-primary font-semibold">
                    {element}
                  </code>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}