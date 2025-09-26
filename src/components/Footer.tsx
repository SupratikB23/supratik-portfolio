import { Github, Linkedin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8">
          {/* Main Footer Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Supratik Bhowal
            </h3>
            
          </div>

          {/* Social Links */}
          

          {/* Copyright */}
          <div className="pt-8 border-t border-border space-y-2">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Supratik Bhowal. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs flex items-center justify-center space-x-1">
              <span>Made with</span>
              <Heart className="h-3 w-3 text-red-500 fill-red-500" />
              <span>using React, TypeScript & Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;