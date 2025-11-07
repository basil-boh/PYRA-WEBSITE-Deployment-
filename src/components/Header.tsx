import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onOpenWaitlist: () => void;
}

export default function Header({ onOpenWaitlist }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/articles', label: 'Articles' },
    { href: '/contact', label: 'Contact' }
  ];

  // Animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/10"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo - Left Side */}
          <motion.div
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center space-x-2">
              <img src="/pyra.png" alt="PYRA Logo" className="w-10 h-10" />
              <span className="text-white font-bold text-xl">PYRA</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Right Side */}
          <motion.nav
            className="hidden md:flex items-center space-x-8 ml-auto mr-4"
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors ${location.pathname === item.href
                  ? 'text-yellow-400'
                  : 'text-white/80 hover:text-white'
                  }`}
                onClick={() => {
                  // Always scroll to top when clicking navigation
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>

          {/* CTA Button - Right Side */}
          <motion.div
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hidden md:block flex-shrink-0"
          >
            <Button
              className="btn-premium font-medium"
              onClick={onOpenWaitlist}
            >
              Join Waitlist
            </Button>
          </motion.div>

          {/* Mobile Menu Button - Right Side */}
          <motion.button
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:hidden p-2 text-white hover:text-yellow-400 transition-colors flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - Outside Container for Full Width */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden border-t border-white/10 absolute inset-x-0 top-full bg-background/95 backdrop-blur-xl"
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-4 py-2 text-sm font-medium transition-colors ${location.pathname === item.href
                  ? 'text-yellow-400'
                  : 'text-white/80 hover:text-white'
                  }`}
                onClick={() => {
                  setIsMenuOpen(false);
                  // Always scroll to top when clicking navigation
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Button
                className="w-full btn-premium font-medium"
                onClick={() => {
                  onOpenWaitlist();
                  setIsMenuOpen(false);
                }}
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}