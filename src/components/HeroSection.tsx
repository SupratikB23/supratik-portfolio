import { Phone, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import heroBackground from '@/assets/hero-bg.jpg';
import profileImage from '@/assets/profile-placeholder.jpg';
const HeroSection = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{
    backgroundImage: `url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img src={profileImage} alt="Supratik Bhowal" className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-glow-primary" />
              <div className="absolute inset-0 rounded-full animate-glow-pulse"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Supratik Bhowal
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground animate-fade-in-delayed">
              <span className="text-primary">Student</span> | 
              <span className="text-accent"> AI & ML Enthusiast</span> | 
              <span className="text-primary"> Open Source Contributor</span>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 animate-slide-in-right">
            
            
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:shadow-glow-primary">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm">supratikbhowal23@gmail.com</span>
              </div>
            </Card>
            
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:shadow-glow-primary">
              <div className="flex items-center space-x-3">
                <Linkedin className="h-5 w-5 text-primary" />
                <span className="text-sm">LinkedIn</span>
              </div>
            </Card>
            
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:shadow-glow-primary">
              <div className="flex items-center space-x-3">
                <Github className="h-5 w-5 text-primary" />
                <span className="text-sm">GitHub</span>
              </div>
            </Card>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-3 text-lg shadow-glow-primary hover:shadow-glow-accent transition-all duration-300" onClick={() => document.getElementById('about')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Explore My Work
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;