'use client';

import { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Star, Heart, Camera, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';
import { z } from 'zod';
import './contactErrorStyles.css';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().regex(/^\d{10}$/, 'Enter a valid 10-digit phone number'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Zod validation
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof typeof formData, string>> = {};
      result.error.errors.forEach(err => {
        const field = err.path[0] as keyof typeof formData;
        fieldErrors[field] = err.message;
      });
      setFormErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }
    setFormErrors({});

    try {
      const result = await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current!,
        emailjsConfig.publicKey
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Map EmailJS field names to state properties
    const fieldMapping: { [key: string]: string } = {
      'user_name': 'name',
      'user_email': 'email', 
      'user_phone': 'phone',
      'subject': 'subject',
      'message': 'message'
    };
    
    const stateField = fieldMapping[name] || name;
    setFormData(prev => ({
      ...prev,
      [stateField]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6f2] via-[#f3e7d9] to-[#e7d6c6] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#b48b3c]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#e7d6c6]/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#b48b3c]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-[#f3e7d9]/40 rounded-full blur-2xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#b48b3c] via-[#a07a2c] to-[#8b6b1c] text-white py-20 overflow-hidden">
        {/* Hero Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <Camera className="w-5 h-5" />
              <span className="text-sm font-medium">Professional Photography</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Let&apos;s Create
            <span className="block text-[#f3e7d9]">Magic Together</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Ready to capture your precious moments? We&apos;re here to turn your vision into timeless memories.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#f3e7d9] text-[#f3e7d9]" />
                ))}
              </div>
              <span className="text-sm font-medium">5.0 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-[#f3e7d9]" />
              <span className="text-sm font-medium">500+ Happy Clients</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16">
          {/* Contact Information */}
          <div className="space-y-8 sm:space-y-10">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-[#b48b3c]/10 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-[#b48b3c] rounded-full"></div>
                <span className="text-sm font-medium text-[#b48b3c]">Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#232323] mb-6 tracking-tight leading-tight">
                Ready to Start Your
                <span className="block text-[#b48b3c]">Photography Journey?</span>
              </h2>
              <p className="text-[#232323]/80 text-base sm:text-lg mb-8 font-light leading-relaxed">
                We&apos;re passionate about capturing life&apos;s most precious moments. Let&apos;s discuss your vision and create something extraordinary together.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 sm:space-y-6">
              <div className="group bg-white border border-[#f3e7d9] rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl hover:scale-105 hover:border-[#b48b3c] transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#b48b3c]/5 to-transparent rounded-bl-full transition-all duration-500 group-hover:scale-110"></div>
                <div className="flex items-center space-x-4 sm:space-x-6 relative z-10">
                  <div className="bg-gradient-to-br from-[#b48b3c] to-[#a07a2c] p-3 sm:p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Phone className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#232323] text-base sm:text-lg mb-1">Call Us</h3>
                    <p className="text-[#232323]/80 text-base sm:text-lg font-medium">+91 9520271285</p>
                    <p className="text-xs sm:text-sm text-[#232323]/60">Available Mon-Sat, 9AM-7PM</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white border border-[#f3e7d9] rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl hover:scale-105 hover:border-[#b48b3c] transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#b48b3c]/5 to-transparent rounded-bl-full transition-all duration-500 group-hover:scale-110"></div>
                <div className="flex items-center space-x-4 sm:space-x-6 relative z-10">
                  <div className="bg-gradient-to-br from-[#b48b3c] to-[#a07a2c] p-3 sm:p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Mail className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#232323] text-base sm:text-lg mb-1">Email Us</h3>
                    <p className="text-[#232323]/80 text-base sm:text-lg font-medium">lensteasers@gmail.com</p>
                    <p className="text-xs sm:text-sm text-[#232323]/60">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white border border-[#f3e7d9] rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl hover:scale-105 hover:border-[#b48b3c] transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#b48b3c]/5 to-transparent rounded-bl-full transition-all duration-500 group-hover:scale-110"></div>
                <div className="flex items-center space-x-4 sm:space-x-6 relative z-10">
                  <div className="bg-gradient-to-br from-[#b48b3c] to-[#a07a2c] p-3 sm:p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <MapPin className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#232323] text-base sm:text-lg mb-1">Visit Our Studio</h3>
                    <p className="text-[#232323]/80 text-sm sm:text-base">SE 87A, Jaipuria Sunrise Plaza</p>
                    <p className="text-[#232323]/80 text-sm sm:text-base">Ahinsa Khand 1, Indirapuram</p>
                    <p className="text-[#232323]/80 text-sm sm:text-base">Ghaziabad, Uttar Pradesh 201014</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white border border-[#f3e7d9] rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl hover:scale-105 hover:border-[#b48b3c] transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#b48b3c]/5 to-transparent rounded-bl-full transition-all duration-500 group-hover:scale-110"></div>
                <div className="flex items-center space-x-4 sm:space-x-6 relative z-10">
                  <div className="bg-gradient-to-br from-[#b48b3c] to-[#a07a2c] p-3 sm:p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Clock className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#232323] text-base sm:text-lg mb-1">Business Hours</h3>
                    <p className="text-[#232323]/80 font-medium text-sm sm:text-base">Monday - Saturday</p>
                    <p className="text-[#232323]/80 font-medium text-sm sm:text-base">9:00 AM - 7:00 PM</p>
                    <p className="text-xs sm:text-sm text-[#232323]/60">Sunday: By appointment only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-[#f3e7d9] rounded-3xl shadow-2xl p-6 sm:p-10 relative overflow-hidden">
            {/* Form Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#b48b3c]/5 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#e7d6c6]/30 to-transparent rounded-tr-full"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center space-x-2 bg-[#b48b3c]/10 rounded-full px-4 py-2 mb-4">
                  <Send className="w-4 h-4 text-[#b48b3c]" />
                  <span className="text-sm font-medium text-[#b48b3c]">Send Message</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#232323] mb-2 tracking-tight">Tell Us About Your Vision</h2>
                <p className="text-[#232323]/70 text-sm sm:text-base">We&apos;d love to hear about your photography dreams</p>
              </div>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800 font-medium text-sm sm:text-base">Thank you! Your message has been sent successfully. We&apos;ll get back to you soon!</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-800 font-medium text-sm sm:text-base">Oops! Something went wrong. Please try again or contact us directly.</span>
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className={`group ${formErrors.name ? 'error-input' : ''}`}>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#232323] mb-2 sm:mb-3">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="user_name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-3 sm:px-4 py-3 sm:py-4 border-2 text-black border-[#f3e7d9] rounded-xl focus:ring-2 focus:ring-[#b48b3c] focus:border-[#b48b3c] transition-all duration-300 bg-white group-hover:border-[#b48b3c]/50 text-sm sm:text-base`}
                        placeholder="Enter your full name"
                      />
                      <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-transparent via-[#b48b3c]/20 to-transparent rounded-r-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {formErrors.name && (
                        <div className="absolute left-0 top-full mt-1 flex items-center gap-1 bg-red-50 border border-red-200 text-red-700 px-2 py-1 rounded shadow transition-all duration-200 animate-fade-in">
                          <AlertCircle className="w-4 h-4" />
                          <span className="text-xs">{formErrors.name}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={`group ${formErrors.email ? 'error-input' : ''}`}>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#232323] mb-2 sm:mb-3">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-3 sm:px-4 text-black py-3 sm:py-4 border-2 border-[#f3e7d9] rounded-xl focus:ring-2 focus:ring-[#b48b3c] focus:border-[#b48b3c] transition-all duration-300 bg-white group-hover:border-[#b48b3c]/50 text-sm sm:text-base`}
                        placeholder="Enter your email"
                      />
                      <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-transparent via-[#b48b3c]/20 to-transparent rounded-r-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {formErrors.email && (
                        <div className="absolute left-0 top-full mt-1 flex items-center gap-1 bg-red-50 border border-red-200 text-red-700 px-2 py-1 rounded shadow transition-all duration-200 animate-fade-in">
                          <AlertCircle className="w-4 h-4" />
                          <span className="text-xs">{formErrors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className={`group ${formErrors.phone ? 'error-input' : ''}`}>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#232323] mb-2 sm:mb-3">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="user_phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-3 sm:px-4 text-black py-3 sm:py-4 border-2 border-[#f3e7d9] rounded-xl focus:ring-2 focus:ring-[#b48b3c] focus:border-[#b48b3c] transition-all duration-300 bg-white group-hover:border-[#b48b3c]/50 text-sm sm:text-base`}
                        placeholder="Enter your phone number"
                      />
                      <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-transparent via-[#b48b3c]/20 to-transparent rounded-r-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {formErrors.phone && (
                        <div className="absolute left-0 top-full mt-1 flex items-center gap-1 bg-red-50 border border-red-200 text-red-700 px-2 py-1 rounded shadow transition-all duration-200 animate-fade-in">
                          <AlertCircle className="w-4 h-4" />
                          <span className="text-xs">{formErrors.phone}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={`group ${formErrors.subject ? 'error-input' : ''}`}>
                    <label htmlFor="subject" className="block text-sm font-semibold text-[#232323] mb-2 sm:mb-3">
                      Subject *
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={`w-full px-3 sm:px-4 py-3 sm:py-4 text-black border-2 border-[#f3e7d9] rounded-xl focus:ring-2 focus:ring-[#b48b3c] focus:border-[#b48b3c] transition-all duration-300 bg-white group-hover:border-[#b48b3c]/50 appearance-none text-sm sm:text-base`}
                      >
                        <option value="">Select a subject</option>
                        <option value="booking">Photo Session Booking</option>
                        <option value="pricing">Pricing Inquiry</option>
                        <option value="portfolio">Portfolio Request</option>
                        <option value="general">General Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#b48b3c]"></div>
                      </div>
                      {formErrors.subject && (
                        <div className="absolute left-0 top-full mt-1 flex items-center gap-1 bg-red-50 border border-red-200 text-red-700 px-2 py-1 rounded shadow transition-all duration-200 animate-fade-in">
                          <AlertCircle className="w-4 h-4" />
                          <span className="text-xs">{formErrors.subject}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className={`group ${formErrors.message ? 'error-input' : ''}`}>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#232323] mb-2 sm:mb-3">
                    Your Message *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-[#f3e7d9] text-black rounded-xl focus:ring-2 focus:ring-[#b48b3c] focus:border-[#b48b3c] transition-all duration-300 resize-none bg-white group-hover:border-[#b48b3c]/50 text-sm sm:text-base`}
                      placeholder="Tell us about your photography vision, preferred dates, or any questions you have..."
                    />
                    <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-transparent via-[#b48b3c]/20 to-transparent rounded-r-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {formErrors.message && (
                      <div className="absolute left-0 top-full mt-1 flex items-center gap-1 bg-red-50 border border-red-200 text-red-700 px-2 py-1 rounded shadow transition-all duration-200 animate-fade-in">
                        <AlertCircle className="w-4 h-4" />
                        <span className="text-xs">{formErrors.message}</span>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#b48b3c] to-[#a07a2c] hover:from-[#a07a2c] hover:to-[#8b6b1c] disabled:from-gray-400 disabled:to-gray-500 text-white py-4 sm:py-5 px-6 sm:px-8 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105 group disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Send Your Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-24">
          <div className="bg-white border border-[#f3e7d9] rounded-3xl shadow-2xl p-10 relative overflow-hidden">
            {/* Map Section Background Decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#b48b3c]/5 to-transparent rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#e7d6c6]/30 to-transparent rounded-tl-full"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center space-x-2 bg-[#b48b3c]/10 rounded-full px-4 py-2 mb-6">
                <MapPin className="w-4 h-4 text-[#b48b3c]" />
                <span className="text-sm font-medium text-[#b48b3c]">Studio Location</span>
              </div>
              <h2 className="text-4xl font-bold text-[#232323] mb-6 tracking-tight">Find Our Creative Studio</h2>
              <p className="text-[#232323]/70 text-lg mb-8 max-w-2xl mx-auto">
                Visit our professional studio where magic happens. We&apos;ve created a comfortable and inspiring environment for your photography sessions.
              </p>
              
              {/* Google Maps Embed */}
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg border-2 border-[#f3e7d9]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.619502324454!2d77.37340887601667!3d28.64116388368785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbf75094f5cd%3A0xdbe0e296258d838!2sLens%20Teasers%20Professional%20Baby%20and%20Maternity%20Photography%20Studio!5e0!3m2!1sen!2sin!4v1751116219255!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LensTeasers Photography Studio Location"
                  className="rounded-2xl"
                ></iframe>
                
                {/* Map Overlay with Studio Info */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-[#b48b3c] rounded-full flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-bold text-[#232323] text-sm">LensTeasers Studio</h3>
                  </div>
                  <p className="text-[#232323]/80 text-xs mb-1">SE 87A, Jaipuria Sunrise Plaza</p>
                  <p className="text-[#232323]/80 text-xs mb-1">Ahinsa Khand 1, Indirapuram</p>
                  <p className="text-[#232323]/80 text-xs">Ghaziabad, UP 201014</p>
                </div>
              </div>
              
              {/* Directions Button */}
              <div className="mt-6">
                <a
                  href="https://maps.google.com/?q=Lens+Teasers+Professional+Baby+and+Maternity+Photography+Studio+SE+87A+Jaipuria+Sunrise+Plaza+Ahinsa+Khand+1+Indirapuram+Ghaziabad+UP+201014"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#b48b3c] hover:bg-[#a07a2c] text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 