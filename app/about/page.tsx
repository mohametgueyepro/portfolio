import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap, Award, CircleCheck as CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Certified AI specialist and trainer with a unique blend of technical expertise
            and pedagogical skills, dedicated to making AI accessible and practical.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-blue-600" />
            Professional Experience
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-start flex-wrap gap-2">
                  <span>Marketing Manager & IT Support</span>
                  <Badge>Aug 2025 - Present</Badge>
                </CardTitle>
                <p className="text-blue-600 font-medium">Bawers Medical Equipments</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Leading digital marketing initiatives and providing technical support for medical equipment operations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-start flex-wrap gap-2">
                  <span>Web Development Trainer</span>
                  <Badge>Apr 2025 - Jul 2025</Badge>
                </CardTitle>
                <p className="text-blue-600 font-medium">Xarala</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Training aspiring developers in modern web development technologies and best practices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-start flex-wrap gap-2">
                  <span>Digital Marketing, Web Dev & Graphic Design Trainer</span>
                  <Badge>Jan 2025 - Jul 2025</Badge>
                </CardTitle>
                <p className="text-blue-600 font-medium">Institut de Management et de Télécommunications</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive training programs covering digital marketing strategies, web development, and design principles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-start flex-wrap gap-2">
                  <span>Digital Marketing, Programming & Graphic Design Trainer</span>
                  <Badge>May 2024 - Present</Badge>
                </CardTitle>
                <p className="text-blue-600 font-medium">GOMYCODE</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Delivering intensive bootcamp-style training in digital skills, helping students transition into tech careers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-start flex-wrap gap-2">
                  <span>Digital Marketing Manager</span>
                  <Badge>Apr 2024 - Aug 2024</Badge>
                </CardTitle>
                <p className="text-blue-600 font-medium">Salon International de Commerce et de l'Investissement au Gabon (SICIG)</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Managed comprehensive digital marketing strategy for international trade and investment event.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-start flex-wrap gap-2">
                  <span>Social Media Manager</span>
                  <Badge>Apr 2024 - Aug 2024</Badge>
                </CardTitle>
                <p className="text-blue-600 font-medium">SHANA NEGOCE</p>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-start flex-wrap gap-2">
                  <span>Digital Manager & Social Media Manager</span>
                  <Badge>Jan 2024 - Mar 2024</Badge>
                </CardTitle>
                <p className="text-blue-600 font-medium">Association Sénégalaise des Sciences des Gestions</p>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-start flex-wrap gap-2">
                  <span>Web & Mobile Development Intern</span>
                  <Badge>Oct 2023 - Mar 2024</Badge>
                </CardTitle>
                <p className="text-blue-600 font-medium">Massada Communication Agency</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Developed web and mobile applications, gaining hands-on experience in full-stack development.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            Education
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-start flex-wrap gap-2">
                  <span>License 3 in Software Engineering</span>
                  <Badge>2021 - 2024</Badge>
                </CardTitle>
                <p className="text-blue-600 font-medium">National Institute of Information Technology</p>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-start flex-wrap gap-2">
                  <span>Baccalauréat Scientifique</span>
                  <Badge>2020 - 2021</Badge>
                </CardTitle>
                <p className="text-blue-600 font-medium">Cours Privés Madieye Sall</p>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-blue-600" />
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Pedagogy</CardTitle>
                <p className="text-sm text-gray-600">Simplon Sénégal - May 2025</p>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prompt Engineering</CardTitle>
                <p className="text-sm text-gray-600">LinkedIn Learning - Dec 2024</p>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Generative Artificial Intelligence</CardTitle>
                <p className="text-sm text-gray-600">Simplon Sénégal - Oct 2024</p>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Digital Marketing</CardTitle>
                <p className="text-sm text-gray-600">UN-CHK - Jun 2024</p>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Professional Digital Specialist</CardTitle>
                <p className="text-sm text-gray-600">Simplon Sénégal - Jan 2023 - Sep 2023</p>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <CheckCircle className="w-8 h-8 text-blue-600" />
            Core Skills
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI & Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>Prompt Engineering</li>
                  <li>Generative AI Applications</li>
                  <li>AI-Powered Content Creation</li>
                  <li>AI Automation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Software Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>Web Development</li>
                  <li>Mobile Development</li>
                  <li>Full-Stack Engineering</li>
                  <li>Software Architecture</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Digital Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>Social Media Management</li>
                  <li>Digital Strategy</li>
                  <li>Content Marketing</li>
                  <li>SEO & Analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Design</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>Graphic Design</li>
                  <li>UI/UX Design</li>
                  <li>Brand Identity</li>
                  <li>Visual Communication</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Training & Education</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>Active Pedagogy</li>
                  <li>Curriculum Development</li>
                  <li>Technical Training</li>
                  <li>Workshop Facilitation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>French - Advanced</li>
                  <li>English - Intermediate</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
