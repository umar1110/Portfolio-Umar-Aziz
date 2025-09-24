"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { links } from '@/constants/Links';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, Express.js , MongoDB and real-time inventory management.",
    image: "/images/projects/e-commerce.png",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind"],
    liveUrl: "https://www.sheikhsons.store/",
    githubUrl: links.github,
    featured: true
  },
  {
    id: 2,
    title: "Multi-Tenant Platform ",
    description: "Multi-Tenant Employee Management & Task Automation Platform where i worked as Next.js Developer.",
    image: "/images/projects/falcore.png",
    technologies: ["React Native", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://umar.falcore.uk/",
    githubUrl: links.github,
    featured: true
  },
  {
    id: 3,
    title: "Internatial multi language business site",
    description: "Internatial multi language business site build with MERN Stack with i18n and multi language support.Has support of Dashboard and Admin Panel.",
    image: "/images/projects/zafar-azfar.png",
    technologies: ["MongoDB", "Express", "Node.js", "React", "Vercel"],
    liveUrl: "https://www.zafarazfar.com/",
    githubUrl: links.github,
    featured: true
  },
  {
    id: 4,
    title: "AQI Predictor ",
    description: "AQI Predictor is a web application that predicts the Air Quality Index (AQI) by using the data user enters.",
    image: "/images/projects/aqi-predictor.png",
    technologies: ["React.Js", "Flask","Python","Scikit-learn","Jupyter Notebook"],
    liveUrl: "https://air-quality-predictor-beta.vercel.app/",
    githubUrl: links.github,
    featured: true
  },
  {
    id: 5,
    title: "Learning Management System",
    description: "Comprehensive LMS with video streaming, progress tracking, and interactive course content.",
    image: "/images/projects/LMS.png",
    technologies: ["Next.js", "Prisma", "AWS S3", "Stripe", "TypeScript"],
    liveUrl: "https://type-script-lms-mern-hmv9.vercel.app/",
    githubUrl: links.github,
    featured: true
  },
  
];

export function WorkSection() {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
    ? projects.filter(p => p.featured)
    : projects;

  return (
    <section id="work" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Portfolio</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my recent work, demonstrating expertise across different technologies and industries
          </p>
          
          <div className="flex text-white justify-center gap-2 mb-8">
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'}
              className="text-white"
              onClick={() => setFilter('all')}
              size="sm"
            >
              All Projects
            </Button>
            <Button 
              variant={filter === 'featured' ? 'default' : 'outline'}
              onClick={() => setFilter('featured')}
              className="text-white"
              size="sm"
            >
              Featured
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <Image
                  width={384}
                  height={384}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-black/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Button size="sm" variant="secondary">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  {project.featured && (
                    <Badge variant="secondary" className="ml-2">Featured</Badge>
                  )}
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}