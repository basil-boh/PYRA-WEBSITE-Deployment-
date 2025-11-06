import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Clubs', href: '/clubs' },
  { label: 'Product', href: '/product' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function Header({ onOpenWaitlist }: { onOpenWaitlist: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-premium">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 bg-white/20 clip-triangle"></div>
            </div>
            <span className="font-heading font-bold text-xl text-white">Pyra</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-yellow-400 ${location.pathname === item.href
                    ? 'text-yellow-400'
                    : 'text-white/80'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              onClick={onOpenWaitlist}
              className="btn-premium font-medium px-6"
            >
              Discover the Future
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-pyra-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-premium">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${location.pathname === item.href
                    ? 'text-gradient-premium'
                    : 'text-pyra-muted'
                    }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                onClick={() => {
                  onOpenWaitlist();
                  setMobileOpen(false);
                }}
                className="btn-premium font-medium w-full mt-4"
              >
                Discover the Future
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}