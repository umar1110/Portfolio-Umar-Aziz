"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Smartphone, Server, Palette } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: "Frontend Expert",
    description: "Modern React, Next.js, and Vue.js applications with exceptional UX"
  },
  {
    icon: Server,
    title: "Backend Specialist", 
    description: "Scalable APIs with Node.js, .NET, Django, and Ruby on Rails"
  },
  {
    icon: Smartphone,
    title: "Mobile Developer",
    description: "Cross-platform apps with React Native and Flutter"
  },
  {
    icon: Palette,
    title: "Design Focused",
    description: "Beautiful, responsive designs with attention to detail"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl"></div>
              <img
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="About me"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">About Me</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Building Digital Experiences That{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Matter
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 5 years of experience in full-stack development, I specialize in creating 
                high-performance web and mobile applications. My passion lies in transforming complex 
                problems into simple, elegant solutions that deliver real value to users and businesses.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in clean code, user-centered design, and staying up-to-date with the latest 
                technologies. When I'm not coding, you'll find me exploring new frameworks, contributing 
                to open source, or mentoring aspiring developers.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}