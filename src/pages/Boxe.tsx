import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Trophy, Users, User } from 'lucide-react';

const Boxe: React.FC = () => {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8">Boxe na Gymo Academia</h1>
          <div className="w-32 h-2 bg-neon-orange mx-auto mb-12" />
        </div>

        {/* Presentation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-8">Disciplina e Autodefesa</h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              O boxe na Gymo Academia é muito mais do que apenas um desporto de combate. É uma jornada de autodescoberta que promove a disciplina, a autodefesa e um exercício completo para o corpo.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Desenvolvemos a confiança dos nossos alunos através de treinos técnicos e intensos, adequados para todas as idades, tanto para rapazes como para raparigas.
            </p>
            <div className="p-6 bg-neon-orange text-black font-black text-2xl uppercase tracking-tighter inline-block">
              “Venha treinar com os nossos campeões!”
            </div>
          </motion.div>
          
          <div className="relative aspect-square bg-zinc-900 border border-white/5 flex items-center justify-center overflow-hidden">
            <img 
              src="/images/boxe-team.jpg" 
              alt="Equipa de Boxe" 
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Coach & Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-12 bg-zinc-950 border border-white/5 hover:border-neon-orange/50 transition-all"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-neon-orange/10 flex items-center justify-center text-neon-orange">
                <User size={32} />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">Treinador Principal</h3>
            </div>
            <p className="text-4xl font-black text-white mb-4">Mister Neto</p>
            <p className="text-gray-500 uppercase tracking-widest text-sm">Especialista em técnica e formação de atletas.</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-12 bg-zinc-950 border border-white/5 hover:border-neon-orange/50 transition-all"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-neon-orange/10 flex items-center justify-center text-neon-orange">
                <Trophy size={32} />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">Eventos e Torneios</h3>
            </div>
            <p className="text-xl text-gray-300 mb-4">Realizamos torneios todos os anos para testar as habilidades e promover o espírito competitivo saudável.</p>
            <div className="inline-block px-4 py-2 bg-neon-orange/20 text-neon-orange font-bold uppercase tracking-widest text-xs">
              Anual • Competitivo • Comunitário
            </div>
          </motion.div>
        </div>

        {/* Training Image Placeholder */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-12">Treino e Competição</h3>
        <div className="aspect-video bg-zinc-900 border border-white/5 flex items-center justify-center overflow-hidden">
          <img 
            src="/images/boxe-training.jpg" 
            alt="Treino de Boxe" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
        </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Disciplina', icon: <Shield />, desc: 'Foco mental e autocontrole rigoroso.' },
            { title: 'Força', icon: <Zap />, desc: 'Desenvolvimento muscular e explosão.' },
            { title: 'Comunidade', icon: <Users />, desc: 'Ambiente de apoio e crescimento mútuo.' },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-zinc-950 border border-white/5 text-center">
              <div className="text-neon-orange mb-6 flex justify-center">{item.icon}</div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-4">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Boxe;
