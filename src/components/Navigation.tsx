import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from '../types';
import NavigationTrigger from './navigation/NavigationTrigger';
import NavigationMenu from './navigation/NavigationMenu';
import NavigationBrand from './navigation/NavigationBrand';

const Navigation = ({ activePage, setActivePage }: { activePage: Page, setActivePage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstItemRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: { id: Page, label: string }[] = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'creative', label: 'Creative - Media - Video' },
    { id: 'ads', label: 'Ads Performance' },
    { id: 'systems', label: 'Hệ thống quản lý' },
    { id: 'ecommerce', label: 'Vận hành Ecommerce' },
    { id: 'web', label: 'Creative Website' },
    { id: 'contact', label: 'Liên hệ' },
  ];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
      setTimeout(() => firstItemRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEscape);
      triggerRef.current?.focus();
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <nav 
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 w-full z-[100] px-6 md:px-12 transition-all duration-500 flex justify-between items-center ${
          scrolled ? 'py-4 bg-black/80 backdrop-blur-lg border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'py-8 bg-transparent'
        }`}
      >
        <div className="md:hidden">
          <NavigationTrigger 
            ref={triggerRef}
            isOpen={isOpen}
            onClick={() => setIsOpen(true)}
          />
        </div>

        <div className="hidden md:flex items-center gap-12 text-xs uppercase tracking-[0.3em] font-bold text-white">
          <a href="/trang-chu" className="hover:text-cyan-400 transition-colors">Trang chủ</a>
          <div 
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
              aria-controls="services-dropdown"
            >
              Dịch vụ
              <motion.span 
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
                aria-hidden="true"
              >▾</motion.span>
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  id="services-dropdown"
                  role="menu"
                  initial={{ opacity: 0, y: 10, x: "-50%" }}
                  animate={{ opacity: 1, y: 0, x: "-50%" }}
                  exit={{ opacity: 0, y: 10, x: "-50%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute top-full left-1/2 pt-4 z-50"
                >
                  <div className="glass-morphism p-6 rounded-2xl min-w-[240px] flex flex-col gap-4 border border-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                    <motion.a 
                      role="menuitem"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 }}
                      href="/creative" 
                      className="hover:text-cyan-400 transition-colors py-1 border-b border-white/5"
                    >
                      Creative Media
                    </motion.a>
                    <motion.a 
                      role="menuitem"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      href="/ads" 
                      className="hover:text-cyan-400 transition-colors py-1 border-b border-white/5"
                    >
                      Ads Performance
                    </motion.a>
                    <motion.a 
                      role="menuitem"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                      href="/systems" 
                      className="hover:text-cyan-400 transition-colors py-1 border-b border-white/5"
                    >
                      Management Systems
                    </motion.a>
                    <motion.a 
                      role="menuitem"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      href="/ecommerce" 
                      className="hover:text-cyan-400 transition-colors py-1 border-b border-white/5"
                    >
                      Ecommerce Ops
                    </motion.a>
                    <motion.a 
                      role="menuitem"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 }}
                      href="/web" 
                      className="hover:text-cyan-400 transition-colors py-1"
                    >
                      Creative Website
                    </motion.a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="/contact" className="hover:text-cyan-400 transition-colors">Liên hệ</a>
          <div className="w-px h-4 bg-white/20 mx-2" />
          <a href="mailto:hi@chq.agency" className="hover:text-cyan-400 transition-colors">hi@chq.agency</a>
        </div>

        <NavigationBrand />
      </nav>

      <AnimatePresence>
        {isOpen && (
          <NavigationMenu 
            ref={firstItemRef}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            activePage={activePage}
            setActivePage={setActivePage}
            menuItems={menuItems}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
