import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Home } from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Clubs from './pages/Clubs';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import { WaitlistModal } from './components/WaitlistModal';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const onOpenWaitlist = () => setIsWaitlistOpen(true);
  const onCloseWaitlist = () => setIsWaitlistOpen(false);

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Header onOpenWaitlist={onOpenWaitlist} />
        <main>
          <Routes>
            <Route path="/" element={<Home onOpenWaitlist={onOpenWaitlist} />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
            <Route path="/contact" element={<Contact onOpenWaitlist={onOpenWaitlist} />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />

        {/* Global Waitlist Modal */}
        <WaitlistModal isOpen={isWaitlistOpen} onClose={onCloseWaitlist} />
      </div>
    </Router>
  );
}

export default App;
