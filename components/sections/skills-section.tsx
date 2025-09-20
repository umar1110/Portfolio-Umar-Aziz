"use client";

import Icon from '@/components/Icon';
import { Badge } from '@/components/ui/badge';
import {
  siDocker,
  siExpress,
  siFigma,
  siGit,
  siJavascript,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siNuxt,
  siPostgresql,
  siPostman,
  siReact,
  siRedis,
  siRubyonrails,
  siSocketdotio,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVuedotjs,
  siWebrtc,
  siPython,
  siPytorch,
  siTensorflow,
  siPandas,
  siNumpy,
  siScikitlearn,
  siJupyter,
  siAnaconda,
  siOpencv,
  siFlask,
  siDjango,
  siFastapi,
  siCelery,
  siGunicorn,
  siVercel,
  siHeroku,
  siNetlify,
  siRailway
} from 'simple-icons/icons';


const skills = [
  {
    name: 'Javascript',
    icon: siJavascript,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    name: 'Typescript',
    icon: siTypescript,
    link: 'https://www.typescriptlang.org/'
  },
  {
    name: 'React',
    icon: siReact,
    link: 'https://react.dev/'
  },
  {
    name: 'Vue.js',
    icon: siVuedotjs,
    link: 'https://vuejs.org/'
  },
  {
    name: 'Next.js',
    icon: siNextdotjs,
    link: 'https://nextjs.org/'
  },
  {
    name: 'Nuxt.js',
    icon: siNuxt,
    link: 'https://nuxtjs.org/'
  },
  {
    name: 'Node.js',
    icon: siNodedotjs,
    link: 'https://www.nodejs.org/'
  },
  {
    name: 'Express.Js',
    icon: siExpress,
    link: 'https://expressjs.com/'
  },
  {
    name:'ROR',
    icon: siRubyonrails,
    link: 'https://rubyonrails.org/'
  },
  {
    name: 'Socket.io',
    icon: siSocketdotio,
    link: 'https://socket.io/'
  },
  {
    name :"WebRTC",
    icon: siWebrtc,
    link: 'https://webrtc.org/'
  },
  {
    name :"Action Cable",
    icon: siRubyonrails,
    link: 'https://guides.rubyonrails.org/action_cable_overview.html'
  },
  {
    name: 'PostgreSQL',
    icon: siPostgresql,
    link: 'https://www.postgresql.org/'
  },
  {
    name: 'MongoDB',
    icon: siMongodb,
    link: 'https://www.mongodb.com/'
  },
  {
    name: 'Supabase',
    icon: siSupabase,
    link: 'https://supabase.com/'
  },

  {
    name: 'Redis',
    icon: siRedis,
    link: 'https://redis.io/'
  },
  
  {
    name: 'Tailwindcss',
    icon: siTailwindcss,
    link: 'https://tailwindcss.com/'
  },
  {
    name: 'Figma',
    icon: siFigma,
    link: 'https://www.figma.com/'
  },
 
  {
    name: 'Postman',
    icon: siPostman,
    link: 'https://www.postman.com/'
  },
  {
    name: 'Docker',
    icon: siDocker,
    link: 'https://www.docker.com/'
  },
  {
    name: 'Git',
    icon: siGit,
    link: 'https://git-scm.com/'
  },
   
];

const secondarySkills = [
  {
    name: 'Python',
    icon: siPython,
    link: 'https://www.python.org/'
  },
  {
    name: 'Machine Learning',
    icon: siPytorch,
    link: 'https://pytorch.org/'
  },
  
  {
    name: 'Jupyter',
    icon: siJupyter,
    link: 'https://jupyter.org/'
  },
 
  {
    name: 'Django',
    icon: siDjango,
    link: 'https://www.djangoproject.com/'
  },
  {
    name: 'FastAPI',
    icon: siFastapi,
    link: 'https://fastapi.tiangolo.com/'
  },
 
  {
    name: 'Vercel',
    icon: siVercel,
    link: 'https://vercel.com/'
  },
  {
    name: 'Railway',
    icon: siRailway,
    link: 'https://www.railway.app/'
  },
  {
    name: 'Netlify',
    icon: siNetlify,
    link: 'https://www.netlify.com/'
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="w-full bg-muted/30 py-16 md:py-20 2xl:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <Badge variant="outline" className="px-5 py-1">
              <p className="text-sm font-medium">Skills</p>
            </Badge>
          </div>
          <p className="text-lg md:text-xl max-w-xl text-center text-muted-foreground">
            The skills, tools and technologies I am really good at:
          </p>
        </div>
        
        {/* Main Skills */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-lg font-semibold text-center mb-6 text-primary">Core Technologies</h3>
            <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer"
                    href={skill.link}
                    className="transition-transform duration-300 md:hover:scale-110"
                  >
                    <Icon 
                      icon={skill.icon} 
                      size={64} 
                      className="w-16 h-16"
                    />
                  </a>
                  <p className="text-base md:text-lg text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Skills */}
          <div>
            <h3 className="text-lg font-semibold text-center mb-6 text-primary">Additional Skills</h3>
            <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
              {secondarySkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer"
                    href={skill.link}
                    className="transition-transform duration-300 md:hover:scale-110"
                  >
                    <Icon 
                      icon={skill.icon} 
                      size={64} 
                      className="w-16 h-16"
                    />
                  </a>
                  <p className="text-base md:text-lg text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}