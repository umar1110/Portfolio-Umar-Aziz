"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

const skillCategories = {
  frontend: [
    { name: 'React', level: 95, icon: '⚛️' },
    { name: 'Next.js', level: 90, icon: '▲' },
    { name: 'TypeScript', level: 85, icon: '🔷' },
    { name: 'Vue.js', level: 80, icon: '💚' },
    { name: 'Tailwind CSS', level: 95, icon: '🎨' },
    { name: 'HTML/CSS', level: 98, icon: '🌐' },
  ],
  backend: [
    { name: 'Node.js', level: 90, icon: '🟢' },
    { name: 'Express', level: 85, icon: '🚂' },
    { name: '.NET', level: 75, icon: '💜' },
    { name: 'Django', level: 70, icon: '🐍' },
    { name: 'Ruby on Rails', level: 65, icon: '💎' },
    { name: 'PostgreSQL', level: 80, icon: '🐘' },
  ],
  mobile: [
    { name: 'React Native', level: 85, icon: '📱' },
    { name: 'Flutter', level: 75, icon: '🔵' },
    { name: 'Expo', level: 80, icon: '⚡' },
    { name: 'iOS Development', level: 70, icon: '🍎' },
    { name: 'Android Development', level: 70, icon: '🤖' },
  ],
  tools: [
    { name: 'Git', level: 95, icon: '🔀' },
    { name: 'Docker', level: 80, icon: '🐳' },
    { name: 'AWS', level: 75, icon: '☁️' },
    { name: 'Firebase', level: 85, icon: '🔥' },
    { name: 'Figma', level: 80, icon: '🎨' },
    { name: 'Jest', level: 85, icon: '🧪' },
  ]
};

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Skills & Expertise</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technologies I{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Master
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications across all platforms
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>

          {Object.entries(skillCategories).map(([category, skills]) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <Card key={skill.name} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl group-hover:scale-110 transition-transform">
                          {skill.icon}
                        </span>
                        <div className="flex-1">
                          <h3 className="font-semibold">{skill.name}</h3>
                          <p className="text-sm text-muted-foreground">{skill.level}% Proficiency</p>
                        </div>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}