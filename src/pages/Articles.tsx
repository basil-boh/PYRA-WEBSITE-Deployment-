import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { articles, Article } from '@/data/articles';

export default function Articles() {
  const featuredArticle = articles.find(article => article.featured);
  const otherArticles = articles.filter(article => !article.featured);

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

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        className="min-h-[60vh] flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: '#0A0A0A' }}
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-cyan-900/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Articles
          </motion.h1>
          <motion.p
            className="text-xl text-white/80 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Insights, perspectives, and deep dives into financial behavior, credit innovation, and the future of financial discipline.
          </motion.p>
        </div>
      </motion.section>

      {/* Featured Article */}
      {featuredArticle && (
        <motion.section
          className="py-24 relative overflow-hidden"
          style={{ backgroundColor: '#111315' }}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 hover:border-amber-400/40 transition-all duration-500"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <motion.div variants={itemVariants}>
                  <div className="inline-block bg-amber-400/20 rounded-full px-4 py-2 text-sm font-medium text-amber-400 mb-4">
                    Featured: {featuredArticle.category}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-xl text-white/80 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-white/60 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    <span className="text-white/60">By {featuredArticle.author}</span>
                  </div>
                  <Link to={`/articles/${featuredArticle.id}`}>
                    <Button className="btn-premium font-semibold">
                      Read Full Article
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  className="bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-2xl p-12 flex items-center justify-center min-h-[300px]"
                  variants={itemVariants}
                >
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">📚</div>
                    <p className="text-lg font-medium">Featured Article</p>
                    <p className="text-white/80">{featuredArticle.category}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Articles Grid */}
      <motion.section
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: '#0F0F0F' }}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              All Articles
            </h2>
            <p className="text-xl text-white/80">
              Explore our latest insights and perspectives
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {otherArticles.map((article) => (
              <motion.article
                key={article.id}
                className="bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105"
                variants={itemVariants}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-block bg-cyan-400/20 rounded-full px-3 py-1 text-xs font-medium text-cyan-400 mb-4">
                  {article.category}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-white/70 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-white/60 mb-6">
                  <span>{article.date}</span>
                  <span className="flex items-center space-x-1">
                    <Clock size={12} />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <Link to={`/articles/${article.id}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-white/20 text-white hover:bg-white/10"
                  >
                    Read More
                    <ArrowRight className="ml-2" size={14} />
                  </Button>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

