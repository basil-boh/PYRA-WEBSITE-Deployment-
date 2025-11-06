import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-gradient-deep">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl font-bold text-pyra-ink mb-6">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-xl text-pyra-muted max-w-3xl mx-auto">
            How we protect your data and maintain your privacy
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-pyra-bg">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-glass rounded-2xl p-8 lg:p-12">
              <div className="prose prose-lg prose-invert max-w-none">
                <h2 className="font-heading text-3xl font-bold text-pyra-ink mb-6">
                  Your Privacy Matters
                </h2>

                <p className="text-pyra-muted leading-relaxed mb-6">
                  At Pyra, we believe privacy is a fundamental human right. We're committed to protecting your personal information
                  and being transparent about how we collect, use, and safeguard your data.
                </p>

                <h3 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                  What We Collect
                </h3>
                <p className="text-pyra-muted leading-relaxed mb-6">
                  We collect only the information necessary to provide our services: basic account details, financial behavior data
                  (anonymized where possible), and transaction information to calculate your discipline score.
                </p>

                <h3 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                  How We Use Your Data
                </h3>
                <p className="text-pyra-muted leading-relaxed mb-6">
                  Your data is used exclusively to: calculate your financial discipline score, determine club eligibility,
                  provide personalized insights, and improve our services. We never sell your personal information.
                </p>

                <h3 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                  Data Security
                </h3>
                <p className="text-pyra-muted leading-relaxed mb-6">
                  We implement industry-standard security measures including encryption, secure data centers,
                  and regular security audits to protect your information.
                </p>

                <h3 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                  Your Rights
                </h3>
                <p className="text-pyra-muted leading-relaxed mb-6">
                  You have the right to access, correct, or delete your personal data at any time.
                  You can also opt out of certain data collection and processing activities.
                </p>

                <h3 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                  Contact Us
                </h3>
                <p className="text-pyra-muted leading-relaxed">
                  If you have questions about our privacy practices or want to exercise your rights,
                  please contact our privacy team at privacy@pyra.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}