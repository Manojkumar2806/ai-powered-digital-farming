
import { Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Leaf className="h-6 w-6 text-farm-green mr-2" />
              <span className="font-display text-lg font-medium">AgriVision</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering farmers with AI-driven insights for sustainable growth and improved market access.
            </p>
            <div className="flex gap-2 mb-6">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="max-w-xs" 
              />
              <Button className="bg-farm-green hover:bg-farm-green-dark text-white">
                Subscribe
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Platform
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-foreground hover:text-primary transition-colors">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="text-foreground hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AgriVision. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Facebook
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
