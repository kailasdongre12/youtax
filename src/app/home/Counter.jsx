'use client';

import { Gift, Smile, Star, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  {
    id: 1,
    label: 'Years Of Expertise',
    value: '8+',
    icon: <Gift className="w-12 h-12 text-primary" strokeWidth={1}/>,
  },
  {
    id: 2,
    label: 'Happy Clients',
    value: '5K+',
    icon: <Smile className="w-12 h-12 text-primary" strokeWidth={1}/>,
  },
  {
    id: 3,
    label: 'Client Rating',
    value: '4.8',
    icon: <Star className="w-12 h-12 text-primary" strokeWidth={1}/>,
  },
  {
    id: 4,
    label: 'Projects Done',
    value: '8K+',
    icon: <Layers className="w-12 h-12 text-primary" strokeWidth={1}/>,
  },
];

export default function Counter() {
  return (
    <section className="-mt-[90px] w-full flex justify-center z-10 relative">
      <div className="bg-gray-100 w-11/12 md:w-4/5 rounded-2xl shadow-lg p-6 md:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: stat.id * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <div className='primaryText'>{stat.icon}</div>
            <h3 className="text-3xl font-bold mt-2 text-gray-900">{stat.value}</h3>
            <p className="text-sm font-bold text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
