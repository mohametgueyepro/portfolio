import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Brain, Code, Sparkles, TrendingUp, Users, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Content Creation Platform",
      description: "Developed a comprehensive platform leveraging generative AI for automated content creation, helping businesses scale their marketing efforts efficiently.",
      icon: Brain,
      tags: ["Generative AI", "Prompt Engineering", "Automation"],
      category: "AI Development",
    },
    {
      title: "Digital Marketing Campaigns - SICIG",
      description: "Led comprehensive digital marketing strategy for the International Trade and Investment Exhibition in Gabon, managing multi-channel campaigns and analytics.",
      icon: TrendingUp,
      tags: ["Digital Marketing", "Campaign Management", "Analytics"],
      category: "Marketing",
    },
    {
      title: "E-Learning Platform Development",
      description: "Built interactive e-learning platforms for GOMYCODE and IMT, featuring course management, student tracking, and integrated assessment tools.",
      icon: Code,
      tags: ["Web Development", "React", "Next.js", "Education Tech"],
      category: "Development",
    },
    {
      title: "AI Training Workshops",
      description: "Designed and delivered comprehensive training programs on generative AI, prompt engineering, and AI integration for businesses and professionals.",
      icon: Users,
      tags: ["Training", "AI Education", "Active Pedagogy"],
      category: "Training",
    },
    {
      title: "Social Media Automation Tools",
      description: "Created AI-powered tools for automated social media content generation, scheduling, and performance analytics for multiple client accounts.",
      icon: Sparkles,
      tags: ["AI", "Social Media", "Automation", "Analytics"],
      category: "AI Development",
    },
    {
      title: "Corporate Website Development",
      description: "Developed responsive, modern websites for various clients including Bawers Medical Equipments, optimizing for performance, SEO, and user experience.",
      icon: Globe,
      tags: ["Web Development", "SEO", "UI/UX", "Responsive Design"],
      category: "Development",
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold">Projects & Work</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A showcase of my work spanning AI development, digital marketing campaigns,
            training programs, and software development projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <section className="mt-16 bg-gradient-to-r from-blue-50 to-gray-50 p-8 rounded-lg">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Interested in Working Together?</h2>
            <p className="text-lg text-gray-600">
              I'm available for consulting, training programs, and development projects.
              Let's discuss how I can help transform your business with AI and digital solutions.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-base">
                Get In Touch
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Key Achievements</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-blue-600">5+</CardTitle>
                <CardDescription className="text-base">Years of Experience</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-blue-600">200+</CardTitle>
                <CardDescription className="text-base">Students Trained</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-blue-600">15+</CardTitle>
                <CardDescription className="text-base">Client Projects</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-blue-600">5</CardTitle>
                <CardDescription className="text-base">Professional Certifications</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
