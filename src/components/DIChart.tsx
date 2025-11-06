import { useState } from 'react';

interface DIMetric {
  label: string;
  value: number;
  max: number;
  description: string;
}

const mockData: DIMetric[] = [
  { label: 'On-Time Ratio', value: 92, max: 100, description: 'Percentage of bills paid by due date (recency-weighted)' },
  { label: 'Payment Speed', value: 78, max: 100, description: 'Days from statement to payment (faster = higher)' },
  { label: 'Utilization', value: 85, max: 100, description: 'Credit utilization bands and volatility' },
  { label: 'Autopay Adoption', value: 95, max: 100, description: 'Percentage of bills on autopay' },
  { label: 'Interest Avoidance', value: 88, max: 100, description: 'Avoiding interest charges and fees' },
  { label: 'Dispute Pattern', value: 82, max: 100, description: 'Low chargebacks and dispute frequency' }
];

export function DIChart() {
  const [hoveredMetric, setHoveredMetric] = useState<DIMetric | null>(null);

  const averageScore = Math.round(mockData.reduce((acc, metric) => acc + metric.value, 0) / mockData.length);

  return (
    <div className="bg-glass rounded-2xl p-8">
      <div className="text-center mb-8">
        <h3 className="font-heading text-2xl font-bold text-pyra-ink mb-2">
          Your Financial Discipline Score
        </h3>
        <div className="text-4xl font-bold text-gradient mb-2">
          {averageScore}
        </div>
        <p className="text-pyra-muted">
          Currently: <span className="text-pyra-cyan font-semibold">Prime Club</span>
        </p>
      </div>

      <div className="space-y-4">
        {mockData.map((metric, index) => (
          <div
            key={metric.label}
            className="relative cursor-pointer"
            onMouseEnter={() => setHoveredMetric(metric)}
            onMouseLeave={() => setHoveredMetric(null)}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-pyra-ink">{metric.label}</span>
              <span className="text-sm text-pyra-muted">{metric.value}/{metric.max}</span>
            </div>

            <div className="w-full bg-navy-700 rounded-full h-2">
              <div
                className="h-2 bg-accent-gradient rounded-full transition-all duration-500"
                style={{
                  width: `${(metric.value / metric.max) * 100}%`,
                  animationDelay: `${index * 0.1}s`
                }}
              />
            </div>

            {/* Tooltip */}
            {hoveredMetric?.label === metric.label && (
              <div className="absolute z-10 bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-navy-700 border border-white/20 rounded-lg p-3 max-w-xs">
                <p className="text-xs text-pyra-muted">{metric.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-white/10">
        <p className="text-xs text-pyra-muted text-center">
          Score updates monthly based on your payment behavior and financial habits
        </p>
      </div>
    </div>
  );
}