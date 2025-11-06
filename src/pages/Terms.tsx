import { motion } from 'framer-motion';

export default function Terms() {
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
              Terms of <span className="text-gradient">Service</span>
            </motion.h1>
            <motion.p
              className="text-xl text-white/80 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              The terms and conditions that govern your use of PYRA's services.
              Please read carefully to understand your rights and responsibilities.
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
                Agreement to Terms
              </motion.h2>

              <motion.p
                className="text-lg text-white/80 leading-relaxed mb-6"
                variants={itemVariants}
              >
                By accessing or using PYRA's services, you agree to be bound by these Terms of Service.
                If you disagree with any part of these terms, you may not access our services.
              </motion.p>

              <motion.h3
                className="font-heading text-2xl font-semibold text-white mb-4 mt-8"
                variants={itemVariants}
              >
                Description of Services
              </motion.h3>

              <motion.p
                className="text-white/80 leading-relaxed mb-4"
                variants={itemVariants}
              >
                PYRA provides financial technology services including:
              </motion.p>

              <motion.ul
                className="list-disc list-inside text-white/80 space-y-2 mb-6"
                variants={itemVariants}
              >
                <li>Financial discipline tracking and scoring</li>
                <li>Credit card and expense management tools</li>
                <li>Tiered membership programs (PYRA Clubs)</li>
                <li>Financial insights and recommendations</li>
                <li>Educational content and resources</li>
              </motion.ul>

              <motion.h3
                className="font-heading text-2xl font-semibold text-white mb-4 mt-8"
                variants={itemVariants}
              >
                User Accounts
              </motion.h3>

              <motion.p
                className="text-white/80 leading-relaxed mb-4"
                variants={itemVariants}
              >
                To use our services, you must:
              </motion.p>

              <motion.ul
                className="list-disc list-inside text-white/80 space-y-2 mb-6"
                variants={itemVariants}
              >
                <li>Be at least 18 years old</li>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Comply with all applicable laws and regulations</li>
              </motion.ul>

              <motion.h3
                className="font-heading text-2xl font-semibold text-white mb-4 mt-8"
                variants={itemVariants}
              >
                Acceptable Use
              </motion.h3>

              <motion.p
                className="text-white/80 leading-relaxed mb-4"
                variants={itemVariants}
              >
                You agree not to:
              </motion.p>

              <motion.ul
                className="list-disc list-inside text-white/80 space-y-2 mb-6"
                variants={itemVariants}
              >
                <li>Use our services for illegal or unauthorized purposes</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
                <li>Share your account credentials with others</li>
                <li>Use our services to harm others or their property</li>
              </motion.ul>

              <motion.h3
                className="font-heading text-2xl font-semibold text-white mb-4 mt-8"
                variants={itemVariants}
              >
                Financial Information
              </motion.h3>

              <motion.p
                className="text-white/80 leading-relaxed mb-6"
                variants={itemVariants}
              >
                By connecting your financial accounts, you authorize us to access and process your
                financial data to provide our services. We use industry-standard security measures
                to protect your information and never share it with unauthorized parties.
              </motion.p>

              <motion.h3
                className="font-heading text-2xl font-semibold text-white mb-4 mt-8"
                variants={itemVariants}
              >
                PYRA Clubs
              </motion.h3>

              <motion.p
                className="text-white/80 leading-relaxed mb-4"
                variants={itemVariants}
              >
                Club membership is based on your Financial Discipline Score and is subject to:
              </motion.p>

              <motion.ul
                className="list-disc list-inside text-white/80 space-y-2 mb-6"
                variants={itemVariants}
              >
                <li>Regular score assessments and updates</li>
                <li>Club tier requirements and eligibility criteria</li>
                <li>Benefits and features specific to each tier</li>
                <li>Changes to club structure and requirements</li>
                <li>Compliance with club-specific terms and conditions</li>
              </motion.ul>

              <motion.h3
                className="font-heading text-2xl font-semibold text-white mb-4 mt-8"
                variants={itemVariants}
              >
                Intellectual Property
              </motion.h3>

              <motion.p
                className="text-white/80 leading-relaxed mb-6"
                variants={itemVariants}
              >
                All content, features, and functionality of our services are owned by PYRA and
                are protected by copyright, trademark, and other intellectual property laws.
                You may not copy, modify, or distribute our content without permission.
              </motion.p>

              <motion.h3
                className="font-heading text-2xl font-semibold text-white mb-4 mt-8"
                variants={itemVariants}
              >
                Limitation of Liability
              </motion.h3>

              <motion.p
                className="text-white/80 leading-relaxed mb-6"
                variants={itemVariants}
              >
                PYRA provides financial tools and insights but is not responsible for your
                financial decisions or outcomes. We do not guarantee investment returns or
                financial success. Our liability is limited to the amount you paid for our services.
              </motion.p>

              <motion.h3
                className="font-heading text-2xl font-semibold text-white mb-4 mt-8"
                variants={itemVariants}
              >
                Termination
              </motion.h3>

              <motion.p
                className="text-white/80 leading-relaxed mb-6"
                variants={itemVariants}
              >
                You may terminate your account at any time. We may suspend or terminate your
                account if you violate these terms or for other legitimate business reasons.
                Upon termination, your access to our services will cease immediately.
              </motion.p>

              <motion.h3
                className="font-heading text-2xl font-semibold text-white mb-4 mt-8"
                variants={itemVariants}
              >
                Changes to Terms
              </motion.h3>

              <motion.p
                className="text-white/80 leading-relaxed mb-6"
                variants={itemVariants}
              >
                We may update these terms from time to time. We'll notify you of any material
                changes and give you the opportunity to review the updated terms. Continued use
                of our services after changes constitutes acceptance of the new terms.
              </motion.p>

              <motion.h3
                className="font-heading text-2xl font-semibold text-white mb-4 mt-8"
                variants={itemVariants}
              >
                Governing Law
              </motion.h3>

              <motion.p
                className="text-white/80 leading-relaxed mb-6"
                variants={itemVariants}
              >
                These terms are governed by the laws of Singapore. Any disputes will be resolved
                through binding arbitration in Singapore, except where prohibited by law.
              </motion.p>

              <motion.h3
                className="font-heading text-2xl font-semibold text-white mb-4 mt-8"
                variants={itemVariants}
              >
                Contact Information
              </motion.h3>

              <motion.p
                className="text-white/80 leading-relaxed"
                variants={itemVariants}
              >
                If you have questions about these terms, please contact us at{' '}
                <a href="mailto:legal@pyra.com" className="text-cyan-400 hover:underline">
                  legal@pyra.com
                </a>
                . We're here to help clarify any concerns you may have.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}