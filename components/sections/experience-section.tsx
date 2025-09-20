"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechFlow Solutions",
    location: "San Francisco, CA (Remote)",
    period: "2022 - Present",
    description: "Leading a team of 5 developers in building scalable web applications. Architected and implemented microservices using Node.js and React, resulting in 40% improved performance.",
    technologies: ["React", "Node.js", "AWS", "Docker", "TypeScript"],
    achievements: [
      "Increased application performance by 40%",
      "Led migration to microservices architecture",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Innovations Inc",
    location: "New York, NY",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects using React, Vue.js, and Node.js. Collaborated with design teams to create pixel-perfect user interfaces.",
    technologies: ["Vue.js", "React", "Express", "PostgreSQL", "Redux"],
    achievements: [
      "Delivered 15+ client projects on time",
      "Improved code quality with automated testing",
      "Reduced bug reports by 60% through rigorous testing"
    ]
  },
  {
    title: "Frontend Developer",
    company: "StartupXYZ",
    location: "Austin, TX",
    period: "2019 - 2020",
    description: "Built responsive web applications and mobile apps using React and React Native. Worked closely with product managers to implement user-centric features.",
    technologies: ["React", "React Native", "Redux", "Sass", "Jest"],
    achievements: [
      "Launched mobile app with 50K+ downloads",
      "Implemented responsive design system",
      "Achieved 98% cross-browser compatibility"
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
            A timeline of my professional growth and the impact I've made at each organization
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