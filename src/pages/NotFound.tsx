import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function NotFound() {
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05 }
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <motion.section
        className="py-24 bg-gradient-deep"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="text-8xl mb-8"
              variants={itemVariants}
            >
              🚀
            </motion.div>

            <motion.h1
              className="font-heading text-6xl font-bold text-pyra-ink mb-6"
              variants={itemVariants}
            >
              404
            </motion.h1>

            <motion.h2
              className="font-heading text-4xl font-bold text-pyra-ink mb-6"
              variants={itemVariants}
            >
              Page Not Found
            </motion.h2>

            <motion.p
              className="text-xl text-pyra-muted max-w-2xl mx-auto mb-8"
              variants={itemVariants}
            >
              Looks like you've ventured into uncharted financial territory.
              Don't worry—let's get you back on track to building better financial habits.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
            >
              <motion.div
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Button
                  className="bg-accent-gradient btn-sheen font-medium"
                  asChild
                >
                  <Link to="/">
                    <Home className="mr-2" size={16} />
                    Back to Home
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Button
                  variant="outline"
                  className="border-white/20 text-pyra-ink hover:bg-white/10"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="mr-2" size={16} />
                  Go Back
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Help Section */}
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
            className="bg-glass rounded-2xl p-8 lg:p-12 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="font-heading text-3xl font-bold text-pyra-ink mb-6"
              variants={itemVariants}
            >
              Need Help Finding Something?
            </motion.h3>

            <motion.p
              className="text-lg text-pyra-muted mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              While you're here, explore our main sections to discover how PYRA can help you
              build better financial habits and unlock exclusive benefits.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {[
                {
                  title: 'About PYRA',
                  description: 'Learn about our mission to redefine credit and financial habits',
                  link: '/about',
                  icon: '🎯'
                },
                {
                  title: 'Our Product',
                  description: 'Discover how we track financial discipline and reward good habits',
                  link: '/product',
                  icon: '⚡'
                },
                {
                  title: 'PYRA Clubs',
                  description: 'Explore our tiered membership system and exclusive benefits',
                  link: '/clubs',
                  icon: '👑'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-pyra-bg rounded-xl p-6"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2, ease: "easeOut" } }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="font-heading text-xl font-semibold text-pyra-ink mb-2">
                    {item.title}
                  </h4>
                  <p className="text-pyra-muted text-sm mb-4">
                    {item.description}
                  </p>
                  <Link
                    to={item.link}
                    className="text-pyra-cyan hover:text-yellow-400 transition-colors text-sm font-medium"
                  >
                    Learn More →
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
