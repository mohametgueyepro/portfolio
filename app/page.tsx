import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, Code, Sparkles, Mail, Linkedin, Phone } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-gray-900">Mohamet Gueye</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-blue-600 font-medium">
                AI Specialist & Digital Trainer
              </p>
            </div>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Certified AI specialist and trainer combining expertise in software engineering and digital marketing.
              I help businesses, professionals, and learners explore and integrate generative AI technologies
              to transform practices, optimize performance, and stimulate creativity.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="text-sm py-2 px-4">Prompt Engineering</Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">Generative AI</Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">Software Development</Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">Digital Marketing</Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">Training & Pedagogy</Badge>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="/projects">
                <Button size="lg" className="text-base">
                  View Projects
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-base">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Core Competencies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Brain className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI & Prompt Engineering</h3>
              <p className="text-gray-600">
                Expert in generative AI, prompt engineering, and developing AI-powered applications
                to solve real-world problems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Code className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Software Development</h3>
              <p className="text-gray-600">
                Full-stack development expertise with focus on web and mobile applications,
                automation, and modern frameworks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Sparkles className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Training & Digital Marketing</h3>
              <p className="text-gray-600">
                Certified trainer specializing in active pedagogy, digital marketing strategies,
                and content creation with AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:mohametgueye5@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Mail className="w-5 h-5" />
              <span>mohametgueye5@gmail.com</span>
            </a>
            <a href="tel:+221770851770" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Phone className="w-5 h-5" />
              <span>77 085 17 70</span>
            </a>
            <a href="https://linkedin.com/in/mohamet-gueye" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
