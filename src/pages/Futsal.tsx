import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Users, Zap, Target } from 'lucide-react';

const Futsal: React.FC = () => {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8">Futsal na Gymo Academia</h1>
          <div className="w-32 h-2 bg-neon-orange mx-auto mb-12" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Desenvolvimento de técnica, rapidez e trabalho em equipa no campo.
          </p>
        </div>

        {/* Hero Image Placeholder */}
        <div className="aspect-video bg-zinc-900 border border-white/5 flex items-center justify-center overflow-hidden mb-24">
          <img 
            src="/images/futsal-hero.jpg" 
            alt="Futsal Gymo" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = '<span class="text-gray-700 font-black text-2xl uppercase tracking-widest">Espaço para Imagem de Futsal</span>';
            }}
          />
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-8">Técnica e Rapidez</h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              O futsal é um desporto dinâmico que exige reflexos rápidos e uma técnica apurada. Na Gymo Academia, focamos no desenvolvimento individual de cada jogador, integrando-o numa equipa coesa e competitiva.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Os nossos treinos são desenhados para melhorar a coordenação motora, a resistência cardiovascular e o espírito de equipa.
            </p>
            <div className="inline-flex items-center space-x-4 p-6 bg-neon-orange text-black">
              <Zap size={32} />
              <span className="text-2xl font-black uppercase tracking-tighter">Treino de Alta Performance</span>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Trabalho em Equipa', icon: <Users />, desc: 'Cooperação e amizade.' },
              { title: 'Competição', icon: <Trophy />, desc: 'Torneios frequentes.' },
              { title: 'Precisão', icon: <Target />, desc: 'Foco no golo.' },
              { title: 'Energia', icon: <Zap />, desc: 'Ritmo intenso.' },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-zinc-950 border border-white/5 text-center">
                <div className="text-neon-orange mb-4 flex justify-center">{item.icon}</div>
                <h4 className="text-white font-bold uppercase tracking-widest mb-2 text-sm">{item.title}</h4>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Image Placeholder */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-12">Nossa Equipa</h3>
          <div className="aspect-video bg-zinc-900 border border-white/5 flex items-center justify-center overflow-hidden">
            <img 
              src="/images/futsal-team.jpg" 
              alt="Equipa de Futsal" 
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<span class="text-gray-700 font-black text-2xl uppercase tracking-widest">Espaço para Imagem da Equipa de Futsal</span>';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Futsal;
