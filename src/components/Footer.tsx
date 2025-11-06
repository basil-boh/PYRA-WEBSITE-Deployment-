import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const footerVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

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

  return (
    <motion.footer
      className="bg-background border-t border-white/10"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo */}
          <motion.div
            className="md:col-span-1"
            variants={itemVariants}
          >
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="/pyra.png" alt="PYRA Logo" className="w-12 h-12" />
              <span className="text-white font-bold text-xl">PYRA</span>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/60 hover:text-yellow-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/60 hover:text-yellow-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-white/60 hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/60 hover:text-yellow-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/10 flex justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-white/60 text-sm"
            variants={itemVariants}
          >
            © {currentYear} PYRA. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
}