"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { links } from '@/constants/Links';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold font-mono text-primary">
          &lt;Developer/&gt;
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeSection === item.href.slice(1)
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex items-center gap-2 hover:bg-primary hover:text-white transition-colors"
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
              } catch (error) {
                console.error('Error downloading CV:', error);
                // Fallback: Open in new tab
                window.open(links.cv, '_blank');
              }
            }}
          >
            <Download className="h-4 w-4" />
            <span className="hidden md:inline">Download CV</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start gap-2 mb-4"
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
                  setIsMenuOpen(false);
                } catch (error) {
                  console.error('Error downloading CV:', error);
                  // Fallback: Open in new tab
                  window.open(links.cv, '_blank');
                  setIsMenuOpen(false);
                }
              }}
            >
              <Download className="h-4 w-4" />
              Download CV
            </Button>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "block w-full text-left py-2 px-4 rounded-md text-sm font-medium transition-colors hover:bg-muted",
                  activeSection === item.href.slice(1)
                    ? "text-primary bg-muted"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}