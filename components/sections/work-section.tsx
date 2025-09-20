"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, Stripe payments, and real-time inventory management.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Mobile-first task management application with real-time collaboration and offline support.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React Native", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts and data visualization for business insights.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "D3.js", "Express", "Redis", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "Full-featured social media platform with real-time messaging, content sharing, and user engagement.",
    image: "https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "Django", "WebSocket", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 5,
    title: "Learning Management System",
    description: "Comprehensive LMS with video streaming, progress tracking, and interactive course content.",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "Prisma", "AWS S3", "Stripe", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description: "Cross-platform fitness app with workout tracking, nutrition logging, and social features.",
    image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Flutter", "Firebase", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
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
          
          <div className="flex justify-center gap-2 mb-8">
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              size="sm"
            >
              All Projects
            </Button>
            <Button 
              variant={filter === 'featured' ? 'default' : 'outline'}
              onClick={() => setFilter('featured')}
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
                <img
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
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Code
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