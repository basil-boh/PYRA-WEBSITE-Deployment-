import { CreditCard, Shield, TrendingUp, Eye, Clock, AlertTriangle, Star, Zap, Crown } from 'lucide-react';
import { DIChart } from '@/components/DIChart';
import { motion } from 'framer-motion';
import { ProductHeroBackground } from '@/components/ProductHeroBackground';

export default function Product() {
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

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const factorVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const clubCardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        className="py-24 bg-gradient-deep relative overflow-hidden"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated Background */}
        <ProductHeroBackground />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="font-heading text-5xl font-bold text-pyra-ink mb-6"
              variants={itemVariants}
            >
              Built for <span className="text-gradient">Southeast Asia</span>
            </motion.h1>
            <motion.p
              className="text-xl text-pyra-muted max-w-3xl mx-auto mb-8"
              variants={itemVariants}
            >
              Privacy-first financial tools that transform credit behavior into a valuable asset.
              Build trust, ascend through tiers, unlock your financial potential.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={containerVariants}
            >
              {[
                { icon: Shield, text: 'Privacy-first' },
                { icon: TrendingUp, text: 'Trust you earn' },
                { icon: CreditCard, text: 'Southeast Asia focus' },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  className="bg-glass rounded-full px-6 py-3 flex items-center space-x-2"
                  variants={badgeVariants}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <badge.icon size={16} className="text-pyra-cyan" />
                  <span className="text-pyra-muted">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Financial Discipline Section */}
      <motion.section
        className="py-24 bg-pyra-bg"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
              className="font-heading text-4xl font-bold text-pyra-ink mb-4"
              variants={itemVariants}
            >
              Financial Discipline Tracking
            </motion.h2>
            <motion.p
              className="text-xl text-pyra-muted max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Your financial habits, quantified. Our system tracks your payment behavior,
              spending patterns, and financial discipline to unlock status and benefits.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3
                className="font-heading text-2xl font-semibold text-pyra-ink mb-6"
                variants={itemVariants}
              >
                What builds your discipline score:
              </motion.h3>

              <motion.div
                className="space-y-4"
                variants={containerVariants}
              >
                {[
                  { icon: Clock, title: 'On-time Ratio', desc: 'Recency-weighted payment timing' },
                  { icon: TrendingUp, title: 'Payment Speed', desc: 'Days from statement to payment' },
                  { icon: CreditCard, title: 'Utilization Bands', desc: 'Credit usage patterns and volatility' },
                  { icon: Shield, title: 'Autopay Adoption', desc: 'Automated payment setup' },
                  { icon: AlertTriangle, title: 'Interest Avoidance', desc: 'Avoiding fees and interest charges' },
                  { icon: Eye, title: 'Dispute Patterns', desc: 'Low chargeback frequency' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    variants={factorVariants}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="w-10 h-10 bg-accent-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-white" size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-pyra-ink">{item.title}</h4>
                      <p className="text-pyra-muted text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <DIChart />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Pyra Clubs Preview */}
      <motion.section
        className="py-24 bg-navy-700"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="font-heading text-4xl font-bold text-pyra-ink mb-16"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            The Pyra Clubs
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: 'Spark',
                subtitle: 'Foundation',
                icon: Zap,
                features: ['Expense tracking', 'Group management', 'Financial education'],
                gradient: 'from-pyra-teal to-pyra-cyan'
              },
              {
                name: 'Prime',
                subtitle: 'Advanced',
                icon: Star,
                features: ['Unified card management', 'Hidden fee detection', 'Smart reminders'],
                gradient: 'from-pyra-cyan to-pyra-indigo'
              },
              {
                name: 'Nova',
                subtitle: 'Exclusive',
                icon: Crown,
                features: ['Luxury marketplace', 'Concierge services', 'Exclusive events'],
                gradient: 'from-pyra-indigo to-pyra-cyan'
              }
            ].map((club, index) => (
              <motion.div
                key={club.name}
                className="bg-glass rounded-2xl p-8"
                variants={clubCardVariants}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${club.gradient} flex items-center justify-center`}>
                  <club.icon className="text-white" size={32} />
                </div>

                <h3 className="font-heading text-2xl font-bold text-pyra-ink mb-2">
                  {club.name}
                </h3>
                <p className="text-pyra-muted mb-6">{club.subtitle}</p>

                <ul className="space-y-2 text-sm text-pyra-muted">
                  {club.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-pyra-cyan rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-pyra-muted">
              Learn more about club requirements and benefits →{' '}
              <a href="/clubs" className="text-pyra-cyan hover:underline">
                View all clubs
              </a>
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}