import React from 'react';
import { motion } from 'motion/react';

const StatItem = ({ value, label, delay }: { value: string, label: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="flex flex-col"
  >
    <span className="text-4xl md:text-6xl font-display font-bold text-white mb-2">{value}</span>
    <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/60 font-mono">{label}</span>
  </motion.div>
);

const AgencyIntro = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="container mx-auto px-8 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <span className="text-cyan-400 font-mono text-[10px] tracking-[0.5em] uppercase mb-6 block">
              // CHQ MANIFESTO
            </span>
            <h2 className="text-5xl md:text-8xl font-display font-bold text-white leading-[0.9] uppercase mb-12">
              DỮ LIỆU LÀ <br />
              <span className="text-cyan-400">NGÔN NGỮ</span> <br />
              CỦA CHÚNG TÔI
            </h2>
            <p className="text-slate-300 text-xl md:text-2xl leading-relaxed font-normal max-w-2xl">
              CHQ Agency định nghĩa lại Digital Marketing thông qua lăng kính dữ liệu. Chúng tôi không đoán mò, chúng tôi phân tích, đo lường và tối ưu hóa từng pixel để mang lại kết quả thực tế cho doanh nghiệp.
            </p>
          </motion.div>
          
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:pt-24">
            <StatItem value="100+" label="Dự án thành công" delay={0.2} />
            <StatItem value="30+" label="Chuyên gia số" delay={0.3} />
            <StatItem value="5.2x" label="ROAS Trung bình" delay={0.4} />
            <StatItem value="92%" label="Tỷ lệ giữ chân" delay={0.5} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyIntro;
