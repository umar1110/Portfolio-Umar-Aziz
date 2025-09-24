"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Associate Software Engineer",
    company: "Stack360",
    location: "Hybrid",
    period: "Jul 2025 - Present",
    description: "Contributing to a multi-tenant platform Falcore.uk, building responsive UI and features primarily with Next.js and handling minor backend tasks in Python/Django. Deployed and managed the application on AWS using PM2.",
    technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL","ROR", "Docker", "PM2"],
    achievements: [
      "Built responsive UI components for multi-tenant platform",
      "Handled backend tasks in Python/Django",
      "Deployed and managed applications on AWS infrastructure"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Magma3c",
    location: "Onsite",
    period: "Sep 2024 - Jan 2025",
    description: "Developed and maintained a Learning Management System (LMS) and a multi-vendor e-commerce platform using Next.js (frontend) and Node.js/Express (backend). Implemented data-scraping utilities in Python to automate content collection.",
    technologies: ["Next.js", "Node.js", "Express", "MongoDB", "Python", "PostgreSQL"],
    achievements: [
      "Developed complete LMS and multi-vendor e-commerce platform",
      "Implemented Python data-scraping utilities for workflow automation",
      "Led and mentored team of trainees with code reviews"
    ]
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Upwork + Fiverr",
    location: "Remote",
    period: "2023 - Present",
    description: "Delivered multiple MERN stack web applications, handling complete end-to-end development. Built Vue.js and Nuxt.js projects with additional backend experience in Ruby on Rails and Django.",
    technologies: ["React", "Vue.js", "Nuxt.js","Next.js", "Node.js", "Express", "MongoDB","PostgreSQL", "Ruby on Rails", "Django" ],
    achievements: [
      "Delivered multiple complete MERN stack applications",
      "Built Vue.js and Nuxt.js projects for various clients",
      "Gained expertise in Ruby on Rails and Django backend development"
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Career Journey</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional growth and the impact I&apos;ve made at each organization
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-border"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className="text-lg text-primary font-semibold">{exp.company}</p>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <CalendarDays className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}