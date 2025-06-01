"use client";

import Link from "next/link";
import { FaGift, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <style jsx global>{`
        .footer {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(
            135deg,
            #f8f9fa 0%,
            #ffffff 50%,
            #f8f9fa 100%
          );
          box-shadow: 0 -2px 10px rgba(0,0,0,0.05);
        }
        
        .footer-logo {
          font-family: 'Fredoka One', cursive;
        }
        
        .contact-card {
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }
        
        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.1);
        }
        
        .contact-button {
          background: linear-gradient(
            135deg,
            #5E81AC 0%,
            #8FBCBB 50%,
            #D08770 100%
          );
          background-size: 200% 200%;
          transition: all 0.3s ease;
        }
        
        .contact-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          background-position: 100% 50%;
        }
        
        .social-icon {
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          transform: scale(1.2) translateY(-3px);
        }
      `}</style>

            <footer className="footer pt-12 pb-6 mt-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* About Section */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <FaGift className="text-[#D08770] text-2xl" />
                                <span className="footer-logo text-xl">
                                    <span className="text-[#5E81AC]">Ammu</span> <span className="text-[#D08770]">Gifts</span>
                                </span>
                            </div>
                            <p className="text-gray-600">
                                Creating memorable moments with thoughtful gifts and beautiful photography.
                                Let us help you celebrate life's special occasions.
                            </p>
                            <div className="flex space-x-4 pt-2">
                                <a href="#" className="social-icon text-[#5E81AC] hover:text-[#D08770] text-xl">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className="social-icon text-[#5E81AC] hover:text-[#D08770] text-xl">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="social-icon text-[#5E81AC] hover:text-[#D08770] text-xl">
                                    <i className="fab fa-pinterest"></i>
                                </a>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Developed By {' '}
                                <a href="https://www.xecrontechnologies.in/" target="_blank" rel="noopener noreferrer" className="text-[#5E81AC] hover:text-[#D08770] hover:underline">
                                Xecron Technologies
                            </a>
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-[#5E81AC]">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/" className="text-gray-600 hover:text-[#D08770] transition">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/photo" className="text-gray-600 hover:text-[#D08770] transition">
                                        Photo Gallery
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/gifts" className="text-gray-600 hover:text-[#D08770] transition">
                                        Gift Collection
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-gray-600 hover:text-[#D08770] transition">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/admin" className="text-gray-600 hover:text-[#D08770] transition">
                                        Admin
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-[#5E81AC]">Get In Touch</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <FaMapMarkerAlt className="text-[#D08770] mt-1" />
                                    <p className="text-gray-600">123 Gift Street, Bangalore, India</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FaPhone className="text-[#D08770]" />
                                    <p className="text-gray-600">+91 98765 43210</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FaEnvelope className="text-[#D08770]" />
                                    <p className="text-gray-600">contact@ammusgifts.com</p>
                                </div>
                            </div>

                            <Link
                                href="/contact"
                                className="contact-button inline-block px-6 py-3 rounded-full text-white font-medium mt-4"
                            >
                                Send Us a Message
                            </Link>
                        </div>
                        <p></p>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-gray-200 mt-8 pt-6 text-center">
                        <p className="text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} Ammu Gifts. All rights reserved.
                
                          
                        </p>

                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;