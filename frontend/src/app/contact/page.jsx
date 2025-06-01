// Suggested code may be subject to a license. Learn more: ~LicenseLog:2132612897.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3546562019.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2627221089.
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const colors = [
    "#5E81AC", // Soft blue
    "#88C0D0", // Light teal
    "#8FBCBB", // Muted seafoam
    "#A3BE8C", // Soft green
    "#D08770", // Warm peach
    "#B48EAD", // Soft lavender
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitMessage("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Fredoka+One&display=swap');
        
        body {
          font-family: 'Poppins', sans-serif;
          background-color: #f9f9f9;
        }
        
        .hero-gradient {
          background: linear-gradient(
            135deg,
            ${colors[0]} 0%,
            ${colors[1]} 100%
          );
          background-size: 200% 200%;
          animation: gradient 10s ease infinite;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        .btn-primary {
          background-color: ${colors[0]};
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          background-color: ${colors[1]};
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .contact-card {
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        
        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        .logo-font {
          font-family: 'Fredoka One', cursive;
        }
        
        .input-field:focus {
          border-color: ${colors[0]};
          box-shadow: 0 0 0 2px rgba(94, 129, 172, 0.2);
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 md:py-20">
        <div className="container mx-auto px-6 pt-16 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isMounted ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <span className="logo-font">Contact Ammu Gifts</span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto ${isMounted ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            We'd love to hear from you! Reach out with questions or special requests.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div 
                className={`contact-card bg-gray-50 p-8 rounded-xl ${isMounted ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: '0.4s', borderTop: `4px solid ${colors[0]}` }}
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
                
                {submitMessage ? (
                  <div className="p-4 mb-6 rounded-lg" style={{ backgroundColor: colors[3] + '20', borderLeft: `4px solid ${colors[3]}` }}>
                    <p className="text-gray-800">{submitMessage}</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg input-field border border-gray-300 focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg input-field border border-gray-300 focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg input-field border border-gray-300 focus:outline-none"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className={`w-full btn-primary text-white font-medium py-3 px-6 rounded-full text-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div 
                className={`${isMounted ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: '0.6s' }}
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h2>
                  <p className="text-gray-600 mb-6">
                    Have questions about our products or need help with an order? 
                    Fill out the form or reach out directly using the information below.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-4" style={{ color: colors[0] }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">Email</h3>
                        <p className="text-gray-600">contact@ammugifts.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-4" style={{ color: colors[1] }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">Phone</h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-4" style={{ color: colors[4] }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">Location</h3>
                        <p className="text-gray-600">123 Gift Street, Suite 100<br />San Francisco, CA 94107</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="contact-card bg-gray-50 p-6 rounded-xl" style={{ borderTop: `4px solid ${colors[2]}` }}>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Business Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between text-gray-600">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between text-gray-600">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between text-gray-600">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="h-96 w-full bg-gray-200 relative">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.191818469482!2d-122.42115978468137!3d37.77514217976035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809681620cf7%3A0x88a169f9c633711a!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1644598156664!5m2!1sen!2sus" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does shipping take?",
                answer: "Most orders ship within 1-2 business days. Delivery times vary by location but typically take 3-5 business days within the continental US."
              },
              {
                question: "Do you offer international shipping?",
                answer: "Yes, we ship to most countries. International shipping costs and delivery times vary depending on the destination."
              },
              {
                question: "Can I customize a gift?",
                answer: "Absolutely! Many of our products can be personalized. Use our customization tool or mention your requirements in the order notes."
              },
              {
                question: "What is your return policy?",
                answer: "We accept returns within 30 days of delivery for unused items in their original packaging. Personalized items may only be returned if they arrive damaged or defective."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ${isMounted ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <details className="group">
                  <summary className="flex justify-between items-center p-4 cursor-pointer list-none">
                    <h3 className="font-medium text-gray-800">{faq.question}</h3>
                    <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}