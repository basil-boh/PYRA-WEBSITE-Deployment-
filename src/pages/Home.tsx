import { Button } from '@/components/ui/button';
import { Hero } from '@/components/Hero';
import { FeatureCard } from '@/components/FeatureCard';
import { WaitlistModal } from '@/components/WaitlistModal';
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
} from 'lucide-react';

export function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const onOpenWaitlist = () => setIsWaitlistOpen(true);
  const onCloseWaitlist = () => setIsWaitlistOpen(false);

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

  const heroVariants = {
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
        className="py-16"
        style={{ backgroundColor: '#141414' }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Transform your credit behavior into a valuable asset. Build an ecosystem where financial discipline is rewarded,
              trust is monetized, and you ascend aspirational tiers of finance and lifestyle.
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
                  Discover the Future of Finance
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </motion.div>
              <motion.div
                variants={buttonVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg"
                  onClick={() => document.getElementById('clubs')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Pyra Clubs
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={containerVariants}
            >
              {[
                { icon: TrendingUp, text: 'Financial discipline rewarded' },
                { icon: Shield, text: 'Trust monetized' },
                { icon: Users, text: 'Ascend through tiers' },
                { icon: Shield, text: 'Privacy first' },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  className="bg-premium-glass rounded-full px-4 py-2 flex items-center space-x-2"
                  variants={badgeVariants}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <badge.icon size={16} className="text-white" />
                  <span className="text-sm text-white">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Pyra Clubs & Features Section */}
      <motion.section
        id="clubs"
        className="py-24"
        style={{ backgroundColor: '#0F0F0F' }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-heading text-4xl font-bold text-white mb-4"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              The Pyra Clubs: A Tiered Ecosystem of <span className="text-yellow-400">Trust</span>
            </motion.h2>
            <motion.p
              className="text-xl text-white/80 max-w-3xl mx-auto mb-8"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Each club represents a level of financial discipline and trust, unlocking progressively more exclusive benefits.
              From building foundational habits to accessing premium financial tools, Pyra guides your journey to financial excellence.
            </motion.p>
          </motion.div>

          {/* Club Overview Cards */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Prime Club */}
            <motion.div
              className="bg-premium-glass rounded-2xl p-8 border-premium"
              variants={cardVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-gray-300 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Star className="text-white" size={32} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Prime Club</h3>
                <p className="text-cyan-400 font-medium">CBS Score 1800+</p>
              </div>
              <p className="text-white/80 text-center mb-6">
                The core tier for established users with advanced financial tracking and credit management tools.
              </p>
            </motion.div>

            {/* Spark Club */}
            <motion.div
              className="bg-premium-glass rounded-2xl p-8 border-premium"
              variants={cardVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Zap className="text-white" size={32} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Spark Club</h3>
                <p className="text-teal-400 font-medium">New-to-Credit & Students</p>
              </div>
              <p className="text-white/80 text-center mb-6">
                The launchpad for building the foundation of financial discipline and healthy spending habits.
              </p>
            </motion.div>

            {/* Nova Club */}
            <motion.div
              className="bg-premium-glass rounded-2xl p-8 border-premium"
              variants={cardVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Crown className="text-white" size={32} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Nova Club</h3>
                <p className="text-yellow-400 font-medium">Most Exclusive Tier</p>
              </div>
              <p className="text-white/80 text-center mb-6">
                Earned through discipline, granting access to the highest-end financial and lifestyle products.
              </p>
            </motion.div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="font-heading text-3xl font-bold text-white mb-8"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Core Features & Functionality
            </motion.h3>
            <motion.p
              className="text-xl text-white/80 max-w-3xl mx-auto mb-12"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Our comprehensive suite of tools is designed to build financial discipline and unlock exclusive benefits.
              Whether you're starting your financial journey or managing complex portfolios, Pyra provides the insights and tools you need.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {allFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={featureVariants}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Pyra Super-App Vision Section */}
      <motion.section
        className="py-24"
        style={{ backgroundColor: '#141414' }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-heading text-4xl font-bold text-white mb-8"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              The Pyra Super-App Vision
            </motion.h2>

            <motion.p
              className="text-lg text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              From Credit → Savings → Investments → Lifestyle, Pyra monetizes trust and rewards responsibility.
              Your financial discipline becomes your most valuable asset, unlocking a world of possibilities.
            </motion.p>

            {/* Vision Architecture */}
            <motion.div
              className="relative mb-16"
              variants={containerVariants}
            >
              <div className="flex flex-col items-center space-y-6">
                {/* Lifestyle Tier - Top */}
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 w-80 text-center border border-white/20"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="text-black" size={24} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">Lifestyle</h3>
                  <p className="text-white/70 text-sm">Premium experiences & exclusive access</p>
                </motion.div>

                {/* Connection Line */}
                <motion.div
                  className="w-px h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                ></motion.div>

                {/* Investments Tier */}
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 w-96 text-center border border-white/20"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="text-white" size={24} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">Investments</h3>
                  <p className="text-white/70 text-sm">Wealth building & portfolio management</p>
                </motion.div>

                {/* Connection Line */}
                <motion.div
                  className="w-px h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                ></motion.div>

                {/* Savings Tier */}
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 w-[28rem] text-center border border-white/20"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wallet className="text-white" size={24} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">Savings</h3>
                  <p className="text-white/70 text-sm">Smart saving & financial goals</p>
                </motion.div>

                {/* Connection Line */}
                <motion.div
                  className="w-px h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                ></motion.div>

                {/* Credit Foundation - Base */}
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 w-full max-w-lg text-center border border-white/20"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">Credit</h3>
                  <p className="text-white/70 text-sm">Building trust through discipline</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={buttonVariants}>
              <Button
                onClick={onOpenWaitlist}
                size="lg"
                className="btn-premium font-semibold px-8 py-3 text-lg"
              >
                Join the Future
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Investor Section */}
      <motion.section
        className="py-24"
        style={{ backgroundColor: '#0F0F0F' }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-heading text-3xl font-bold text-white mb-8"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Building the future of financial discipline
            </motion.h2>

            <motion.p
              className="text-lg text-white/80 mb-12 leading-relaxed"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Pyra transforms financial responsibility into aspiration through behavior-first status tiers.
              Our revenue model combines partner revenue sharing, premium Nova subscriptions, and future
              credit margin opportunities—creating sustainable growth while rewarding disciplined members.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
            >
              <motion.div
                variants={buttonVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } }}
              >
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  asChild
                >
                  <a href="/investor-one-pager.pdf" download>
                    <Download className="mr-2" size={20} />
                    Investor One-Pager (PDF)
                  </a>
                </Button>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } }}
              >
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  asChild
                >
                  <a href="/media-kit.zip" download>
                    <Download className="mr-2" size={20} />
                    Media Kit (ZIP)
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={onCloseWaitlist} />
    </div>
  );
}