import { Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function About() {
  const founders = [
    {
      name: 'Sanjeev',
      role: 'CEO',
      bio: 'Product & strategy leader with fintech partnerships expertise. Passionate about redefining credit and financial habits in Southeast Asia.',
      linkedin: '#'
    },
    {
      name: 'Flo',
      role: 'CFO',
      bio: 'Capital strategy and unit economics specialist with compliance rigor. Drives sustainable growth across Southeast Asia.',
      linkedin: '#'
    },
    {
      name: 'Basil',
      role: 'COO',
      bio: 'Operations and partner delivery expert with deep member support experience. Builds reliable financial rails.',
      linkedin: '#'
    },
    {
      name: 'Johannsen',
      role: 'CTO',
      bio: 'Platform architecture and data privacy innovator. Creates secure-by-design financial infrastructure and trust models.',
      linkedin: '#'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-gradient-deep">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl font-bold text-pyra-ink mb-6">
            About <span className="text-gradient">Pyra</span>
          </h1>
          <p className="text-xl text-pyra-muted max-w-3xl mx-auto">
            Redefining Credit and Financial Habits in Southeast Asia
          </p>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-24 bg-pyra-bg">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-pyra-ink mb-8 text-center">
              Our Story
            </h2>

            <div className="bg-glass rounded-2xl p-8 lg:p-12">
              <p className="text-lg text-pyra-muted leading-relaxed mb-6">
                Pyra was founded to build an ecosystem where financial discipline is rewarded, trust is monetized,
                and users ascend aspirational tiers of finance and lifestyle. We saw disciplined
                individuals penalized by fragmented tools and generic rewards, while irresponsible spending
                was celebrated with points and perks.
              </p>

              <p className="text-lg text-pyra-muted leading-relaxed mb-6">
                So we built a behavior-first ecosystem where your habits unlock access. Where building
                credit responsibly, managing expenses wisely, and making smart financial choices creates real status
                and meaningful benefits.
              </p>

              <p className="text-lg text-pyra-muted leading-relaxed">
                Starting in Southeast Asia, we're creating the financial super-app that rewards what
                matters: discipline, consistency, and long-term thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-navy-700">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-pyra-ink mb-4">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-glass rounded-2xl p-8">
              <h3 className="font-heading text-2xl font-semibold text-pyra-ink mb-6">
                Our Vision
              </h3>
              <p className="text-pyra-muted leading-relaxed">
                A financial super-app for Southeast Asia that rewards good habits with real access.
                Where discipline becomes the new currency and financial responsibility opens doors
                to premium experiences and opportunities.
              </p>
            </div>

            <div className="bg-glass rounded-2xl p-8">
              <h3 className="font-heading text-2xl font-semibold text-pyra-ink mb-6">
                Our Mission
              </h3>
              <p className="text-pyra-muted leading-relaxed">
                To build an ecosystem where financial discipline is rewarded, trust is monetized,
                and users ascend aspirational tiers of finance and lifestyle. We transform credit
                behavior into a valuable asset.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-glass rounded-2xl p-8">
            <h3 className="font-heading text-2xl font-semibold text-pyra-ink mb-6 text-center">
              Year-1 Goals
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">100k</div>
                <p className="text-pyra-muted">Disciplined members in first market</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">50%</div>
                <p className="text-pyra-muted">Autopay adoption among active bill payers</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">Launch</div>
                <p className="text-pyra-muted">Pyra Clubs with unified financial management</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h4 className="font-heading text-xl font-semibold text-pyra-ink mb-4">
              Our Values
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Member-first clarity',
                'Privacy by default',
                'Trust you earn',
                'Do the boring things beautifully'
              ].map((value, i) => (
                <div key={i} className="bg-pyra-bg rounded-full px-6 py-3">
                  <span className="text-pyra-muted">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 bg-pyra-bg">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-pyra-ink mb-4">
              Meet the Founders
            </h2>
            <p className="text-xl text-pyra-muted">
              Building the future of financial discipline across Southeast Asia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {founders.map((founder, index) => (
              <div key={founder.name} className="bg-glass rounded-2xl p-6 text-center">
                <div className="w-24 h-24 bg-accent-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {founder.name.charAt(0)}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-semibold text-pyra-ink mb-1">
                  {founder.name}
                </h3>
                <p className="text-pyra-cyan font-medium mb-4">{founder.role}</p>

                <p className="text-sm text-pyra-muted leading-relaxed mb-4">
                  {founder.bio}
                </p>

                <a
                  href={founder.linkedin}
                  className="inline-flex items-center text-pyra-cyan hover:text-pyra-ink transition-colors"
                >
                  <Linkedin size={16} className="mr-1" />
                  LinkedIn
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                Join Our Team
              </h3>
              <p className="text-pyra-muted mb-6">
                We're looking for exceptional people who share our vision of making
                financial discipline rewarding and trust monetizable.
              </p>
              <Button
                className="bg-accent-gradient btn-sheen font-medium"
                asChild
              >
                <a href="/careers">
                  View Open Roles
                  <ArrowRight className="ml-2" size={16} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}