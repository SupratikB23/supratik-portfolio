import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
const EducationSection = () => {
  const education = [{
    institution: 'Institute of Engineering and Management (IEM), Kolkata',
    degree: 'B.Tech Computer Science (AI & ML)',
    duration: '2024–Present',
    grade: 'YGPA: 9.11',
    courses: ['AI & ML', 'DSA', 'DAA'],
    current: true
  }, {
    institution: 'South Point High School, Kolkata',
    degree: 'PCM with Computer Science',
    duration: '2010–2024',
    grade: '90% (12th), 95% (10th)',
    courses: ['Python Programming', 'Database', 'Computer Networks'],
    current: false
  }];
  return <section id="education" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">Education</span> & Learning
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Building a strong foundation in computer science and artificial intelligence
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => <Card key={edu.institution} className="border-border hover:border-primary transition-all duration-500 hover:shadow-glow-primary animate-fade-in" style={{
          animationDelay: `${index * 0.3}s`
        }}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <div className="space-y-2">
                    <CardTitle className="flex items-center space-x-3 text-xl">
                      <GraduationCap className="h-6 w-6 text-primary" />
                      <span className="text-foreground">{edu.institution}</span>
                      {edu.current && <Badge className="bg-primary text-primary-foreground">Current</Badge>}
                    </CardTitle>
                    <p className="text-lg font-medium text-accent">{edu.degree}</p>
                  </div>
                  
                  <div className="flex flex-col space-y-2 md:text-right">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-primary font-semibold">
                      <Award className="h-4 w-4" />
                      <span>{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Relevant Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map(course => <Badge key={course} variant="outline" className="border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                        {course}
                      </Badge>)}
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Achievement Highlight */}
        
      </div>
    </section>;
};
export default EducationSection;