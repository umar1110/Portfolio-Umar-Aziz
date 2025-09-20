"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechFlow Solutions",
    content: "Umar is an exceptional developer who consistently delivers high-quality work. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    rating: 5,
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "Digital Innovations Inc",
    content: "Working with Umar was a game-changer for our project. His full-stack expertise and proactive approach helped us launch our platform ahead of schedule with zero critical bugs.",
    rating: 5,
    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Emily Rodriguez",
    role: "Design Lead",
    company: "Creative Studios",
    content: "Umar has an incredible ability to bring designs to life while maintaining pixel-perfect accuracy. His collaboration skills and technical expertise make him a pleasure to work with.",
    rating: 5,
    image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "David Park",
    role: "Founder",
    company: "StartupXYZ",
    content: "Umar's contribution to our mobile app was invaluable. His React Native expertise and understanding of mobile UX principles helped us achieve a 4.8-star rating on both app stores.",
    rating: 5,
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Clients{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from clients and colleagues who have experienced my work firsthand
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/20" />
                
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                    "{testimonials[currentIndex].content}" 
                  </blockquote>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <Image
                    width={64}
                    height={64}
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-center">
                    <div className="font-bold text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-primary font-semibold">{testimonials[currentIndex].role}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[currentIndex].company}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="hover:scale-110 transition-transform"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="hover:scale-110 transition-transform"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}