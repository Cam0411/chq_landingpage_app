import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import LetterHover from './LetterHover';

const slides = [
  {
    id: 0,
    title: "CHQ",
    subtitle: "AGENCY",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
    desc: "Digital Marketing Agency - Nơi nghệ thuật sáng tạo gặp gỡ hiệu quả đột phá. Chúng tôi định nghĩa lại trải nghiệm thương hiệu.",
    tag: "00 // THE AGENCY"
  },
  {
    id: 1,
    title: "CREATIVE",
    subtitle: "MEDIA - VIDEO",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    desc: "Sản xuất hình ảnh và video cao cấp, nâng tầm thương hiệu cá nhân và doanh nghiệp thông qua ngôn ngữ điện ảnh.",
    tag: "01 // CREATIVE"
  },
  {
    id: 2,
    title: "ADS",
    subtitle: "PERFORMANCE",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
    desc: "Chiến dịch quảng cáo đa nền tảng, tối ưu chuyển đổi và cam kết KPI dựa trên dữ liệu thực tế.",
    tag: "02 // PERFORMANCE"
  }
];

const Hero = ({ id }: { id?: string }) => {
  const [current, setCurrent] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const rotateParallax = useTransform(scrollY, [0, 1000], [0, 10]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 20000); // Slower slider (20s)
    return () => clearInterval(timer);
  }, []);

  return (
    <section id={id} className="relative h-screen bg-black overflow-hidden flex items-center blue-glow-bg">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            <img 
              src={slides[current].image} 
              alt="" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content Layer */}
      <div className="container mx-auto px-8 md:px-24 relative z-20 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Side */}
        <motion.div 
          className="w-full md:w-[60%]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-2 mb-6">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-px bg-cyan-400" />
                  <span className="font-mono text-[10px] tracking-[0.5em] text-cyan-400 uppercase">{slides[current].tag}</span>
                </div>
              </div>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-huge md:text-massive uppercase mb-2 font-display text-white"
              >
                {slides[current].title}
              </motion.h1>
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-huge md:text-massive uppercase mb-8 font-display text-cyan-400"
              >
                {slides[current].subtitle}
              </motion.h2>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-12">
                <p className="max-w-md text-base md:text-lg font-normal opacity-90 leading-relaxed text-slate-200">
                  {slides[current].desc}
                </p>
                <button className="group relative px-8 py-4 border border-white/20 overflow-hidden transition-all hover:border-cyan-400">
                  <span className="relative z-10 font-display text-[10px] uppercase tracking-widest group-hover:text-black">Khám phá dự án</span>
                  <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Image Side */}
        <div className="w-full md:w-[35%] aspect-[4/5] relative hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full h-full relative border border-white/10 p-2 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-full h-full overflow-hidden relative">
                <img 
                  src={slides[current].image} 
                  alt={slides[current].title} 
                  className="w-full h-full object-cover grayscale brightness-75"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Side Navigation Indicators */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-30" role="tablist" aria-label="Slide navigation">
        {slides.map((slide, i) => (
          <button 
            key={i}
            onClick={() => setCurrent(i)}
            role="tab"
            aria-selected={current === i}
            aria-label={`Go to slide ${i + 1}: ${slide.title}`}
            className="group flex items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm"
          >
            <span className={`text-[10px] font-mono transition-all ${current === i ? 'text-cyan-400 opacity-100 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'text-white/40 group-hover:text-white/70'}`}>
              0{i + 1}
            </span>
            <div className={`h-px transition-all duration-500 ${current === i ? 'w-12 bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'w-4 bg-white/20 group-hover:w-8'}`} />
          </button>
        ))}
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/10 py-4 bg-black/50 backdrop-blur-md z-30" aria-hidden="true">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="font-display text-xs uppercase tracking-[1em] opacity-40 mx-8 text-white">
              CHQ AGENCY // CREATIVE REVOLUTION // DIGITAL EXCELLENCE // 
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
