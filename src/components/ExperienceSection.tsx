import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin, Users } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'HCI Research Intern',
      organization: 'IEM with IIT Mandi Chapter',
      location: 'Kolkata, India',
      duration: 'July 2025–Present',
      type: 'Current',
      description: 'Conducting research in Human-Computer Interaction, focusing on innovative interfaces and user experience design.',
      current: true
    },
    {
      title: 'IEEE EMBS Student Intern',
      organization: 'IEEE Engineering Medicine and Biology Society',
      location: 'Pune, India',
      duration: 'June–July 2025',
      type: 'Internship',
      description: 'Developed Deep Learning models for Epileptic Seizure Detection and Prediction using advanced neural network architectures.',
      current: false
    },
    {
      title: 'Open Source Contributor',
      organization: 'Social Winter of Code (SWOC)',
      location: 'Remote',
      duration: 'January–March 2025',
      type: 'Contribution',
      description: 'Actively contributed to various open-source projects, enhancing code quality and implementing new features.',
      current: false
    },
    {
      title: 'AI/ML & Graphics Team Member',
      organization: 'IEEE Computer Society IEM Chapter',
      location: 'Kolkata, India',
      duration: 'August 2024–Present',
      type: 'Leadership',
      description: 'Leading AI/ML initiatives and graphics design projects within the IEEE student chapter.',
      current: true
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Current':
        return 'bg-primary text-primary-foreground';
      case 'Internship':
        return 'bg-accent text-accent-foreground';
      case 'Leadership':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Building expertise through research, internships, and community involvement
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={`${exp.title}-${exp.organization}`}
              className="border-border hover:border-primary transition-all duration-500 hover:shadow-glow-primary animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between space-y-4 md:space-y-0">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Briefcase className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                      <Badge className={getTypeColor(exp.type)}>
                        {exp.type}
                      </Badge>
                      {exp.current && (
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                          Current
                        </Badge>
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-accent font-medium">
                        <Users className="h-4 w-4" />
                        <span>{exp.organization}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-muted-foreground md:text-right">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.duration}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="border-border bg-card/50 backdrop-blur-sm text-center">
            <CardContent className="py-6">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <p className="text-muted-foreground">Active Positions</p>
            </CardContent>
          </Card>
          
          <Card className="border-border bg-card/50 backdrop-blur-sm text-center">
            <CardContent className="py-6">
              <div className="text-3xl font-bold text-accent mb-2">4</div>
              <p className="text-muted-foreground">Organizations</p>
            </CardContent>
          </Card>
          
          <Card className="border-border bg-card/50 backdrop-blur-sm text-center">
            <CardContent className="py-6">
              <div className="text-3xl font-bold text-primary mb-2">1 Year+</div>
              <p className="text-muted-foreground">IEEE Member</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;