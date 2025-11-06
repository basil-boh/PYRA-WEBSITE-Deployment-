import { Button } from '@/components/ui/button';
import { Hero } from '@/components/Hero';
import { FeatureCard } from '@/components/FeatureCard';
import { ComingSoonModal } from '@/components/ComingSoonModal';
import { useState } from 'react';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Users,
  Star,
  Zap,
  Crown,
  Target,
  Split,
  BarChart3,
  Wallet,
  Gift,
  Download,
  CreditCard,
  Lock,
  Eye,
} from 'lucide-react';

interface HomeProps {
  onOpenWaitlist: () => void;
}

export function Home({ onOpenWaitlist }: HomeProps) {
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

  const onOpenComingSoon = () => setIsComingSoonOpen(true);
  const onCloseComingSoon = () => setIsComingSoonOpen(false);

  const allFeatures = [
    {
      icon: Target,
      title: 'Unified Credit Card Management',
      description: 'Single dashboard for all your credit cards with comprehensive analytics and insights.',
      club: 'Prime'
    },
    {
      icon: Shield,
      title: 'Hidden Fee Detection',
      description: 'AI-powered e-statement scanning to uncover hidden charges and save you money.',
      club: 'Prime'
    },
    {
      icon: Gift,
      title: 'Smart Reminders + Rewards',
      description: 'Timely alerts and personalized offers that reward your financial discipline.',
      club: 'Prime'
    },
    {
      icon: BarChart3,
      title: 'Holistic Expense Tracking',
      description: 'Track spending across both debit and credit for complete financial visibility.',
      club: 'Prime'
    },
    {
      icon: BarChart3,
      title: 'Expense Tracking',
      description: 'Build healthy spending habits with intuitive debit-first expense tracking tools.',
      club: 'Spark'
    },
    {
      icon: Split,
      title: 'Group Expense Management',
      description: 'Splitwise-style tools for managing shared expenses with friends and family.',
      club: 'Spark'
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };



  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05 }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      <Hero onOpenWaitlist={onOpenWaitlist} />

      {/* Mission & Introduction Section */}
      <motion.section
        className="min-h-[50vh] flex items-center justify-center"
        style={{ backgroundColor: '#111315' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-25% 0px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2
              className="text-3xl md:text-4xl text-white mb-6 font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {[
                "Built", "for", "those", "who", "belong."
              ].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0.3, color: "#666" }}
                  whileInView={{
                    opacity: 1,
                    color: "#ffffff",
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.1 * index
                    }
                  }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {[
                "PYRA", "is", "built", "to", "recognise", "discipline", "at", "every", "stage.", "From", "habits", "formed", "to", "privileges", "unlocked,", "it", "is", "a", "path", "that", "rewards", "responsibility", "with", "access", "and", "trust."
              ].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0.3, color: "#666" }}
                  whileInView={{
                    opacity: 1,
                    color: "#ffffff",
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.05 * index
                    }
                  }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              variants={containerVariants}
            >
              <motion.div
                variants={buttonVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } }}
              >
                <Button
                  onClick={onOpenWaitlist}
                  size="lg"
                  className="btn-premium font-semibold px-8 py-3 text-lg"
                >
                  Join the Club
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </motion.div>

            </motion.div>


          </motion.div>
        </div>
      </motion.section>

      {/* PYRA Statement Section */}
      <motion.section
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: '#0A0A0A' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            {/* Main Statement */}
            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-16 tracking-wide leading-tight"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {[
                "Discipline", "deserves", "more."
              ].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0.3, color: "#666" }}
                  whileInView={{
                    opacity: 1,
                    color: "#ffffff",
                    transition: {
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.2 * index
                    }
                  }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  className="inline-block mr-6"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            {/* Detailed Statement */}
            <motion.div
              className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-5xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              {[
                "PYRA", "is", "not", "just", "an", "app.", "It", "is", "a", "members-only", "club", "that", "rewards", "those", "who", "rise", "with", "responsibility.", "Each", "act", "of", "discipline", "builds", "credit,", "trust,", "and", "influence,", "unlocking", "privileges", "that", "money", "alone", "cannot", "buy."
              ].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0.3, color: "#666" }}
                  whileInView={{
                    opacity: 1,
                    color: "#ffffff",
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.05 * index
                    }
                  }}
                  viewport={{ once: true, margin: "-5% 0px" }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>



      {/* PYRA Clubs Section */}
      <motion.section
        id="clubs"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: '#0F0F0F' }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Animated Background Elements for entire section */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-transparent to-cyan-400/5" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-amber-400/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-4 md:mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-heading text-4xl md:text-5xl font-bold text-white mb-4"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Membership has its privileges.
            </motion.h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Discipline determines your tier. Excellence unlocks your potential.
            </p>
          </motion.div>

          {/* Club Cards - Full Viewport Section with Premium Elevation */}
          <motion.div
            className="relative mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}

          >
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Cards Container - Bottom-Aligned Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end max-w-9xl mx-auto">
                {/* Spark Club - Left Side (Base Level) */}
                <motion.div
                  className="bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-10 border border-white/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 group h-[500px] flex flex-col"
                  variants={cardVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                //</div>style={{ y: 80 }}
                >
                  <div className="text-center mb-8 flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      <Zap className="text-white" size={36} />
                    </div>
                    <h3 className="font-heading text-3xl font-bold text-white mb-3">Spark Club</h3>
                    <p className="text-cyan-400 font-medium text-lg">The beginning of privilege.</p>
                  </div>
                  <p className="text-white/90 text-justify mb-8 text-lg leading-relaxed flex-grow">
                    Where first steps matter. Spark is for new earners and students building credit for the first time. Every payment made responsibly is a step closer to greater rewards and lasting freedom.
                  </p>
                  <div className="text-center mt-auto flex-shrink-0">
                    <div className="inline-flex items-center space-x-2 bg-cyan-400/20 rounded-full px-4 py-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-cyan-400 text-sm font-medium">Entry Level</span>
                    </div>
                  </div>
                </motion.div>

                {/* Prime Club - Center (Middle Tier) */}
                <motion.div
                  className="bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-10 border border-white/20 hover:border-orange-400/40 transition-all duration-500 hover:scale-105 group h-[500px] flex flex-col"
                  variants={cardVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                //style={{ y: 20 }}
                >
                  <div className="text-center mb-8 flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      <Star className="text-white" size={36} />
                    </div>
                    <h3 className="font-heading text-3xl font-bold text-white mb-3">Prime Club</h3>
                    <p className="text-amber-400 font-medium text-lg">Discipline, rewarded</p>
                  </div>
                  <p className="text-white/90 text-justify mb-8 text-lg leading-relaxed flex-grow">
                    Your consistency creates power. Prime celebrates discipline with tailored financial products, exclusive rewards, unified insights, and privileges beyond the ordinary.
                  </p>
                  <div className="text-center mt-auto flex-shrink-0">
                    <div className="inline-flex items-center space-x-2 bg-amber-400/20 rounded-full px-4 py-2">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-amber-400 text-sm font-medium">Premium Tier</span>
                    </div>
                  </div>
                </motion.div>

                {/* Nova Club - Right Side (Same Size as Spark) */}
                <motion.div
                  className="bg-premium-glass/95 backdrop-blur-xl rounded-3xl p-10 border border-amber-400/60 hover:border-amber-400/80 relative z-10 lg:mb-0 mb-8 md:-translate-y-8 lg:-translate-y-16 transition-all duration-500 hover:scale-105 group h-[500px] flex flex-col"
                  variants={cardVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                //style={{ y: -40 }}
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-400  text-black px-6 py-2 rounded-full text-sm font-bold">
                      MOST EXCLUSIVE
                    </div>
                  </div>
                  <div className="text-center mb-8 flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      <Crown className="text-white" size={36} />
                    </div>
                    <h3 className="font-heading text-3xl font-bold text-white mb-3">Nova Club</h3>
                    <p className="text-orange-400 font-medium text-lg">Excellence, redefined.</p>
                  </div>
                  <p className="text-white/90 text-justify mb-8 text-lg leading-relaxed flex-grow">
                    Nova isn't just a tier, it's a destination. Earned, never given, it represents the highest form of financial discipline. Members gain access to privileges only for the top 1%.
                  </p>
                  <div className="text-center mt-auto flex-shrink-0">
                    <div className="inline-flex items-center space-x-2 bg-orange-400/20 rounded-full px-4 py-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-orange-400 text-sm font-medium">Elite Status</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* Core Features Grid - Premium Luxury Design */}
      <motion.section
        className="py-32 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-cyan-900/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced Section Header */}
          <motion.div
            className="text-center mb-24"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-full px-6 py-3 mb-8 border border-indigo-400/30">
              <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full"></div>
              <span className="text-indigo-300 text-sm font-medium">Core Features</span>
            </div>
            <motion.h2
              className="font-heading text-5xl md:text-6xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {[
                "What", "Discipline", "Unlocks"
              ].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0.3, color: "#666" }}
                  whileInView={{
                    opacity: 1,
                    color: "#ffffff",
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.2 * index
                    }
                  }}
                  viewport={{ once: true }}
                  className="inline-block mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <motion.p
              className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              {[
                "From", "seamless", "credit", "management", "to", "exclusive", "privileges,", "PYRA", "is", "designed", "for", "those", "who", "rise."
              ].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0.3, color: "#666" }}
                  whileInView={{
                    opacity: 1,
                    color: "#ffffff",
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.05 * index
                    }
                  }}
                  viewport={{ once: true }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Premium Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* PYRA One */}
            <motion.div
              className="group relative bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 hover:bg-white/5"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <CreditCard className="text-white" size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  PYRA One
                </h3>
                <p className="text-white/90 leading-relaxed text-lg">
                  Unified Dashboard
                </p>
                <p className="text-white/70 text-sm leading-relaxed mt-2">
                  All your credit and debit cards in one elegant view. One club, every card.
                </p>
              </div>
            </motion.div>

            {/* PYRA Shield */}
            <motion.div
              className="group relative bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-emerald-400/40 transition-all duration-500 hover:scale-105 hover:bg-white/5"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-green-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <Shield className="text-white" size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  PYRA Shield
                </h3>
                <p className="text-white/90 leading-relaxed text-lg">
                  Hidden Fee Detection
                </p>
                <p className="text-white/70 text-sm leading-relaxed mt-2">
                  AI scans every e-statement for late fees, extra interest, and duplicate charges, protecting your discipline from unfair costs.
                </p>
              </div>
            </motion.div>

            {/* PYRA Edge */}
            <motion.div
              className="group relative bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-amber-400/40 transition-all duration-500 hover:scale-105 hover:bg-white/5"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <Gift className="text-white" size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  PYRA Edge
                </h3>
                <p className="text-white/90 leading-relaxed text-lg">
                  Smart Reminders & Control
                </p>
                <p className="text-white/70 text-sm leading-relaxed mt-2">
                  On-time payment alerts and insights that keep you ahead, always in control.
                </p>
              </div>
            </motion.div>

            {/* PYRA Insights */}
            <motion.div
              className="group relative bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 hover:bg-white/5"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <BarChart3 className="text-white" size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  PYRA Insights
                </h3>
                <p className="text-white/90 leading-relaxed text-lg">
                  Credit Habits & Score Builder
                </p>
                <p className="text-white/70 text-sm leading-relaxed mt-2">
                  Personalised analytics that turn habits into a stronger financial profile.
                </p>
              </div>
            </motion.div>

            {/* PYRA Split */}
            <motion.div
              className="group relative bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-indigo-400/40 transition-all duration-500 hover:scale-105 hover:bg-white/5"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <Users className="text-white" size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  PYRA Split
                </h3>
                <p className="text-white/90 leading-relaxed text-lg">
                  Shared Expense Management
                </p>
                <p className="text-white/70 text-sm leading-relaxed mt-2">
                  Seamlessly split and settle expenses with friends and family — the smart way to share.
                </p>
              </div>
            </motion.div>

            {/* PYRA Privé */}
            <motion.div
              className="group relative bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-yellow-400/40 transition-all duration-500 hover:scale-105 hover:bg-white/5"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <Crown className="text-white" size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  PYRA Privé
                </h3>
                <p className="text-white/90 leading-relaxed text-lg">
                  Exclusive Rewards & Privileges
                </p>
                <p className="text-white/70 text-sm leading-relaxed mt-2">
                  Unlock curated rewards and lifestyle benefits as you rise from Spark to Nova.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Trust & Security Section */}
      <motion.section
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: '#0A0A0A' }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-teal-900/20" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-green-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-24"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full px-6 py-3 mb-8 border border-emerald-400/30">
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
              <span className="text-emerald-300 text-sm font-medium">Trust & Security</span>
            </div>
            <motion.h2
              className="font-heading text-5xl md:text-6xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {[
                "Bank-Grade", "Trust.", "Member-First", "Privacy."
              ].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0.3, color: "#666" }}
                  whileInView={{
                    opacity: 1,
                    color: "#ffffff",
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.2 * index
                    }
                  }}
                  viewport={{ once: true }}
                  className="inline-block mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <motion.p
              className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              {[
                "PYRA", "runs", "on", "MAS", "compliant", "rails", "with", "bank", "grade", "encryption.", "Your", "data", "is", "never", "sold,", "it", "is", "used", "only", "to", "personalise", "your", "journey", "and", "unlock", "privileges", "for", "you."
              ].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0.3, color: "#666" }}
                  whileInView={{
                    opacity: 1,
                    color: "#ffffff",
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.05 * index
                    }
                  }}
                  viewport={{ once: true }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Trust Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Trust Feature 1 */}
            <motion.div
              className="group relative bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-emerald-400/40 transition-all duration-500 hover:scale-105 hover:bg-white/5"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-green-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <Shield className="text-white" size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  MAS Compliant
                </h3>
                <p className="text-white/90 leading-relaxed text-lg">
                  Built on regulatory-compliant infrastructure for your peace of mind.
                </p>
              </div>
            </motion.div>

            {/* Trust Feature 2 */}
            <motion.div
              className="group relative bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-teal-400/40 transition-all duration-500 hover:scale-105 hover:bg-white/5"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <Lock className="text-white" size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  Bank-Grade Encryption
                </h3>
                <p className="text-white/90 leading-relaxed text-lg">
                  Military-grade security protocols protect your financial data.
                </p>
              </div>
            </motion.div>

            {/* Trust Feature 3 */}
            <motion.div
              className="group relative bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-blue-400/40 transition-all duration-500 hover:scale-105 hover:bg-white/5"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <Eye className="text-white" size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  Privacy First
                </h3>
                <p className="text-white/90 leading-relaxed text-lg">
                  Your data is never sold, only used to enhance your experience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Final Closing Section */}
      <motion.section
        className="py-32 relative overflow-hidden"
        style={{ backgroundColor: '#0A0A0A' }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-cyan-900/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {[
                "It", "pays", "to", "be", "disciplined."
              ].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0.3, color: "#666" }}
                  whileInView={{
                    opacity: 1,
                    color: "#ffffff",
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.15 * index
                    }
                  }}
                  viewport={{ once: true }}
                  className="inline-block mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Join PYRA. Unlock your journey from Spark to Nova. Privilege awaits the ones who earn it.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={buttonVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } }}
            >
              <Button
                onClick={onOpenWaitlist}
                size="lg"
                className="btn-premium font-semibold px-8 py-4 text-lg"
              >
                Join the Club
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 font-semibold px-8 py-4 text-lg backdrop-blur-sm"
                onClick={onOpenComingSoon}
              >
                Download App
                <Download className="ml-2" size={20} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* PYRA Super-App Vision Section */}


      {/* Coming Soon Modal */}
      <ComingSoonModal
        isOpen={isComingSoonOpen}
        onClose={onCloseComingSoon}
        onOpenWaitlist={onOpenWaitlist}
      />
    </div>
  );
}