"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navItems = [
    { name: "Home", url: "/" },
    { name: "Photo", url: "/photo" },
    { name: "Gifts", url: "/gifts" },
    { name: "Contact", url: "/contact" }
    // { name: "Party", url: "/party" },
  ];

  // Professional yet playful color palette
  const colors = [
    "#5E81AC", // Soft blue
    "#88C0D0", // Light teal
    "#8FBCBB", // Muted seafoam
    "#A3BE8C", // Soft green
    "#D08770", // Warm peach
    "#B48EAD"  // Soft lavender
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Fredoka+One&display=swap');
        
        .navbar {
          font-family: 'Poppins', sans-serif;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          background: white;
        }
        
        .logo-font {
          font-family: 'Fredoka One', cursive;
        }
        
        .gradient-bg {
          background: linear-gradient(
            135deg,
            ${colors[0]} 0%,
            ${colors[2]} 50%,
            ${colors[4]} 100%
          );
          background-size: 200% 200%;
          animation: gradient 10s ease infinite;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes subtleBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes gentlePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-subtle-bounce {
          animation: subtleBounce 3s infinite;
        }
        
        .animate-gentle-pulse {
          animation: gentlePulse 2s ease-in-out infinite;
        }
        
        .animate-slide-down {
          animation: slideDown 0.3s ease-out forwards;
        }
        
        .nav-item {
          position: relative;
          transition: all 0.2s ease;
        }
        
        .nav-item:hover {
          transform: translateY(-2px);
        }
        
        .nav-item.active {
          font-weight: 600;
        }
        
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: currentColor;
          transition: width 0.3s ease;
        }
        
        .nav-item:hover::after,
        .nav-item.active::after {
          width: 100%;
        }
        
        .mobile-menu {
          transition: all 0.3s ease;
          overflow: hidden;
        }
        
        .mobile-menu.open {
          max-height: 500px;
          opacity: 1;
        }
        
        .mobile-menu.closed {
          max-height: 0;
          opacity: 0;
        }
        
        .menu-button {
          transition: all 0.3s ease;
        }
        
        .menu-button:hover {
          transform: rotate(0deg);
        }
      `}</style>

      <nav className="navbar fixed w-full z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-3">
              <div 
                className={`mr-2 ${isMounted ? 'animate-subtle-bounce' : 'opacity-0'}`}
                style={{ animationDelay: '0.1s' }}
              >
                <Image 
                  src="/Corporate-Gifts-India.webp" 
                  width={40} 
                  height={40} 
                  alt="Gift Store Logo"
                  // className="animate-gentle-pulse"
                />
              </div>
              <Link 
                href="/" 
                className={`text-xl gradient-text logo-font ${isMounted ? 'animate-gentle-pulse' : 'opacity-0'}`}
                style={{ animationDelay: '0.1s' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-[#5E81AC]">Ammu's</span> <span className="text-[#D08770]">Gifts</span>
                 {/* <span className="text-[#A3BE8C]">Gifts</span> */}
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden sm:flex sm:space-x-4">
              {navItems.map((route, index) => (
                <Link 
                  key={route.url} 
                  href={route.url} 
                  className={`
                    nav-item px-3 py-2 rounded-md
                    ${pathname === route.url ? `text-[#5E81AC] active` : 'text-gray-700 hover:text-[#5E81AC]'}
                    ${isMounted ? 'animate-slide-down' : 'opacity-100'}
                  `}
                  style={{ 
                    animationDelay: `${0.3 + index * 0.1}s`
                  }}
                >
                  {route.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="sm:hidden">
              <button 
                className="menu-button text-gray-700 p-2 rounded-md hover:text-[#5E81AC]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : 'closed'} sm:hidden`}>
            <div className="pt-2 pb-4 space-y-1">
              {navItems.map((route, index) => (
                <Link
                  key={route.url}
                  href={route.url}
                  className={`
                    block px-4 py-3 rounded-md text-base
                    ${pathname === route.url ? `text-[#5E81AC] bg-[${colors[index % colors.length]}]` : 'text-gray-700 hover:bg-gray-100'}
                    animate-slide-down
                  `}
                  style={{
                    animationDelay: `${0.1 + index * 0.05}s`
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {route.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;