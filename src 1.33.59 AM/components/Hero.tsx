import { ArrowRight, Shield, TrendingUp, Users, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenWaitlist: () => void;
}

export function Hero({ onOpenWaitlist }: HeroProps) {
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

  // Split text into characters for animation
  const titleLetters = "PYRA".split("");
  const subtitleLetters = "Beyond Payments.".split("");

  return (
    <section
      className="relative min-h-[95vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Monochrome Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(135deg, #0A0A0A 0%, #2A2D33 40%, #F2F4F7 100%)',
          backgroundSize: '200% 200%'
        }}
      />

      {/* Background Options */}
      {backgroundType === 'video' ? (
        /* Video Background */
        <div className="absolute inset-0 overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-full object-cover object-top opacity-30" // Reduced opacity for monochrome effect
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
            className="w-full h-full object-cover opacity-30" // Reduced opacity for monochrome effect
          />
        </div>
      )}

      {/* Triangle Particles with monochrome colors */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              width: 0,
              height: 0,
              borderLeft: '3px solid transparent',
              borderRight: '3px solid transparent',
              borderBottom: '6px solid rgba(242, 244, 247, 0.3)', // Monochrome pearl color
              animation: 'floatParticle 8s ease-in-out infinite'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Company Identity */}
          <div className="mb-8">
            <h1 className="font-heading text-9xl md:text-[12rem] font-bold text-white mb-6">
              {titleLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + index * 0.08,
                    ease: "easeOut"
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <p className="text-2xl md:text-4xl text-white font-medium mb-2">
              {subtitleLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 1.0 + index * 0.04,
                    ease: "easeOut"
                  }}
                  className="inline-block"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}