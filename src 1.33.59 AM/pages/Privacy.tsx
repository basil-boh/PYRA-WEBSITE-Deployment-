import { motion } from 'framer-motion';

export default function Privacy() {
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
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
            <motion.h1
              className="font-heading text-5xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Privacy <span className="text-gradient">Policy</span>
            </motion.h1>
            <motion.p
              className="text-xl text-white/80 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Your privacy is fundamental to how we build trust. Learn how we protect your data
              and maintain transparency in everything we do.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Content */}
      <motion.section
        className="py-24 bg-pyra-bg"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-glass rounded-2xl p-8 lg:p-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="prose prose-invert max-w-none"
              variants={itemVariants}
            >
              <motion.h2
                className="font-heading text-3xl font-bold text-white mb-6"
                variants={itemVariants}
              >
                Our Commitment to Privacy
              </motion.h2>

              <motion.p
                className="text-lg text-white/80 leading-relaxed mb-6"
                variants={itemVariants}
              >
                At PYRA, we believe that privacy is not just a feature—it's a fundamental right.
                We're committed to building financial tools that protect your data while providing
                the insights you need to build better financial habits.
              </motion.p>

              <motion.h3
                className="font-heading text-2xl font-semibold text-white mb-4 mt-8"
                variants={itemVariants}
              >
                What We Collect
              </motion.h3>

              <motion.p
                className="text-white/80 leading-relaxed mb-4"
                variants={itemVariants}
              >
                We collect only the information necessary to provide our services:
              </motion.p>

              <motion.ul
                className="list-disc list-inside text-white/80 space-y-2 mb-6"
                variants={itemVariants}
              >
                <li>Account information (name, email, phone number)</li>
                <li>Financial data you choose to connect (credit cards, bank accounts)</li>
                <li>Transaction history and spending patterns</li>
                <li>Usage data to improve our services</li>
              </motion.ul>

              <motion.h3
                className="font-heading text-2xl font-semibold text-white mb-4 mt-8"
                variants={itemVariants}
              >
                How We Use Your Data
              </motion.h3>

              <motion.p
                className="text-white/80 leading-relaxed mb-4"
                variants={itemVariants}
              >
                Your data is used exclusively to:
              </motion.p>

              <motion.ul
                className="list-disc list-inside text-white/80 space-y-2 mb-6"
                variants={itemVariants}
              >
                <li>Provide personalized financial insights and recommendations</li>
                <li>Calculate your Financial Discipline Score</li>
                <li>Determine your eligibility for different PYRA Clubs</li>
                <li>Improve our services and user experience</li>
                <li>Ensure security and prevent fraud</li>
              </motion.ul>

              <motion.h3
                className="font-heading text-2xl font-semibold text-white mb-4 mt-8"
                variants={itemVariants}
              >
                Data Security
              </motion.h3>

              <motion.p
                className="text-white/80 leading-relaxed mb-6"
                variants={itemVariants}
              >
                We implement industry-leading security measures to protect your data:
              </motion.p>

              <motion.ul
                className="list-disc list-inside text-white/80 space-y-2 mb-6"
                variants={itemVariants}
              >
                <li>End-to-end encryption for all data transmission</li>
                <li>Secure cloud infrastructure with regular security audits</li>
                <li>Multi-factor authentication for account access</li>
                <li>Regular security testing and vulnerability assessments</li>
                <li>Compliance with international data protection standards</li>
              </motion.ul>

              <motion.h3
                className="font-heading text-2xl font-semibold text-white mb-4 mt-8"
                variants={itemVariants}
              >
                Your Rights
              </motion.h3>

              <motion.p
                className="text-white/80 leading-relaxed mb-4"
                variants={itemVariants}
              >
                You have complete control over your data:
              </motion.p>

              <motion.ul
                className="list-disc list-inside text-white/80 space-y-2 mb-6"
                variants={itemVariants}
              >
                <li>Access and download your data at any time</li>
                <li>Request corrections to inaccurate information</li>
                <li>Delete your account and all associated data</li>
                <li>Opt out of data collection for non-essential features</li>
                <li>Control what financial institutions you connect</li>
              </motion.ul>

              <motion.h3
                className="font-heading text-2xl font-semibold text-white mb-4 mt-8"
                variants={itemVariants}
              >
                Third-Party Services
              </motion.h3>

              <motion.p
                className="text-white/80 leading-relaxed mb-6"
                variants={itemVariants}
              >
                We work with trusted third-party services to provide our features. These services
                are carefully selected and are bound by strict data protection agreements. We never
                sell your personal information to third parties.
              </motion.p>

              <motion.h3
                className="font-heading text-2xl font-semibold text-white mb-4 mt-8"
                variants={itemVariants}
              >
                Updates to This Policy
              </motion.h3>

              <motion.p
                className="text-white/80 leading-relaxed mb-6"
                variants={itemVariants}
              >
                We may update this privacy policy from time to time to reflect changes in our
                practices or applicable laws. We'll notify you of any material changes and give
                you the opportunity to review the updated policy.
              </motion.p>

              <motion.h3
                className="font-heading text-2xl font-semibold text-white mb-4 mt-8"
                variants={itemVariants}
              >
                Contact Us
              </motion.h3>

              <motion.p
                className="text-white/80 leading-relaxed"
                variants={itemVariants}
              >
                If you have any questions about this privacy policy or how we handle your data,
                please contact us at{' '}
                <a href="mailto:privacy@pyra.com" className="text-cyan-400 hover:underline">
                  privacy@pyra.com
                </a>
                . We're committed to transparency and will respond to all inquiries promptly.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}