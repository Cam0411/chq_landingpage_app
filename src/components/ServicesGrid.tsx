import React from 'react';
import { motion } from 'motion/react';
import { Video, BarChart3, Settings, ShoppingCart, Globe, ArrowRight } from 'lucide-react';
import { Page } from '../types';

const services = [
  {
    id: 'creative' as Page,
    title: 'Creative Media',
    desc: 'Sản xuất hình ảnh và video cao cấp, nâng tầm thương hiệu cá nhân.',
    icon: Video,
    color: 'from-cyan-500 to-blue-500',
    metric: '100+ Projects'
  },
  {
    id: 'ads' as Page,
    title: 'Ads Performance',
    desc: 'Chiến dịch quảng cáo đa nền tảng, cam kết KPI dựa trên doanh thu.',
    icon: BarChart3,
    color: 'from-blue-500 to-indigo-500',
    metric: '5.2x Avg ROAS'
  },
  {
    id: 'systems' as Page,
    title: 'Management Systems',
    desc: 'Tự động hóa vận hành và quản lý dữ liệu thông minh.',
    icon: Settings,
    color: 'from-indigo-500 to-purple-500',
    metric: '90% Automation'
  },
  {
    id: 'ecommerce' as Page,
    title: 'Ecommerce Ops',
    desc: 'Vận hành sàn TMĐT chuyên nghiệp, tối ưu dòng tiền.',
    icon: ShoppingCart,
    color: 'from-purple-500 to-pink-500',
    metric: '15B+ Monthly'
  },
  {
    id: 'web' as Page,
    title: 'Creative Website',
    desc: 'Thiết kế UI/UX và Landing Page tối ưu chuyển đổi.',
    icon: Globe,
    color: 'from-pink-500 to-rose-500',
    metric: '3.8% Conv Rate'
  }
];

const ServicesGrid = ({ onViewDetails }: { onViewDetails: (p: Page) => void }) => {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-8 md:px-24">
        <div className="mb-16">
          <span className="text-cyan-400 font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">
            // DỊCH VỤ CỦA CHÚNG TÔI
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase">
            GIẢI PHÁP <span className="text-cyan-400">DỰA TRÊN DỮ LIỆU</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => onViewDetails(service.id)}
              aria-label={`Xem chi tiết dịch vụ ${service.title}`}
              className="group relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 cursor-pointer overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
              
              <div className="flex justify-between items-start mb-6">
                <service.icon className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-500" aria-hidden="true" />
                <span className="text-[10px] font-mono text-cyan-400 border border-cyan-400/40 px-2 py-1 rounded bg-cyan-400/5">
                  {service.metric}
                </span>
              </div>
              
              <h3 className="text-xl font-display font-bold text-white uppercase mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-base text-slate-300 leading-relaxed mb-8 font-normal">
                {service.desc}
              </p>
              
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                Xem chi tiết <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
