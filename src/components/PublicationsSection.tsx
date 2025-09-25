import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Clock, CheckCircle, ExternalLink } from 'lucide-react';

const PublicationsSection = () => {
  const publications = [
    {
      title: 'Deep Learning based Approaches for Epileptic Seizure Prediction and Detection from EEG Data',
      journal: 'International Journal of Healthcare Technology and Management (Inderscience Publishers)',
      status: 'Under Review',
      type: 'Research Paper',
      description: 'Comprehensive study on advanced deep learning techniques for real-time epileptic seizure prediction and detection using EEG signal analysis.',
      keywords: ['Deep Learning', 'EEG Analysis', 'Medical AI', 'Seizure Detection', 'Healthcare Technology'],
      current: true
    },
    {
      title: 'A Comprehensive Review of Physics-Informed Neural Networks',
      journal: 'To be submitted',
      status: 'Work in Progress',
      type: 'Review Paper',
      description: 'An in-depth analysis of Physics-Informed Neural Networks (PINNs) and their applications across various scientific domains.',
      keywords: ['PINNs', 'Neural Networks', 'Scientific Computing', 'Physics-Based AI', 'Computational Science'],
      current: true
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Under Review':
        return <Clock className="h-4 w-4" />;
      case 'Published':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Under Review':
        return 'bg-accent/20 text-accent border-accent/30';
      case 'Published':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  return (
    <section id="publications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Research <span className="text-primary">Publications</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Contributing to scientific knowledge through research in AI, machine learning, and healthcare technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((pub, index) => (
            <Card 
              key={pub.title}
              className="border-border hover:border-primary transition-all duration-500 hover:shadow-glow-primary animate-fade-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <CardHeader>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between space-y-4 md:space-y-0">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-6 w-6 text-primary" />
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {pub.type}
                        </Badge>
                        <Badge className={getStatusColor(pub.status)}>
                          {getStatusIcon(pub.status)}
                          <span className="ml-2">{pub.status}</span>
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-foreground leading-relaxed">
                        {pub.title}
                      </CardTitle>
                      <p className="text-accent font-medium">{pub.journal}</p>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary hover:text-primary-foreground">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {pub.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Keywords:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pub.keywords.map((keyword) => (
                      <Badge 
                        key={keyword}
                        variant="secondary"
                        className="bg-secondary/50 text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Focus */}
        <div className="mt-16">
          <Card className="border-border bg-card/50 backdrop-blur-sm max-w-3xl mx-auto">
            <CardContent className="py-8 text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Research Focus</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My research interests lie at the intersection of artificial intelligence and healthcare technology, 
                with a particular focus on developing practical solutions for medical diagnosis and treatment 
                using advanced machine learning techniques.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Publication Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <Card className="border-border bg-card/50 backdrop-blur-sm text-center">
            <CardContent className="py-6">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <p className="text-muted-foreground">Publications</p>
            </CardContent>
          </Card>
          
          <Card className="border-border bg-card/50 backdrop-blur-sm text-center">
            <CardContent className="py-6">
              <div className="text-3xl font-bold text-accent mb-2">1</div>
              <p className="text-muted-foreground">Under Review</p>
            </CardContent>
          </Card>
          
          <Card className="border-border bg-card/50 backdrop-blur-sm text-center">
            <CardContent className="py-6">
              <div className="text-3xl font-bold text-primary mb-2">AI/ML</div>
              <p className="text-muted-foreground">Research Area</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;