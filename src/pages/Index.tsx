
import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DashboardCard from '@/components/dashboard/DashboardCard';
import ChartDisplay from '@/components/dashboard/ChartDisplay';
import FeatureCard from '@/components/ui/FeatureCard';
import ChatbotInterface from '@/components/ui/ChatbotInterface';
import AnimatedNumber from '@/components/ui/AnimatedNumber';
import GlassCard from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Leaf, 
  BarChart, 
  MessageSquare, 
  Truck, 
  DollarSign, 
  ChevronRight, 
  Wheat,
  Tractor,
  Send
} from 'lucide-react';

// Sample data for charts
const cropHealthData = [
  { name: 'Jan', value: 40 },
  { name: 'Feb', value: 30 },
  { name: 'Mar', value: 20 },
  { name: 'Apr', value: 27 },
  { name: 'May', value: 18 },
  { name: 'Jun', value: 23 },
  { name: 'Jul', value: 34 },
  { name: 'Aug', value: 65 },
  { name: 'Sep', value: 45 },
  { name: 'Oct', value: 50 },
  { name: 'Nov', value: 52 },
  { name: 'Dec', value: 42 },
];

const marketPriceData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
  { name: 'Aug', value: 4200 },
  { name: 'Sep', value: 4500 },
  { name: 'Oct', value: 5700 },
  { name: 'Nov', value: 6000 },
  { name: 'Dec', value: 6500 },
];

const subsidyData = [
  { name: 'Wheat', value: 12000 },
  { name: 'Rice', value: 19000 },
  { name: 'Corn', value: 5000 },
  { name: 'Soy', value: 15000 },
  { name: 'Cotton', value: 9800 },
];

