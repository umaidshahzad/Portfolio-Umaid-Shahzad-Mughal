"use client";
import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 4000);
      } else {
        setErrorMessage(data.error || 'Failed to send message. Please try again later.');
      }
    } catch (error) {
      setErrorMessage('A network error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#f6f3f3] dark:bg-[#161c23] transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#929e8c] dark:text-[#dae6d2]">
            05. Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#181e25] dark:text-[#f3f0f0]">
            Let's Build Something Together
          </h2>
          <p className="text-sm sm:text-base text-[#5e5f5d] dark:text-[#c5c6cb] max-w-xl">
            Currently seeking an internship or junior Full Stack Developer role. Feel free to reach out via email, phone, or LinkedIn!
          </p>
        </div>

        {/* Grid: Contact Cards + Contact Form */}
        <div className="grid md:grid-cols-12 gap-8">
          
          {/* Contact Details Column */}
          <div className="md:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="bg-[#fcf8f9] dark:bg-[#1c232b] p-6 rounded-3xl border border-[#e5e2e2] dark:border-[#2d333a] shadow-ambient space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-[#f0eded] dark:bg-[#2d333a] text-[#181e25] dark:text-[#dae6d2] flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-xs font-mono text-[#5e5f5d] dark:text-[#929e8c] hover:text-[#181e25] dark:hover:text-[#f3f0f0] flex items-center gap-1 bg-[#f0eded] dark:bg-[#2d333a] rounded-lg transition-colors"
                >
                  {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div>
                <span className="text-xs font-mono text-[#75777b] dark:text-[#929e8c]">Email Address</span>
                <a
                  href={`mailto:${contact.email}`}
                  className="block font-serif text-lg font-bold text-[#181e25] dark:text-[#f3f0f0] hover:underline"
                >
                  {contact.email}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-[#fcf8f9] dark:bg-[#1c232b] p-6 rounded-3xl border border-[#e5e2e2] dark:border-[#2d333a] shadow-ambient space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#f0eded] dark:bg-[#2d333a] text-[#181e25] dark:text-[#dae6d2] flex items-center justify-center">
                <Phone size={18} />
              </div>
              <div>
                <span className="text-xs font-mono text-[#75777b] dark:text-[#929e8c]">Phone & WhatsApp</span>
                <a
                  href={`tel:${contact.phone}`}
                  className="block font-serif text-lg font-bold text-[#181e25] dark:text-[#f3f0f0] hover:underline"
                >
                  {contact.phone}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-[#fcf8f9] dark:bg-[#1c232b] p-6 rounded-3xl border border-[#e5e2e2] dark:border-[#2d333a] shadow-ambient space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#f0eded] dark:bg-[#2d333a] text-[#181e25] dark:text-[#dae6d2] flex items-center justify-center">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-xs font-mono text-[#75777b] dark:text-[#929e8c]">Location</span>
                <p className="font-serif text-lg font-bold text-[#181e25] dark:text-[#f3f0f0]">
                  {contact.location}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex gap-3">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3 bg-[#181e25] dark:bg-[#dae6d2] text-white dark:text-[#141e12] rounded-2xl font-mono text-xs font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Github size={16} />
                <span>GitHub Profile</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3 bg-[#181e25] dark:bg-[#dae6d2] text-white dark:text-[#141e12] rounded-2xl font-mono text-xs font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Linkedin size={16} />
                <span>LinkedIn Profile</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

          </div>

          {/* Interactive Message Form Column */}
          <div className="md:col-span-7 bg-[#fcf8f9] dark:bg-[#1c232b] p-6 sm:p-8 rounded-3xl border border-[#e5e2e2] dark:border-[#2d333a] shadow-ambient">
            {formSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center">
                  <Check size={32} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#181e25] dark:text-[#f3f0f0]">
                  Message Dispatched!
                </h3>
                <p className="text-sm font-mono text-[#5e5f5d] dark:text-[#c5c6cb] max-w-sm">
                  Thank you for connecting. Your message has been logged and a response will be sent to your email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#181e25] dark:text-[#f3f0f0] mb-2">
                  Send a Direct Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#5e5f5d] dark:text-[#929e8c] mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Hiring Manager"
                      className="w-full px-4 py-2.5 text-sm bg-[#f6f3f3] dark:bg-[#12161b] text-[#181e25] dark:text-[#f3f0f0] rounded-xl border border-[#e5e2e2] dark:border-[#2d333a] focus:outline-none focus:ring-1 focus:ring-[#181e25] dark:focus:ring-[#dae6d2]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#5e5f5d] dark:text-[#929e8c] mb-1">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. hr@company.com"
                      className="w-full px-4 py-2.5 text-sm bg-[#f6f3f3] dark:bg-[#12161b] text-[#181e25] dark:text-[#f3f0f0] rounded-xl border border-[#e5e2e2] dark:border-[#2d333a] focus:outline-none focus:ring-1 focus:ring-[#181e25] dark:focus:ring-[#dae6d2]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#5e5f5d] dark:text-[#929e8c] mb-1">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Junior Full Stack Role Inquiry"
                    className="w-full px-4 py-2.5 text-sm bg-[#f6f3f3] dark:bg-[#12161b] text-[#181e25] dark:text-[#f3f0f0] rounded-xl border border-[#e5e2e2] dark:border-[#2d333a] focus:outline-none focus:ring-1 focus:ring-[#181e25] dark:focus:ring-[#dae6d2]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#5e5f5d] dark:text-[#929e8c] mb-1">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Umaid, we reviewed your MERN/PERN projects and would love to discuss an interview opportunity..."
                    className="w-full px-4 py-2.5 text-sm bg-[#f6f3f3] dark:bg-[#12161b] text-[#181e25] dark:text-[#f3f0f0] rounded-xl border border-[#e5e2e2] dark:border-[#2d333a] focus:outline-none focus:ring-1 focus:ring-[#181e25] dark:focus:ring-[#dae6d2]"
                  />
                </div>

                {errorMessage && (
                  <div className="text-red-500 text-sm font-mono p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                    {errorMessage}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#181e25] dark:bg-[#dae6d2] text-white dark:text-[#141e12] font-mono text-xs uppercase tracking-wider font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={15} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

