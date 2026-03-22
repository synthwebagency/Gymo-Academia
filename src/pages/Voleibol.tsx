import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, Users, Trophy, Target, Zap } from 'lucide-react';

const Voleibol: React.FC = () => {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8">Voleibol</h1>
          <div className="w-32 h-2 bg-neon-orange mx-auto mb-12" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dinâmica de grupo, coordenação motora superior e espírito de equipa em cada set.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Trabalho em Equipa</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              O Voleibol na Gymo Academia é focado no desenvolvimento de habilidades técnicas e na integração social. Nossas aulas são dinâmicas e promovem a cooperação entre os atletas.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-950 border border-white/5">
                <Users className="text-neon-orange mb-4" size={32} />
                <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Socialização</h4>
                <p className="text-gray-500 text-xs">Integração e amizade.</p>
              </div>
              <div className="p-6 bg-zinc-950 border border-white/5">
                <Zap className="text-neon-orange mb-4" size={32} />
                <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Agilidade</h4>
                <p className="text-gray-500 text-xs">Reflexos rápidos e precisos.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-video bg-zinc-900 border border-white/10 overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/voleibol-page.jpg`}
                alt="Voleibol Gymo"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <div className="p-12 bg-neon-orange text-black text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Trophy size={32} />
              <h3 className="text-3xl font-black uppercase tracking-tight">Planos de Equipa</h3>
            </div>
            <p className="text-2xl font-black mb-4 uppercase tracking-tighter">Consultar Planos</p>
            <p className="font-bold uppercase tracking-widest text-sm opacity-80 mb-8">Temos opções para treinos individuais e de equipa.</p>
            <div className="pt-8 border-t border-black/10">
              <p className="text-sm font-bold uppercase tracking-widest">Inscrição: 250,00 MT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voleibol;
