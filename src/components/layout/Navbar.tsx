
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Leaf } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Leaf className="h-8 w-8 text-farm-green mr-2" />
          <span className="font-display text-xl font-medium">AgriVision</span>
        </div>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#features" 
                className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                Features
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium">Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-farm-green/10 p-6 no-underline outline-none focus:shadow-md"
                        href="#crop-health"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-farm-green-dark">
                          Crop Health Monitoring
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          AI-powered disease detection and health tracking for your crops
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#market-forecast"
                      >
                        <div className="text-sm font-medium leading-none">Market Forecast</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Predictive analytics for market prices
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#assistant"
                      >
                        <div className="text-sm font-medium leading-none">AI Assistant</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          24/7 support for all your farming queries
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#about" 
                className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            Sign In
          </Button>
          <Button className="bg-farm-green hover:bg-farm-green-dark text-white font-medium transition-all">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
