import { ArrowRight, Shield, TrendingUp, Users, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';
import { useState, useRef } from 'react';

interface HeroProps {
  onOpenWaitlist: () => void;
}

export function Hero({ onOpenWaitlist }: HeroProps) {
  const [heroRef] = useInView();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Choose your background type: 'gif' or 'video'
  const backgroundType = 'video'; // Change this to 'video' if you want to use MP4

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  // Split "Pyra" into individual letters for animation
  const letters = "Pyra".split("");

  return (
    <section
      ref={heroRef}
      className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-gradient-deep"
    >
      {/* Background Options */}
      {backgroundType === 'video' ? (
        /* Video Background */
        <div className="absolute inset-0 overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-full object-cover object-top opacity-100 " // object-top for cropping
            autoPlay
            muted
            loop
            playsInline
            poster="/placeholder.svg"
            onLoadStart={() => console.log('Video loading started')}
            onLoadedData={() => console.log('Video data loaded successfully')}
            onError={(e) => console.error('Video error:', e)}
          >
            <source src="/hero-background7.mp4" type="video/mp4" />
            <p className="text-white">Your browser does not support the video tag.</p>
          </video>
        </div>
      ) : (
        /* GIF Background */
        <div className="absolute inset-0">
          <img
            src="/hero-background2.gif"
            alt="Pyra background animation"
            className="w-full h-full object-cover opacity-100"
          />
        </div>
      )}

      {/* Triangle Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="triangle-particle-premium absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Company Identity */}
          <div className="mb-8">
            <h1 className="font-heading text-9xl md:text-[12rem] font-bold text-white mb-6">
              {letters.map((letter, index) => (
                <span
                  key={index}
                  className="inline-block animate-fade-in"
                  style={{
                    animationDelay: `${0.3 + index * 0.2}s`,
                    animationFillMode: 'both'
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>
            <p
              className="text-2xl md:text-4xl text-white font-medium mb-2 animate-fade-in"
              style={{ animationDelay: '1.2s', animationFillMode: 'both' }}
            >
              Redefining Credit and Financial Habits in Southeast Asia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}