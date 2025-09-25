import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Code, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am an undergraduate Computer Science student specializing in AI & ML at the 
              <span className="text-primary font-semibold"> Institute of Engineering and Management, Kolkata</span>. 
              Passionate about building intelligent systems, deep learning models, and contributing to impactful 
              open-source projects.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in artificial intelligence is driven by curiosity and the desire to solve 
              real-world problems through innovative machine learning solutions. I specialize in 
              deep learning architectures, particularly in areas like seizure prediction and 
              real-time signal processing.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding or researching, you'll find me contributing to open-source projects, 
              participating in hackathons, or exploring the latest developments in AI and machine learning.
            </p>
          </div>

          <div className="grid gap-6 animate-slide-in-right">
            <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-glow-primary">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-3 text-primary">
                  <Brain className="h-6 w-6" />
                  <span>AI Research</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Developing cutting-edge deep learning models for medical applications, 
                  particularly in epileptic seizure prediction and detection.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-glow-primary">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-3 text-accent">
                  <Code className="h-6 w-6" />
                  <span>Open Source</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Active contributor to various open-source projects and communities, 
                  sharing knowledge and building tools for the developer ecosystem.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-glow-primary">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-3 text-primary">
                  <Heart className="h-6 w-6" />
                  <span>Innovation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Passionate about creating technology that makes a positive impact 
                  on society and improves people's lives through intelligent solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;