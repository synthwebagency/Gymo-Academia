import React from 'react';
import { motion } from 'motion/react';
import { Target, Heart, Shield, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-neon-orange font-black uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Sobre Nós
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8"
          >
            GYMO ACADEMIA
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="w-32 h-2 bg-neon-orange mx-auto mb-12 origin-left"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A Gymo Academia é um centro de excelência desportiva dedicado ao desenvolvimento integral dos nossos membros.
          </motion.p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-neon-orange flex items-center justify-center text-black">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight">Nossa Missão</h2>
            </div>
            <p className="text-lg text-gray-400 leading-relaxed">
              Promover saúde, disciplina e desenvolvimento físico e mental através do desporto. Acreditamos que a prática desportiva é a base para uma vida equilibrada e produtiva.
            </p>
            <ul className="space-y-4">
              {[
                'Desenvolvimento de competências físicas',
                'Fortalecimento da resiliência mental',
                'Promoção de hábitos saudáveis',
                'Integração social e espírito de equipa',
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-neon-orange rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-video bg-zinc-900 border border-white/10 overflow-hidden">
              <img
                src="/images/mission.jpg"
                alt="Missão Gymo"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-neon-orange/20 border border-neon-orange/30 -z-10" />
          </motion.div>
        </div>

        {/* Environment Section */}
        <div className="bg-zinc-950 p-12 md:p-24 border border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">O Nosso Ambiente</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Criamos um espaço único onde cada detalhe é pensado para a sua motivação.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Divertido', icon: <Heart />, desc: 'Treinos que dão prazer e alegria.' },
              { title: 'Disciplinado', icon: <Shield />, desc: 'Foco total nos seus objetivos.' },
              { title: 'Energético', icon: <Zap />, desc: 'Vibração positiva em cada canto.' },
              { title: 'Respeitador', icon: <Users />, desc: 'Um espaço para todos, sem exceção.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 border border-white/5 hover:border-neon-orange/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-neon-orange mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
