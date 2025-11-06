import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { ContactHeroBackground } from '@/components/ContactHeroBackground';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  onOpenWaitlist: () => void;
}

export default function Contact({ onOpenWaitlist }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const contactSectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05 }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS credentials configured
      const result = await emailjs.send(
        'service_ecm3w9s', // Your EmailJS service ID
        'template_6lcdkfd', // Your EmailJS template ID
        {
          to_email: 'pyrapayments@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'r5qfO6i6vdWQwStUG' // Your EmailJS public key
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <motion.section
        className="py-32 relative overflow-hidden"
        style={{ backgroundColor: '#0A0A0A' }}
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated Background */}
        <ContactHeroBackground />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
              variants={itemVariants}
            >
              Get in <span className="text-gradient">Touch</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Have questions about PYRA? Want to partner with us?
              Ready to join the waitlist? We'd love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        className="py-32 relative overflow-hidden"
        style={{ backgroundColor: '#0F0F0F' }}
        variants={contactSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-cyan-900/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                className="font-heading text-3xl md:text-4xl font-bold text-white mb-8"
                variants={itemVariants}
              >
                Let's Connect
              </motion.h2>

              <motion.p
                className="text-lg text-white/80 mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Whether you're a potential user, partner, investor, or just curious about
                what we're building, we're here to help. Reach out and let's start a conversation.
              </motion.p>

              <motion.div
                className="space-y-6"
                variants={containerVariants}
              >
                {[
                  {
                    icon: Mail,
                    title: 'Email',
                    content: 'pyrapayments@gmail.com',
                    description: 'For general inquiries and partnerships'
                  },
                  {
                    icon: Phone,
                    title: 'Phone',
                    content: '+65 9643 6337',
                    description: 'Available during business hours (SGT)'
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 group"
                    variants={itemVariants}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      <contact.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        {contact.title}
                      </h3>
                      <p className="text-cyan-400 font-medium mb-1">
                        {contact.content}
                      </p>
                      <p className="text-sm text-white/70">
                        {contact.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
                variants={itemVariants}
              >
                <motion.h3
                  className="font-heading text-2xl font-semibold text-white mb-6"
                  variants={itemVariants}
                >
                  Send us a Message
                </motion.h3>

                <motion.form
                  className="space-y-6"
                  variants={containerVariants}
                  onSubmit={handleSubmit}
                >
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400 focus:ring-cyan-400/20 backdrop-blur-sm"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400 focus:ring-cyan-400/20 backdrop-blur-sm"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400 focus:ring-cyan-400/20 backdrop-blur-sm"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400 focus:ring-cyan-400/20 resize-none backdrop-blur-sm"
                      required
                    />
                  </motion.div>

                  {/* Submit Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/20 border border-green-400/30 rounded-lg text-green-400 text-center"
                    >
                      Message sent successfully! We'll get back to you soon.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/20 border border-red-400/30 rounded-lg text-red-400 text-center"
                    >
                      Failed to send message. Please try again or contact us directly.
                    </motion.div>
                  )}

                  <motion.div
                    variants={buttonVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Button
                      type="submit"
                      className="w-full btn-premium font-medium"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2" size={16} />
                          Send Message
                          <ArrowRight className="ml-2" size={16} />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </motion.form>

                <motion.div
                  className="mt-6 text-center"
                  variants={itemVariants}
                >
                  <p className="text-sm text-white/70">
                    We'll get back to you within 24 hours
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Additional Info */}
      <motion.section
        className="py-32 relative overflow-hidden"
        style={{ backgroundColor: '#0A0A0A' }}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-blue-900/20" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-amber-400/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            className="bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-8 max-w-3xl mx-auto border border-white/20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="font-heading text-2xl md:text-3xl font-semibold text-white mb-4"
              variants={itemVariants}
            >
              Ready to Transform Your Financial Habits?
            </motion.h3>
            <motion.p
              className="text-white/80 mb-6"
              variants={itemVariants}
            >
              Join thousands of users across Southeast Asia who are already building
              better financial discipline with PYRA.
            </motion.p>

            <motion.div
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Button
                className="btn-premium font-medium"
                onClick={onOpenWaitlist}
              >
                Join the Waitlist
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}