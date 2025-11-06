import { Calendar, Clock, ArrowRight, TrendingUp, CreditCard, Shield, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { BlogHeroBackground } from '@/components/BlogHeroBackground';

export default function Blog() {
  const featuredPost = {
    title: 'The Psychology of Financial Discipline: Why Traditional Rewards Fail',
    excerpt: 'Explore how PYRA\'s behavior-first approach creates lasting financial habits by understanding the psychology behind discipline and delayed gratification.',
    category: 'Behavioral Finance',
    readTime: '8 min read',
    date: 'December 15, 2024',
    image: '/placeholder.svg'
  };

  const blogPosts = [
    {
      title: 'Building Credit in Southeast Asia: A Regional Perspective',
      excerpt: 'Understanding the unique challenges and opportunities of building credit across different Southeast Asian markets.',
      category: 'Credit Building',
      readTime: '6 min read',
      date: 'December 12, 2024',
      icon: TrendingUp
    },
    {
      title: 'The Hidden Costs of Credit Card Rewards Programs',
      excerpt: 'How traditional points systems actually encourage overspending and what PYRA does differently.',
      category: 'Credit Cards',
      readTime: '5 min read',
      date: 'December 10, 2024',
      icon: CreditCard
    },
    {
      title: 'Privacy-First Finance: Why It Matters in 2024',
      excerpt: 'The importance of protecting your financial data and how PYRA ensures your privacy while building trust.',
      category: 'Privacy & Security',
      readTime: '7 min read',
      date: 'December 8, 2024',
      icon: Shield
    },
    {
      title: 'Community-Driven Financial Growth: The PYRA Way',
      excerpt: 'How building a community of disciplined users creates better outcomes for everyone involved.',
      category: 'Community',
      readTime: '4 min read',
      date: 'December 6, 2024',
      icon: Users
    },
    {
      title: 'From Spark to Nova: Your Journey Through the PYRA Clubs',
      excerpt: 'A detailed guide to ascending through PYRA\'s tiered system and unlocking exclusive benefits.',
      category: 'PYRA Clubs',
      readTime: '9 min read',
      date: 'December 4, 2024',
      icon: Zap
    },
    {
      title: 'The Future of Financial Status: Beyond Traditional Credit Scores',
      excerpt: 'How PYRA is redefining what it means to have good financial standing in the digital age.',
      category: 'Innovation',
      readTime: '6 min read',
      date: 'December 2, 2024',
      icon: TrendingUp
    }
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
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const featuredPostVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const blogCardVariants = {
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
        className="py-24 bg-gradient-deep relative overflow-hidden"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated Background */}
        <BlogHeroBackground />

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
              Insights & <span className="text-gradient">Perspectives</span>
            </motion.h1>
            <motion.p
              className="text-xl text-pyra-muted max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Deep dives into financial behavior, credit innovation, and the future of
              financial discipline across Southeast Asia.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Post */}
      <motion.section
        className="py-24 bg-pyra-bg"
        variants={featuredPostVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-glass rounded-2xl overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <motion.div
                className="p-8 lg:p-12"
                variants={itemVariants}
              >
                <motion.div
                  className="inline-block bg-accent-gradient rounded-full px-4 py-2 text-sm font-medium text-white mb-4"
                  variants={itemVariants}
                >
                  {featuredPost.category}
                </motion.div>

                <motion.h2
                  className="font-heading text-3xl font-bold text-pyra-ink mb-4"
                  variants={itemVariants}
                >
                  {featuredPost.title}
                </motion.h2>

                <motion.p
                  className="text-lg text-pyra-muted mb-6 leading-relaxed"
                  variants={itemVariants}
                >
                  {featuredPost.excerpt}
                </motion.p>

                <motion.div
                  className="flex items-center space-x-6 text-sm text-pyra-muted mb-6"
                  variants={itemVariants}
                >
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </motion.div>

                <motion.div
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Button
                    className="bg-accent-gradient btn-sheen font-medium"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-pyra-cyan to-pyra-indigo p-8 lg:p-12 flex items-center justify-center"
                variants={itemVariants}
              >
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-lg font-medium">Featured Article</p>
                  <p className="text-white/80">Behavioral Finance Deep Dive</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Latest Insights */}
      <motion.section
        className="py-24 bg-navy-700"
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
              Latest Insights
            </motion.h2>
            <motion.p
              className="text-xl text-pyra-muted"
              variants={itemVariants}
            >
              Stay updated with the latest trends in financial behavior and credit innovation
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                className="bg-glass rounded-2xl p-6"
                variants={blogCardVariants}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2, ease: "easeOut" } }}
              >
                <motion.div
                  className="w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center mb-4"
                  variants={itemVariants}
                >
                  <post.icon className="text-white" size={20} />
                </motion.div>

                <motion.div
                  className="inline-block bg-pyra-bg rounded-full px-3 py-1 text-xs font-medium text-pyra-cyan mb-3"
                  variants={itemVariants}
                >
                  {post.category}
                </motion.div>

                <motion.h3
                  className="font-heading text-xl font-semibold text-pyra-ink mb-3 line-clamp-2"
                  variants={itemVariants}
                >
                  {post.title}
                </motion.h3>

                <motion.p
                  className="text-pyra-muted text-sm mb-4 line-clamp-3"
                  variants={itemVariants}
                >
                  {post.excerpt}
                </motion.p>

                <motion.div
                  className="flex items-center justify-between text-xs text-pyra-muted mb-4"
                  variants={itemVariants}
                >
                  <span>{post.date}</span>
                  <span className="flex items-center space-x-1">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </span>
                </motion.div>

                <motion.div
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-white/20 text-pyra-ink hover:bg-white/10"
                  >
                    Read More
                    <ArrowRight className="ml-2" size={14} />
                  </Button>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Signup */}
      <motion.section
        className="py-16 bg-pyra-bg"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-glass rounded-2xl p-8 max-w-2xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="font-heading text-2xl font-semibold text-pyra-ink mb-4"
              variants={itemVariants}
            >
              Stay Informed
            </motion.h3>
            <motion.p
              className="text-pyra-muted mb-6"
              variants={itemVariants}
            >
              Get the latest insights on financial behavior, credit innovation, and PYRA updates
              delivered to your inbox.
            </motion.p>

            <motion.div
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Button
                className="bg-accent-gradient btn-sheen font-medium"
              >
                Subscribe to Newsletter
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}