const Index = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-farm-green/5 dark:from-gray-900 dark:to-farm-green/10 -z-10"></div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03] [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10">
          <svg className="h-full w-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center rounded-full bg-farm-green/10 px-4 py-1 text-sm font-medium text-farm-green">
                <Leaf className="h-4 w-4 mr-2" />
                <span>AI-Powered Farming Platform</span>
              </div>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-up [animation-delay:200ms]">
              Transforming Agriculture with Intelligent Insights
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance animate-fade-up [animation-delay:400ms]">
              Empower your farming decisions with AI-driven analytics, market forecasting, and real-time crop monitoring that helps you maximize yield and profit.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:600ms]">
              <Button className="h-12 px-6 bg-farm-green hover:bg-farm-green-dark text-white font-medium">
                Get Started
              </Button>
              <Button variant="outline" className="h-12 px-6">
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="relative w-full max-w-5xl mx-auto animate-fade-up [animation-delay:800ms]">
            <GlassCard className="rounded-2xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DashboardCard
                  title="Crop Health Index"
                  icon={<Leaf className="h-5 w-5" />}
                >
                  <ChartDisplay 
                    data={cropHealthData} 
                    type="area"
                    stroke="#4CAF50"
                    gradientFrom="#4CAF50"
                    gradientTo="rgba(76, 175, 80, 0.1)"
                  />
                </DashboardCard>
                
                <DashboardCard
                  title="Market Price Forecast"
                  icon={<BarChart className="h-5 w-5" />}
                >
                  <ChartDisplay 
                    data={marketPriceData} 
                    type="line"
                    stroke="#64B5F6"
                    height={230}
                  />
                </DashboardCard>
              </div>
            </GlassCard>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-farm-green opacity-10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-farm-sky-dark opacity-10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-farm-green/5">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-farm-green mb-2">
                <AnimatedNumber value={5000} formatFn={(v) => `${v}+`} />
              </p>
              <p className="text-sm text-muted-foreground">Farmers Using Platform</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-farm-green mb-2">
                <AnimatedNumber value={24} formatFn={(v) => `${v}/7`} />
              </p>
              <p className="text-sm text-muted-foreground">AI Support</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-farm-green mb-2">
                <AnimatedNumber value={92} formatFn={(v) => `${v}%`} />
              </p>
              <p className="text-sm text-muted-foreground">Accuracy Rate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-farm-green mb-2">
                <AnimatedNumber value={30} formatFn={(v) => `${v}%`} />
              </p>
              <p className="text-sm text-muted-foreground">Yield Increase</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Powerful Features for Modern Farming</h2>
            <p className="text-muted-foreground text-balance">
              Our comprehensive suite of tools helps you monitor crops, predict market trends, and connect with buyers, all in one integrated platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Crop Health Monitoring"
              description="AI-powered disease detection system that identifies issues before they become visible to the human eye, protecting your yield."
              icon={<Leaf className="h-6 w-6" />}
              buttonHref="#crop-health"
              buttonText="Explore Monitoring"
              isMain
            />
            <FeatureCard
              title="Market Price Forecasting"
              description="Advanced predictive analytics that help you understand market trends and determine the optimal time to sell your crops."
              icon={<BarChart className="h-6 w-6" />}
              buttonHref="#market-forecast"
            />
            <FeatureCard
              title="24/7 AI Support"
              description="Get instant answers to your farming questions with our intelligent chatbot trained on agricultural best practices."
              icon={<MessageSquare className="h-6 w-6" />}
              buttonHref="#assistant"
            />
            <FeatureCard
              title="Farmer-Consumer Connection"
              description="Direct marketplace connecting farmers with consumers, eliminating middlemen and increasing your profit margins."
              icon={<Tractor className="h-6 w-6" />}
              buttonHref="#marketplace"
            />
            <FeatureCard
              title="Seamless Delivery Integration"
              description="Integrated logistics solutions that handle the transportation of your products from farm to consumer efficiently."
              icon={<Truck className="h-6 w-6" />}
              buttonHref="#delivery"
            />
            <FeatureCard
              title="Subsidy Optimization"
              description="Real-time tracking of government subsidies with personalized recommendations to maximize your benefits."
              icon={<DollarSign className="h-6 w-6" />}
              buttonHref="#subsidies"
            />
          </div>
        </div>
      </section>
      
      {/* Demo Section */}
      <section id="crop-health" className="py-24 bg-farm-green/5">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4">
                <div className="flex items-center rounded-full bg-farm-green/10 px-4 py-1 text-sm font-medium text-farm-green">
                  <Leaf className="h-4 w-4 mr-2" />
                  <span>Crop Health Monitoring</span>
                </div>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Detect Issues Before They Affect Your Yield</h2>
              
              <p className="text-muted-foreground mb-6">
                Our AI-powered monitoring system uses computer vision to detect early signs of disease, pest infestation, and nutrient deficiencies before they become visible to the human eye.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Early disease detection with 92% accuracy',
                  'Real-time nutrient deficiency alerts',
                  'Pest identification and treatment recommendations',
                  'Historical data analysis for better crop planning'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-farm-green/20 text-farm-green flex items-center justify-center mt-0.5 mr-3">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="bg-farm-green hover:bg-farm-green-dark text-white">
                Learn More
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-farm-green/20 to-farm-sky/20 rounded-2xl -z-10 blur-xl opacity-50"></div>
              <GlassCard className="rounded-2xl overflow-hidden">
                <DashboardCard
                  title="Crop Health Analysis"
                  className="border-0 shadow-none"
                >
                  <div className="space-y-6">
                    <ChartDisplay 
                      data={cropHealthData} 
                      type="area"
                      height={250}
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg border p-4">
                        <div className="text-sm text-muted-foreground mb-1">Disease Risk</div>
                        <div className="text-2xl font-semibold text-farm-green">Low</div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="text-sm text-muted-foreground mb-1">Moisture Level</div>
                        <div className="text-2xl font-semibold text-farm-green">Optimal</div>
                      </div>
                    </div>
                  </div>
                </DashboardCard>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
      
      {/* Market Forecast Section */}
      <section id="market-forecast" className="py-24">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-farm-sky/20 to-farm-green/20 rounded-2xl -z-10 blur-xl opacity-50"></div>
              <GlassCard className="rounded-2xl overflow-hidden">
                <DashboardCard
                  title="Market Price Forecast"
                  className="border-0 shadow-none"
                >
                  <div className="space-y-6">
                    <ChartDisplay 
                      data={marketPriceData} 
                      type="line"
                      stroke="#64B5F6"
                      height={250}
                    />
                    
                    <div className="rounded-lg border p-4">
                      <div className="text-sm text-muted-foreground mb-1">Optimal Selling Period</div>
                      <div className="text-2xl font-semibold text-farm-sky-dark">October - November</div>
                    </div>
                  </div>
                </DashboardCard>
              </GlassCard>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-block mb-4">
                <div className="flex items-center rounded-full bg-farm-sky/10 px-4 py-1 text-sm font-medium text-farm-sky-dark">
                  <BarChart className="h-4 w-4 mr-2" />
                  <span>Market Price Forecasting</span>
                </div>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Maximize Your Profits with Data-Driven Decisions</h2>
              
              <p className="text-muted-foreground mb-6">
                Our advanced predictive analytics help you understand market trends and determine the optimal time to sell your crops, ensuring maximum profitability.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Price predictions with historical data analysis',
                  'Supply and demand forecasting',
                  'Customized alerts for price changes',
                  'Strategic recommendations for crop selection'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-farm-sky/20 text-farm-sky-dark flex items-center justify-center mt-0.5 mr-3">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="bg-farm-sky-dark hover:bg-farm-sky text-white">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Assistant Section */}
      <section id="assistant" className="py-24 bg-farm-green/5">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4">
                <div className="flex items-center rounded-full bg-farm-earth/10 px-4 py-1 text-sm font-medium text-farm-earth-dark">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  <span>AI Farming Assistant</span>
                </div>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Expert Guidance Available 24/7</h2>
              
              <p className="text-muted-foreground mb-6">
                Our intelligent chatbot is trained on extensive agricultural knowledge and best practices, providing instant answers to your farming questions whenever you need them.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Instant responses to farming queries',
                  'Personalized advice based on your crops',
                  'Treatment recommendations for plant diseases',
                  'Weather-based cultivation guidance'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-farm-earth/20 text-farm-earth-dark flex items-center justify-center mt-0.5 mr-3">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="bg-farm-earth-dark hover:bg-farm-earth text-white"
                onClick={() => setShowChatbot(true)}
              >
                Try the Assistant
              </Button>
            </div>
            
            <div className="relative h-[500px] max-h-[60vh]">
              <div className="absolute inset-0 bg-gradient-to-br from-farm-earth/20 to-farm-green/20 rounded-2xl -z-10 blur-xl opacity-50"></div>
              <GlassCard className="rounded-2xl overflow-hidden h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-center p-4 border-b">
                    <div className="w-8 h-8 rounded-full bg-farm-earth flex items-center justify-center text-white mr-3">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Farming Assistant</h3>
                      <div className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        <span className="text-xs text-muted-foreground">Online</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    <div className="flex max-w-[80%] mr-auto">
                      <div className="rounded-xl p-3 text-sm bg-gray-100 dark:bg-gray-800 rounded-bl-none">
                        Hello! I'm your AI farming assistant. How can I help you today?
                        <div className="text-[10px] mt-1 text-muted-foreground">
                          10:30 AM
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex max-w-[80%] ml-auto">
                      <div className="rounded-xl p-3 text-sm bg-farm-earth text-white rounded-br-none">
                        My tomato plants have yellow leaves. What could be causing this?
                        <div className="text-[10px] mt-1 text-white/70">
                          10:32 AM
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex max-w-[80%] mr-auto">
                      <div className="rounded-xl p-3 text-sm bg-gray-100 dark:bg-gray-800 rounded-bl-none">
                        Yellow leaves on tomato plants are often caused by nutrient deficiencies, particularly nitrogen, potassium, or magnesium. It could also be overwatering or a fungal disease like early blight.
                        <div className="text-[10px] mt-1 text-muted-foreground">
                          10:32 AM
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex max-w-[80%] mr-auto">
                      <div className="rounded-xl p-3 text-sm bg-gray-100 dark:bg-gray-800 rounded-bl-none">
                        I recommend checking the soil moisture first. If it's not overwatering, apply a balanced fertilizer with micronutrients. If you see dark spots with the yellowing, it might be early blight, which requires a fungicide treatment.
                        <div className="text-[10px] mt-1 text-muted-foreground">
                          10:33 AM
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border-t">
                    <div className="flex gap-2">
                      <Input 
                        placeholder="Ask anything about farming..."
                        disabled
                        className="min-h-[44px]"
                      />
                      <Button disabled className="bg-farm-earth text-white">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="mt-2 text-center">
                      <Button 
                        variant="link" 
                        className="text-farm-earth"
                        onClick={() => setShowChatbot(true)}
                      >
                        Start a real conversation
                      </Button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
      
      {/* Subsidy Section */}
      <section id="subsidies" className="py-24">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-farm-green/20 to-farm-sky/20 rounded-2xl -z-10 blur-xl opacity-50"></div>
              <GlassCard className="rounded-2xl overflow-hidden">
                <DashboardCard
                  title="Government Subsidies"
                  className="border-0 shadow-none"
                >
                  <div className="space-y-6">
                    <ChartDisplay 
                      data={subsidyData} 
                      type="bar"
                      height={250}
                      gradientFrom="#9C8867"
                      gradientTo="rgba(156, 136, 103, 0.1)"
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg border p-4">
                        <div className="text-sm text-muted-foreground mb-1">Available Programs</div>
                        <div className="text-2xl font-semibold text-farm-earth">12</div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="text-sm text-muted-foreground mb-1">Eligibility Status</div>
                        <div className="text-2xl font-semibold text-green-600">Qualified</div>
                      </div>
                    </div>
                  </div>
                </DashboardCard>
              </GlassCard>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-block mb-4">
                <div className="flex items-center rounded-full bg-farm-earth/10 px-4 py-1 text-sm font-medium text-farm-earth-dark">
                  <DollarSign className="h-4 w-4 mr-2" />
                  <span>Subsidy Optimization</span>
                </div>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Maximize Your Government Benefits</h2>
              
              <p className="text-muted-foreground mb-6">
                Our platform tracks available government subsidies in real-time and provides personalized recommendations to help you access all the financial support you're eligible for.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Real-time tracking of available subsidies',
                  'Eligibility analysis for your farm profile',
                  'Application assistance and documentation guidance',
                  'Deadline reminders for funding opportunities'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-farm-earth/20 text-farm-earth-dark flex items-center justify-center mt-0.5 mr-3">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="bg-farm-earth-dark hover:bg-farm-earth text-white">
                Explore Subsidies
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-farm-green">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Farming with AI?
            </h2>
            <p className="text-white/80 mb-8 text-balance">
              Join thousands of farmers who are already using our platform to increase yields, optimize pricing, and build sustainable farming businesses.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="h-12 px-6 bg-white text-farm-green hover:bg-gray-100 font-medium">
                Get Started for Free
              </Button>
              <Button variant="outline" className="h-12 px-6 text-white border-white hover:bg-white/10">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Chatbot */}
      <ChatbotInterface 
        minimized={!showChatbot}
        onToggleMinimize={() => setShowChatbot(!showChatbot)}
      />
    </div>
  );
};

export default Index;
