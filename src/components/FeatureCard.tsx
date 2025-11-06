import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <div className="bg-premium-glass rounded-2xl p-6 border-premium shimmer-border">
      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center mb-4">
        <Icon className="text-white" size={24} />
      </div>

      <h3 className="font-heading text-xl font-semibold text-white mb-3">
        {title}
      </h3>

      <p className="text-white/80 leading-relaxed">
        {description}
      </p>
    </div>
  );
}