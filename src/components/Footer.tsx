import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neumorphic-inset border-t border-premium">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-white/20 clip-triangle"></div>
              </div>
              <span className="font-heading font-bold text-xl text-white">Pyra</span>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Redefining Credit and Financial Habits in Southeast Asia. Where financial discipline is rewarded,
              trust is monetized, and users ascend aspirational tiers of finance and lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-yellow-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-yellow-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-yellow-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:hello@pyra.club" className="text-white/60 hover:text-yellow-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Product</h4>
            <nav className="space-y-2">
              <Link to="/clubs" className="block text-white/60 hover:text-yellow-400 transition-colors">
                Pyra Clubs
              </Link>
              <Link to="/product" className="block text-white/60 hover:text-yellow-400 transition-colors">
                Features
              </Link>
              <a href="/investor-one-pager.pdf" className="block text-white/60 hover:text-yellow-400 transition-colors">
                Investor Deck
              </a>
              <a href="/media-kit.zip" className="block text-white/60 hover:text-yellow-400 transition-colors">
                Media Kit
              </a>
            </nav>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Company</h4>
            <nav className="space-y-2">
              <Link to="/about" className="block text-white/60 hover:text-yellow-400 transition-colors">
                About
              </Link>
              <Link to="/careers" className="block text-white/60 hover:text-yellow-400 transition-colors">
                Careers
              </Link>
              <Link to="/blog" className="block text-white/60 hover:text-yellow-400 transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="block text-white/60 hover:text-yellow-400 transition-colors">
                Contact
              </Link>
              <Link to="/legal/privacy" className="block text-white/60 hover:text-yellow-400 transition-colors">
                Privacy
              </Link>
              <Link to="/legal/terms" className="block text-white/60 hover:text-yellow-400 transition-colors">
                Terms
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-premium mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm">
            <p>© 2024 Pyra. All rights reserved.</p>
            <p className="mt-1">Singapore • BLOCK71 Incubator Applicant</p>
          </div>

          <div className="mt-4 md:mt-0">
            <div className="bg-premium-glass rounded-lg px-4 py-2 text-xs text-white/80">
              🚀 BLOCK71 Incubator Applicant
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}