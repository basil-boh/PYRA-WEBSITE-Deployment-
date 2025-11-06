import { useState } from 'react';
import { X, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('pyra-waitlist-joined', 'true');
      localStorage.setItem('pyra-waitlist-email', email);

      toast({
        title: "Welcome to the Future! 🚀",
        description: "You're on the waitlist. We'll notify you when Pyra launches.",
      });

      setEmail('');
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-neumorphic-inset border border-premium rounded-2xl p-8 max-w-md w-full animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-pyra-muted hover:text-pyra-ink transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="text-white" size={24} />
          </div>
          <h2 className="font-heading text-2xl font-bold text-white mb-2">
            Discover the Future of Finance
          </h2>
          <p className="text-white/80">
            Be the first to experience how Pyra redefines credit and financial habits in Southeast Asia.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-background border-premium text-white placeholder:text-white/60"
            required
          />

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full btn-premium font-medium"
          >
            {isLoading ? 'Joining...' : 'Join the Future'}
          </Button>
        </form>

        <p className="text-xs text-white/60 text-center mt-4">
          We respect your privacy. No spam, ever.
        </p>
      </div>
    </div>
  );
}