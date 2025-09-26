import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
const ContactSection = () => {
  const contactInfo = [{
    icon: Phone,
    label: 'Phone',
    value: '+91 6289552885',
    href: 'tel:+916289552885',
    color: 'text-primary'
  }, {
    icon: Mail,
    label: 'Email',
    value: 'supratikbhowal23@gmail.com',
    href: 'mailto:supratikbhowal23@gmail.com',
    color: 'text-accent'
  }, {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: '#',
    color: 'text-primary'
  }, {
    icon: Github,
    label: 'GitHub',
    value: 'View my code',
    href: '#',
    color: 'text-accent'
  }];
  return <section id="contact" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Let's connect and explore opportunities in AI, machine learning, and innovative technology solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              
              {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return <Card key={contact.label} className="border-border hover:border-primary transition-all duration-300 hover:shadow-glow-primary animate-fade-in cursor-pointer" style={{
                animationDelay: `${index * 0.1}s`
              }} onClick={() => contact.href !== '#' && window.open(contact.href, '_blank')}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full bg-secondary/50 ${contact.color}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{contact.label}</h4>
                          <p className="text-muted-foreground">{contact.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>;
            })}
            </div>

            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-full bg-secondary/50 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Location</h4>
                    <p className="text-muted-foreground">Kolkata, West Bengal, India</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Currently based in Kolkata, open to remote opportunities and collaborations worldwide.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form or Additional Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Collaborate
              </h3>
              
              <Card className="border-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <p className="text-foreground">Research Collaborations</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <p className="text-foreground">Open Source Projects</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <p className="text-foreground">AI/ML Consulting</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <p className="text-foreground">Speaking Opportunities</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      I'm always interested in discussing new opportunities, research collaborations, 
                      and innovative projects in AI and machine learning.
                    </p>
                    
                    
                  </div>
                </CardContent>
              </Card>

              
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        
      </div>
    </section>;
};
export default ContactSection;