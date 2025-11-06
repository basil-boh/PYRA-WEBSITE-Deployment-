import { FileText, Scale, Shield, Users } from 'lucide-react';

export default function Terms() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-gradient-deep">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl font-bold text-pyra-ink mb-6">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="text-xl text-pyra-muted max-w-3xl mx-auto">
            The rules and guidelines for using Pyra's services
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
                  Terms of Service
                </h2>

                <p className="text-pyra-muted leading-relaxed mb-6">
                  By using Pyra's services, you agree to these terms. Please read them carefully before using our platform.
                </p>

                <h3 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                  Service Description
                </h3>
                <p className="text-pyra-muted leading-relaxed mb-6">
                  Pyra provides financial discipline tracking, club membership services, and financial management tools.
                  Our services are designed to help users build better financial habits and unlock exclusive benefits.
                </p>

                <h3 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                  User Responsibilities
                </h3>
                <p className="text-pyra-muted leading-relaxed mb-6">
                  Users are responsible for: providing accurate information, maintaining account security,
                  complying with applicable laws, and using our services responsibly.
                </p>

                <h3 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                  Club Membership
                </h3>
                <p className="text-pyra-muted leading-relaxed mb-6">
                  Club membership is based on financial discipline scores and may change over time.
                  Benefits and requirements are subject to modification with notice.
                </p>

                <h3 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                  Privacy & Data
                </h3>
                <p className="text-pyra-muted leading-relaxed mb-6">
                  Your privacy is protected by our Privacy Policy. We collect and use data only as necessary
                  to provide our services and improve user experience.
                </p>

                <h3 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                  Limitation of Liability
                </h3>
                <p className="text-pyra-muted leading-relaxed mb-6">
                  Pyra is not responsible for financial decisions made by users or any losses incurred.
                  Our services provide information and tools, but final decisions rest with users.
                </p>

                <h3 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                  Changes to Terms
                </h3>
                <p className="text-pyra-muted leading-relaxed">
                  We may update these terms periodically. Users will be notified of significant changes,
                  and continued use constitutes acceptance of updated terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}