import { Linkedin, ArrowRight, Users, Target, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { AboutHeroBackground } from '@/components/AboutHeroBackground';

export default function About() {
  const founders = [
    {
      name: 'sanjeev',
      role: 'Founder & CEO',

      linkedin: 'https://www.linkedin.com/in/sanjeev2710'
    },
    {
      name: 'flo',
      role: 'CFO & COO',

      linkedin: 'http://www.linkedin.com/in/florian-gache'
    },
    {
      name: 'basil',
      role: 'CTO',

      linkedin: 'https://www.linkedin.com/in/basil-boh-81933b18b/'
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const founderCardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05 }
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <motion.section
        className="py-32 relative overflow-hidden"
        style={{ backgroundColor: '#0A0A0A' }}
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated Background */}
        <AboutHeroBackground />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
              variants={itemVariants}
            >
              About <span className="text-gradient">PYRA</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Redefining Credit and Financial Habits in Southeast Asia
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Founding Story */}
      <motion.section
        className="py-32 relative overflow-hidden"
        style={{ backgroundColor: '#0F0F0F' }}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-cyan-900/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="font-heading text-4xl md:text-5xl font-bold text-white mb-8 text-center"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Our Story
            </motion.h2>

            <motion.div
              className="bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p
                className="text-lg text-white/90 leading-relaxed mb-6"
                variants={itemVariants}
              >
                PYRA was founded to create an ecosystem where financial discipline is rewarded, trust is valued, and members ascend through aspirational tiers of finance and lifestyle. We saw a world where disciplined individuals were overlooked, penalized by fragmented tools and generic rewards, while reckless spending was celebrated with empty points and perks.
              </motion.p>

              <motion.p
                className="text-lg text-white/90 leading-relaxed mb-6"
                variants={itemVariants}
              >
                So we built a behavior first ecosystem where habits unlock access. Where building credit responsibly, managing expenses wisely, and making consistent choices elevate you to real status and meaningful privileges.
              </motion.p>

              <motion.p
                className="text-lg text-white/90 leading-relaxed"
                variants={itemVariants}
              >
                Starting in Southeast Asia, PYRA is shaping the financial super app for the disciplined, rewarding consistency, trust, and long term thinking with a club designed for those who rise.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission */}
      <motion.section
        className="py-32 relative overflow-hidden"
        style={{ backgroundColor: '#111315' }}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-cyan-900/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-heading text-4xl md:text-5xl font-bold text-white mb-4"
              variants={itemVariants}
            >
              Mission & Vision
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-emerald-400/40 transition-all duration-500 hover:scale-105"
              variants={itemVariants}
            >
              <h3 className="font-heading text-2xl font-semibold text-white mb-6">
                Our Mission
              </h3>
              <p className="text-white/90 leading-relaxed">
                To build an ecosystem where discipline is rewarded, trust is valued, and members rise through aspirational tiers of finance and lifestyle. We transform responsible credit behavior into a powerful asset that unlocks privilege and belonging.
              </p>
            </motion.div>

            <motion.div
              className="bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105"
              variants={itemVariants}
            >
              <h3 className="font-heading text-2xl font-semibold text-white mb-6">
                Our Vision
              </h3>
              <p className="text-white/90 leading-relaxed">
                To create the financial super app for Southeast Asia that rewards discipline with real access. Where good habits become the new currency and financial responsibility opens doors to premium experiences and opportunities.
              </p>
            </motion.div>
          </motion.div>



          <motion.div
            className="mt-12 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h4
              className="font-heading text-xl font-semibold text-white mb-4"
              variants={itemVariants}
            >
              Our Values
            </motion.h4>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={containerVariants}
            >
              {[
                'Exclusivity with Purpose',
                'Privacy as Privilege',
                'Trust, Earned Daily',
                'Elegance in the Everyday'
              ].map((value, i) => (
                <motion.div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:border-white/40 transition-all duration-300"
                  variants={itemVariants}
                >
                  <span className="text-white/90">{value}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Founders */}

    </div>
  );
}