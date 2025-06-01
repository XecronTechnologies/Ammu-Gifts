"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"
import Navbar from "../components/NavigationBar"; // Assuming your navbar is in the same directory

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const colors = [
    "#5E81AC", // Soft blue
    "#88C0D0", // Light teal
    "#8FBCBB", // Muted seafoam
    "#A3BE8C", // Soft green
    "#D08770", // Warm peach
    "#B48EAD"  // Soft lavender
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const featuredCategories = [
    {
      name: "Personalized Gifts",
      description: "Custom-made treasures for your loved ones",
      image: "/Personalized Gifts.webp"
    },
    {
      name: "Photo Frames",
      description: "Preserve your precious memories in style",
      image: "/Photo Frames.png"
    },
    {
      name: "Corporate Gifts",
      description: "Elegant gifts for business associates",
      image: "/corporate-gift-in-dubai.jpg"
    }
  ];

  const testimonials = [
    {
      quote: "The perfect gift for my wife's birthday! She loved the personalized photo frame.",
      author: "Rahul K."
    },
    {
      quote: "Excellent quality and timely delivery. Will definitely order again!",
      author: "Priya M."
    },
    {
      quote: "Unique gift options that you won't find anywhere else. Highly recommend!",
      author: "Anjali S."
    }
  ];

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
        
        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
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
        
        .btn-secondary {
          background-color: ${colors[4]};
          transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
          background-color: ${colors[5]};
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .testimonial-card {
          transition: all 0.3s ease;
        }
        
        .testimonial-card:hover {
          transform: scale(1.02);
        }
        
        .logo-font {
          font-family: 'Fredoka One', cursive;
        }
      `}
      </style>

      {/* <Navbar /> */}
      {/* Hero Section */}
      <br />
      <section className="hero-gradient text-white py-16  md:py-24">
        <div className="container mx-auto px-6 pt-25 text-center">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isMounted ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <span className="logo-font">Ammu Gifts</span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto ${isMounted ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            Thoughtful gifts that bring smiles and create lasting memories
          </p>
          <div className={`flex flex-col sm:flex-row justify-center gap-4 ${isMounted ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <Link href="/gifts" className="btn-primary text-white font-medium py-3 px-8 rounded-full text-lg">
              Browse Gifts
            </Link>
            <Link href="/photo" className="btn-secondary text-white font-medium py-3 px-8 rounded-full text-lg">
              Photo Gifts
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCategories.map((category, index) => (
              <div
                key={category.name}
                className={`category-card bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${isMounted ? 'animate-fade-in' : 'opacity-0'}`}
                style={{
                  animationDelay: `${0.3 + index * 0.2}s`,
                  borderTop: `4px solid ${colors[index % colors.length]}`
                }}
              >
                <div className="h-48 relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link
                    href="/gifts"
                    className={`inline-block text-sm font-medium py-2 px-4 rounded-full`}
                    style={{ backgroundColor: colors[index % colors.length], color: 'white' }}
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image Column - Order changed for mobile */}
            <div className={`w-full md:w-1/2 mb-8 md:mb-0 md:pr-12 ${isMounted ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.4s' }}>
              <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/our-story.png"
                  alt="About Ammu's Gifts"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>

            {/* Text Column */}
            <div className={`w-full md:w-1/2 ${isMounted ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                At Ammu Gifts, we believe that the perfect gift can create moments of joy that last a lifetime.
                Founded in 2022, we've been helping customers find thoughtful, unique gifts for all occasions.
              </p>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Each item in our collection is carefully curated to ensure quality and uniqueness. Whether you're
                celebrating a birthday, anniversary, or just want to show someone you care, we have something special for you.
              </p>
              <Link
                href="/contact"
                className="inline-block btn-primary text-white font-medium py-2 px-6 sm:py-3 sm:px-8 rounded-full text-sm sm:text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card bg-gray-50 p-8 rounded-xl shadow-md ${isMounted ? 'animate-fade-in' : 'opacity-0'}`}
                style={{
                  animationDelay: `${0.3 + index * 0.2}s`,
                  borderBottom: `4px solid ${colors[index % colors.length]}`
                }}
              >
                <div className="text-gray-600 italic mb-6">"{testimonial.quote}"</div>
                <div className="font-medium text-gray-700">— {testimonial.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16" style={{ backgroundColor: colors[2] }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Find the Perfect Gift?</h2>
          <p className="text-xl mb-8 text-white opacity-90 max-w-2xl mx-auto">
            Browse our collection of unique gifts that will make your loved ones feel special.
          </p>
          <Link
            href="/gifts"
            className="inline-block bg-white text-gray-800 font-medium py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-all"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </>
  );
}