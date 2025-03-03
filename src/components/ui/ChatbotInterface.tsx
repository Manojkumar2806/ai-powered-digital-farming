
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Send, X } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    content: "Hello! I'm your AI farming assistant. How can I help you today?",
    sender: 'bot',
    timestamp: new Date(),
  },
];

interface ChatbotInterfaceProps {
  className?: string;
  minimized?: boolean;
  onToggleMinimize?: () => void;
}

const ChatbotInterface = ({ 
  className,
  minimized = true,
  onToggleMinimize = () => {},
}: ChatbotInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue('');
    setIsLoading(true);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Thank you for your message. Our AI assistant is analyzing your query and will provide specific farming guidance shortly.',
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  if (minimized) {
    return (
      <Button
        onClick={onToggleMinimize}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg bg-farm-green hover:bg-farm-green-dark text-white flex items-center justify-center"
      >
        <MessageSquare className="w-6 h-6" />
      </Button>
    );
  }
  
  return (
    <div 
      className={cn(
        "fixed bottom-6 right-6 w-[380px] max-w-[calc(100vw-48px)] rounded-xl shadow-xl border backdrop-blur-card overflow-hidden flex flex-col transition-all duration-300 ease-in-out",
        "animate-scale-in",
        "bg-white dark:bg-gray-900",
        className
      )}
      style={{ height: '500px', maxHeight: 'calc(100vh - 120px)' }}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-farm-green flex items-center justify-center text-white mr-3">
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
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onToggleMinimize}
          className="h-8 w-8"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex max-w-[80%] animate-fade-up",
              message.sender === 'user' ? 'ml-auto' : 'mr-auto'
            )}
          >
            <div
              className={cn(
                "rounded-xl p-3 text-sm",
                message.sender === 'user'
                  ? 'bg-farm-green text-white rounded-br-none'
                  : 'bg-gray-100 dark:bg-gray-800 rounded-bl-none'
              )}
            >
              {message.content}
              <div
                className={cn(
                  "text-[10px] mt-1",
                  message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'
                )}
              >
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex mr-auto">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-3 rounded-bl-none">
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-100"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything about farming..."
            className="min-h-[44px] max-h-[120px] resize-none"
            rows={1}
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={!inputValue.trim() || isLoading}
            className="bg-farm-green hover:bg-farm-green-dark text-white"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotInterface;
