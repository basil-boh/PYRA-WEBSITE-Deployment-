import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { articles } from '@/data/articles';

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-white/80 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/articles">
            <Button className="btn-premium">
              <ArrowLeft className="mr-2" size={20} />
              Back to Articles
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = articles.findIndex(a => a.id === id);
  const nextArticle = articles[currentIndex + 1];
  const prevArticle = articles[currentIndex - 1];

  return (
    <div className="pt-16 min-h-screen" style={{ backgroundColor: '#0A0A0A' }}>
      {/* Hero Section */}
      <motion.section
        className="py-24 relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-cyan-900/20" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/articles">
            <Button
              variant="ghost"
              className="mb-8 text-white/80 hover:text-white"
            >
              <ArrowLeft className="mr-2" size={16} />
              Back to Articles
            </Button>
          </Link>

          <motion.div
            className="inline-block bg-amber-400/20 rounded-full px-4 py-2 text-sm font-medium text-amber-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {article.category}
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {article.title}
          </motion.h1>

          <motion.div
            className="flex items-center space-x-6 text-sm text-white/60 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>{article.readTime}</span>
            </div>
            <span>By {article.author}</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Article Content */}
      <motion.section
        className="pb-24"
        style={{ backgroundColor: '#111315' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div
              className="prose prose-invert prose-lg max-w-none text-white/90 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                '--tw-prose-headings': '#ffffff',
                '--tw-prose-body': 'rgba(255, 255, 255, 0.9)',
                '--tw-prose-links': '#60a5fa',
              } as React.CSSProperties}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Navigation to Other Articles */}
      <motion.section
        className="py-16"
        style={{ backgroundColor: '#0F0F0F' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prevArticle && (
              <Link to={`/articles/${prevArticle.id}`}>
                <motion.div
                  className="bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-cyan-400/40 transition-all duration-500 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-sm text-white/60 mb-2 flex items-center">
                    <ArrowLeft className="mr-2" size={16} />
                    Previous Article
                  </div>
                  <h3 className="text-lg font-bold text-white">{prevArticle.title}</h3>
                </motion.div>
              </Link>
            )}
            {nextArticle && (
              <Link to={`/articles/${nextArticle.id}`}>
                <motion.div
                  className="bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-cyan-400/40 transition-all duration-500 cursor-pointer md:text-right"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-sm text-white/60 mb-2 flex items-center md:justify-end">
                    Next Article
                    <ArrowRight className="ml-2" size={16} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{nextArticle.title}</h3>
                </motion.div>
              </Link>
            )}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

