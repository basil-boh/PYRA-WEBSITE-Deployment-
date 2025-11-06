import { Code, BarChart3, Palette, Handshake, ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Careers() {
  const roles = [
    {
      icon: Code,
      title: 'Founding Engineer',
      type: 'Full-time • Singapore',
      description: 'Build the core platform and DI algorithms. Shape our technical foundation from day one.',
      skills: ['React/TypeScript', 'Node.js/Python', 'Financial APIs', 'Security-first mindset']
    },
    {
      icon: BarChart3,
      title: 'Risk & Data Analyst',
      type: 'Full-time • Singapore',
      description: 'Design DI models and risk frameworks. Turn financial behavior into meaningful insights.',
      skills: ['Data modeling', 'Risk analysis', 'SQL/Python', 'Financial services experience']
    },
    {
      icon: Palette,
      title: 'Product Designer',
      type: 'Full-time • Singapore',
      description: 'Craft beautiful, intuitive experiences for complex financial workflows.',
      skills: ['Product design', 'Design systems', 'User research', 'Fintech UX']
    },
    {
      icon: Handshake,
      title: 'Partnerships Lead',
      type: 'Full-time • Singapore',
      description: 'Build relationships with banks, card networks, and financial institutions across SEA.',
      skills: ['Business development', 'Financial partnerships', 'SEA market knowledge', 'Negotiation']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-gradient-deep">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl font-bold text-pyra-ink mb-6">
            Join the <span className="text-gradient">Early Team</span>
          </h1>
          <p className="text-xl text-pyra-muted max-w-3xl mx-auto mb-8">
            Help us build the financial super-app that turns discipline into currency.
            Shape the future of status and rewards across Southeast Asia.
          </p>

          <div className="bg-glass rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-pyra-ink font-semibold mb-2">
              🚀 Early-stage opportunity
            </p>
            <p className="text-pyra-muted text-sm">
              Join as a founding team member and help define financial behavior
              for millions across Southeast Asia
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-pyra-bg">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-pyra-ink mb-4">
              Why Join Pyra?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Mission-Driven Impact',
                description: 'Build tools that reward financial responsibility and create meaningful status',
                icon: '🎯'
              },
              {
                title: 'Founding Team Equity',
                description: 'Significant equity stake as an early team member in a fast-growing fintech',
                icon: '💎'
              },
              {
                title: 'SEA Market Leadership',
                description: 'Lead financial innovation in one of the world\'s fastest-growing regions',
                icon: '🌏'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-glass rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-pyra-ink mb-4">
                  {benefit.title}
                </h3>
                <p className="text-pyra-muted">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 bg-navy-700">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-pyra-ink mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-pyra-muted">
              Join us in building the future of financial status
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {roles.map((role, index) => (
              <div key={index} className="bg-glass rounded-2xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <role.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-pyra-ink mb-1">
                      {role.title}
                    </h3>
                    <p className="text-pyra-cyan text-sm">{role.type}</p>
                  </div>
                </div>

                <p className="text-pyra-muted mb-6 leading-relaxed">
                  {role.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-pyra-ink mb-3">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-pyra-bg rounded-full px-3 py-1 text-xs text-pyra-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-white/20 text-pyra-ink hover:bg-white/10"
                >
                  Apply Now
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equal Opportunity */}
      <section className="py-16 bg-pyra-bg">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-glass rounded-2xl p-8 max-w-4xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
              Equal Opportunity Employer
            </h3>
            <p className="text-pyra-muted mb-6 leading-relaxed">
              Pyra is committed to creating a diverse and inclusive workplace. We welcome
              applications from all qualified candidates regardless of race, gender, age,
              religion, sexual orientation, or any other protected characteristic.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-accent-gradient btn-sheen font-medium"
                asChild
              >
                <a href="/contact">
                  <Mail className="mr-2" size={16} />
                  Get in Touch
                </a>
              </Button>

              <Button
                variant="outline"
                className="border-white/20 text-pyra-ink hover:bg-white/10"
                asChild
              >
                <a href="/about">
                  Learn More About Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}