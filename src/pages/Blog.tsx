import { Calendar, ArrowRight, TrendingUp, Shield, Users } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: 'Building Financial Discipline in Southeast Asia',
      excerpt: 'How cultural and economic factors shape financial habits across the region, and what this means for building better money management systems.',
      date: 'March 15, 2024',
      category: 'Financial Education',
      readTime: '5 min read',
      image: '/placeholder.svg'
    },
    {
      title: 'The Psychology of Credit Card Rewards',
      excerpt: 'Why traditional reward systems encourage spending, and how Pyra flips this model to reward responsible financial behavior instead.',
      date: 'March 10, 2024',
      category: 'Behavioral Finance',
      readTime: '7 min read',
      image: '/placeholder.svg'
    },
    {
      title: 'Privacy-First Financial Technology',
      excerpt: 'How we\'re building financial tools that protect user data while still providing powerful insights and personalized experiences.',
      date: 'March 5, 2024',
      category: 'Technology',
      readTime: '6 min read',
      image: '/placeholder.svg'
    },
    {
      title: 'Club Status: Beyond Traditional Loyalty Programs',
      excerpt: 'How Pyra Clubs create meaningful status based on financial discipline rather than arbitrary spending thresholds.',
      date: 'February 28, 2024',
      category: 'Product',
      readTime: '4 min read',
      image: '/placeholder.svg'
    },
    {
      title: 'The Future of Credit in Southeast Asia',
      excerpt: 'Emerging trends in credit markets across the region and how technology is democratizing access to financial services.',
      date: 'February 20, 2024',
      category: 'Market Trends',
      readTime: '8 min read',
      image: '/placeholder.svg'
    },
    {
      title: 'Hidden Fees: The Silent Wealth Killer',
      excerpt: 'Common hidden charges in financial products and how our AI-powered detection helps users avoid unnecessary costs.',
      date: 'February 15, 2024',
      category: 'Financial Tips',
      readTime: '6 min read',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-gradient-deep">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl font-bold text-pyra-ink mb-6">
            Pyra <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-pyra-muted max-w-3xl mx-auto">
            Insights on financial discipline, Southeast Asian markets, and the future of responsible finance
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-pyra-bg">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-glass rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-accent-gradient text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-pyra-muted text-sm">March 15, 2024</span>
                </div>

                <h2 className="font-heading text-3xl font-bold text-pyra-ink mb-4">
                  Building Financial Discipline in Southeast Asia
                </h2>

                <p className="text-pyra-muted leading-relaxed mb-6">
                  How cultural and economic factors shape financial habits across the region, and what this means
                  for building better money management systems that work for local users.
                </p>

                <div className="flex items-center space-x-4 text-sm text-pyra-muted mb-6">
                  <span>Financial Education</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>

                <button className="inline-flex items-center text-pyra-cyan hover:text-pyra-ink transition-colors font-medium">
                  Read Full Article
                  <ArrowRight className="ml-2" size={16} />
                </button>
              </div>

              <div className="relative">
                <img
                  src="/placeholder.svg"
                  alt="Featured post"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-24 bg-navy-700">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-pyra-ink mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-pyra-muted">
              Stay updated with the latest trends in financial technology and behavior
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <article key={index} className="bg-glass rounded-2xl overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-pyra-cyan text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-pyra-muted text-sm">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-pyra-ink mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-pyra-muted text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-pyra-muted text-sm">
                      {post.date}
                    </span>

                    <button className="inline-flex items-center text-pyra-cyan hover:text-pyra-ink transition-colors text-sm font-medium">
                      Read More
                      <ArrowRight className="ml-1" size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-accent-gradient btn-sheen font-medium px-8 py-3 rounded-xl">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}