"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, MapPin, Download, ExternalLink } from 'lucide-react';

const typewriterText = [
  "Full-Stack Developer",
  "React Specialist",
  "Node.js Expert",
  "Mobile Developer",
  "UI/UX Enthusiast"
];

export function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

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
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex]);

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
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Alex Johnson
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
            clean architecture, speed, and real-world impact. Let's bring your vision to life!
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button size="lg" className="group">
              Get In Touch
              <Mail className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              Download CV
              <Download className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          <div className="flex gap-4 justify-center lg:justify-start">
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <ExternalLink className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Alex Johnson"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-10 left-10 animate-float">
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-2 shadow-lg border">
              <code className="text-sm font-mono text-primary">React</code>
            </div>
          </div>
          <div className="absolute top-20 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-2 shadow-lg border">
              <code className="text-sm font-mono text-primary">Node.js</code>
            </div>
          </div>
          <div className="absolute bottom-20 left-5 animate-float" style={{ animationDelay: '1s' }}>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-2 shadow-lg border">
              <code className="text-sm font-mono text-primary">Next.js</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}