"use client";

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Code, Laptop, Server } from 'lucide-react';
import Image from 'next/image';

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Developer",
    description: "2 years of hands-on experience with modern frameworks and technologies"
  },
  {
    icon: Server,
    title: "Technology Enthusiast", 
    description: "Node.js, Express, React.js, Next.js, and TypeScript expertise"
  },
  {
    icon: Laptop,
    title: "Student Developer",
    description: "Pursuing Bachelor's in Computer Science with active learning"
  },
  {
    icon: Brain,
    title: "Quick Learner",
    description: "Always eager to learn new technologies and frameworks"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center ">
          <div className="space-y-6 ">
            <div className="relative">
              <div className="relative  w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl"></div>
                <Image
                  width={600}
                  height={600}
                  src="/images/umar-aziz-about-us.jpg"
                  alt="About me"
                  className="relative w-full h-96 object-cover  rounded-2xl shadow-2xl"
                  style={{ objectPosition: 'center 20px' }}
                />
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl border border-blue-200/20 dark:border-blue-800/20">
              <h3 className="text-xl font-bold mb-4 text-center">Quick Bits About Me</h3>
              <div className="grid sm:grid-cols-1 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Bachelor&apos;s in Computer Science (in progress)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>Full-stack developer with 2 years of hands-on experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Quick learner & technology enthusiast</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>Freelance ready</span>
                </div>
              </div>
              <p className="text-center mt-4 text-muted-foreground">
                If you&apos;re looking for someone to bring your vision to life with technical expertise and creative energy, 
                feel free to reach out—let&apos;s build something amazing together.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">About Me</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Passionate Developer Building{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Amazing Solutions
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m Umar Aziz, a passionate software developer with 2 years of experience specializing in full-stack development. 
                I love creating scalable, visually appealing digital products that balance functionality with a great user experience. 
                Writing clean, maintainable, and high-performance code is at the core of everything I build.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Starting my career in 2023, I&apos;ve quickly grown into a skilled developer, embracing modern tools and frameworks 
                such as Node.js, Express, React.js, Vue.js, Nuxt.js, Next.js, and TypeScript. I also bring creative finesse to projects using 
                Tailwind CSS, Bootstrap, and CSS.
                
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my Bachelor&apos;s degree in Computer Science, I&apos;m a lifelong learner who thrives on staying 
                up-to-date with the latest tech trends and exploring innovative projects. Being an active student makes me even 
                more passionate and a quick learner, eager to take on new challenges.
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