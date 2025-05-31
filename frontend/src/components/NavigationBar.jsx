"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Gifts", url: "/gifts" },
    { name: "Party", url: "/party" },
    { name: "Contact", url: "/contact" }
  ];

  // Array of bright, playful colors
  const colors = [
    "#FF6B6B", // Coral
    "#4ECDC4", // Teal
    "#FFBE0B", // Yellow
    "#FB5607", // Orange
    "#8338EC", // Purple
    "#3A86FF"  // Blue
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&family=Bubblegum+Sans&display=swap');
        
        .navbar {
          font-family: 'Comic Neue', 'Bubblegum Sans', cursive;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .rainbow-bg {
          background: linear-gradient(
            90deg,
            ${colors[0]} 0%,
            ${colors[1]} 20%,
            ${colors[2]} 40%,
            ${colors[3]} 60%,
            ${colors[4]} 80%,
            ${colors[5]} 100%
          );
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes wiggle {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          50% { transform: rotate(-5deg); }
          75% { transform: rotate(2deg); }
          100% { transform: rotate(0deg); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        .animate-wiggle {
          animation: wiggle 1s ease infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .nav-item {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .nav-item:hover {
          transform: scale(1.1);
        }
        
        .nav-item.active {
          transform: scale(1.1);
        }
        
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 4px;
          border-radius: 2px;
          background-color: white;
          transition: width 0.3s ease;
        }
        
        .nav-item:hover::after,
        .nav-item.active::after {
          width: 100%;
        }
        
        .logo-text {
          text-shadow: 2px 2px 0px rgba(0,0,0,0.1);
          letter-spacing: 1px;
        }
        
        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: ${colors[Math.floor(Math.random() * colors.length)]};
          opacity: 0;
        }
      `}</style>

      <nav className="navbar rainbow-bg fixed w-full z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-4">
              <div 
                className={`mr-2 ${isMounted ? 'animate-float' : 'opacity-0'}`}
                style={{ animationDelay: '0.1s' }}
              >
                <Image 
                  src="/gift-icon.png" 
                  width={50} 
                  height={50} 
                  alt="Gift Store Logo"
                  className="animate-wiggle"
                />
              </div>
              <Link 
                href="/" 
                className={`text-2xl text-white logo-text ${isMounted ? 'animate-bounce' : 'opacity-0'}`}
                style={{ animationDelay: '0.2s' }}
              >
                <span className="font-bold">Ammu's</span> Wonder Gifts
              </Link>
            </div>
            
            <div className="hidden sm:flex sm:space-x-6">
              {navItems.map((route, index) => {
                const color = colors[index % colors.length];
                return (
                  <Link 
                    key={route.url} 
                    href={route.url} 
                    className={`
                      nav-item text-white font-bold px-4 py-2 rounded-full
                      ${pathname === route.url ? 'active' : ''}
                      ${isMounted ? 'animate-float' : 'opacity-0'}
                    `}
                    style={{ 
                      backgroundColor: pathname === route.url ? `${color}CC` : 'transparent',
                      animationDelay: `${0.3 + index * 0.1}s`
                    }}
                  >
                    {route.name}
                  </Link>
                );
              })}
            </div>
            
            {/* Mobile menu button would go here */}
            <div className="sm:hidden">
              <button className="text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;