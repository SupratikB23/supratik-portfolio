import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, TrendingUp, Mic, ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Epilepsy Prediction & Detection',
      description: 'Developed Deep Learning algorithms for both real-time Epileptic Seizure Detection and Prediction on Electroencephalogram (EEG) signals. The CNN-BiLSTM model achieved 98% prediction accuracy, while the Transformer model showed 89% detection accuracy.',
      technologies: ['CNN-BiLSTM', 'Transformer', 'Deep Learning', 'Feature Engineering', 'NumPy', 'Matplotlib'],
      icon: Brain,
      accuracy: '98% Prediction, 89% Detection',
      type: 'Medical AI',
      featured: true
    },
    {
      title: 'Poker Hand Prediction Model',
      description: 'Built ML & DL models that predict poker hand categories based on dealt cards. Combined multiple algorithms including Random Forest, SVM, and MLP Classifier into a Stacking Classifier for enhanced performance.',
      technologies: ['Random Forest', 'SVM', 'MLP Classifier', 'Stacking Classifier', 'Machine Learning'],
      icon: TrendingUp,
      accuracy: '99.6% Accuracy',
      type: 'Classification',
      featured: true
    },
    {
      title: 'Audio Identification Model',
      description: 'Developed for COMSYS Hackathon - 4, this Machine Learning model accurately classifies audio samples based on age groups and gender by extracting relevant features from multiple samples per speaker.',
      technologies: ['Machine Learning', 'Python', 'NumPy', 'Pandas', 'Audio Processing'],
      icon: Mic,
      accuracy: 'Hackathon Project',
      type: 'Audio ML',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Innovative solutions combining AI, machine learning, and real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className={`border-border hover:border-primary transition-all duration-500 hover:shadow-glow-primary animate-fade-in ${
                  project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between space-y-4 md:space-y-0">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <IconComponent className="h-6 w-6 text-primary" />
                        <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                        {project.featured && (
                          <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {project.type}
                        </Badge>
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          {project.accuracy}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary hover:text-primary-foreground">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary hover:text-primary-foreground">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="secondary"
                          className="bg-secondary/50 text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <Card className="border-border bg-card/50 backdrop-blur-sm text-center">
            <CardContent className="py-6">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <p className="text-muted-foreground">Major Projects</p>
            </CardContent>
          </Card>
          
          <Card className="border-border bg-card/50 backdrop-blur-sm text-center">
            <CardContent className="py-6">
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <p className="text-muted-foreground">Best Accuracy</p>
            </CardContent>
          </Card>
          
          <Card className="border-border bg-card/50 backdrop-blur-sm text-center">
            <CardContent className="py-6">
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <p className="text-muted-foreground">Hackathon Win</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;