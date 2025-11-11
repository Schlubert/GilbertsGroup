// pages/ContactPage.tsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
          <Send className="w-10 h-10 text-emerald-600" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Thank You!</h1>
        <p className="text-xl text-slate-700 max-w-2xl">
          We've received your message and will get back to you within 1-2 business days.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-br from-emerald-900 to-slate-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl md:text-2xl text-slate-200">
              Let's discuss how we can help you achieve your goals
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Mail className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                <a href="mailto:info@gilbertsgroup.nz" className="text-emerald-600 hover:text-emerald-700">
                  info@gilbertsgroup.nz
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Phone className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                <a href="tel:0274859001" className="text-emerald-600 hover:text-emerald-700">
                  027 485 9001
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Location</h3>
                <p className="text-slate-700">Dunedin, New Zealand</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Linkedin className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/kevin-gilbert-nz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700"
                >
                  Connect with Kevin Gilbert
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="bg-slate-100 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Companies</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-bold text-slate-900">Appetite Journeys</h4>
                <a 
                  href="https://appetitejourneys.nz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 text-sm"
                >
                  appetitejourneys.nz
                </a>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Elevate</h4>
                <p className="text-slate-600 text-sm">Coming soon</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">The F&B Apprentice</h4>
                <p className="text-slate-600 text-sm">Coming soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                    placeholder="027 123 4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  I'm Interested In *
                </label>
                <select
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                >
                  <option value="">Select an option...</option>
                  <option value="appetite-journeys">Appetite Journeys - Culinary Tours</option>
                  <option value="elevate">Elevate - Business Advisory</option>
                  <option value="fandblapprentice">The F&B Apprentice - Training</option>
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership Opportunities</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <section className="bg-slate-100 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Business Hours</h2>
          <p className="text-lg text-slate-700 mb-4">
            Monday - Friday: 9:00 AM - 5:00 PM (NZST)
          </p>
          <p className="text-slate-600">
            We typically respond to inquiries within 1-2 business days.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;