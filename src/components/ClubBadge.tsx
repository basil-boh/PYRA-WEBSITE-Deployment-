interface ClubBadgeProps {
  tier: 'spark' | 'prime' | 'nova';
  title: string;
  threshold: string;
  features: string[];
  isActive?: boolean;
}

const tierStyles = {
  spark: {
    gradient: 'from-pyra-teal to-pyra-cyan',
    bg: 'bg-pyra-teal/10',
    border: 'border-pyra-teal/20',
    text: 'text-pyra-teal'
  },
  prime: {
    gradient: 'from-pyra-cyan to-pyra-indigo',
    bg: 'bg-pyra-cyan/10',
    border: 'border-pyra-cyan/20',
    text: 'text-pyra-cyan'
  },
  nova: {
    gradient: 'from-pyra-indigo to-pyra-cyan',
    bg: 'bg-pyra-indigo/10',
    border: 'border-pyra-indigo/20',
    text: 'text-pyra-indigo'
  }
};

export function ClubBadge({ tier, title, threshold, features, isActive = false }: ClubBadgeProps) {
  const style = tierStyles[tier];

  return (
    <div className={`
      bg-glass rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-105
      ${isActive ? style.border : 'border-white/10'}
      ${isActive ? 'ring-2 ring-pyra-cyan ring-opacity-50' : ''}
    `}>
      <div className="text-center mb-6">
        <div className={`
          w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${style.gradient} 
          flex items-center justify-center
        `}>
          <div className="w-8 h-8 bg-white/20 clip-triangle" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-pyra-ink mb-2">
          {title}
        </h3>
        <p className="text-sm text-pyra-muted">
          {threshold}
        </p>
      </div>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className={`w-2 h-2 rounded-full mt-2 ${style.text.replace('text-', 'bg-')}`} />
            <span className="text-pyra-muted text-sm leading-relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}