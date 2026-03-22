import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, Users, Trophy, Heart, Shield } from 'lucide-react';

const Modalidades: React.FC = () => {
  const modalities = [
    {
      name: 'Karate',
      price: '800 MT / mês',
      icon: <Shield />,
      image: `${import.meta.env.BASE_URL}images/karate-mod.jpg`,
      link: '/karate',
      desc: 'Arte marcial focada na autodefesa e disciplina mental.',
    },
    {
      name: 'Boxe',
      price: 'Consultar Planos',
      icon: <Zap />,
      image: `${import.meta.env.BASE_URL}images/boxe-mod.jpg`,
      link: '/boxe',
      desc: 'Treino de alta intensidade para força e agilidade.',
    },
    {
      name: 'Futsal',
      price: 'Consultar Planos',
      icon: <Trophy />,
      image: `${import.meta.env.BASE_URL}images/futsal-mod.jpg`,
      link: '/futsal',
      desc: 'Desenvolvimento de técnica e trabalho em equipa no campo.',
    },
    {
      name: 'Voleibol',
      price: 'Consultar Planos',
      icon: <Users />,
      image: `${import.meta.env.BASE_URL}images/voleibol-mod.jpg`,
      link: '/voleibol',
      desc: 'Dinâmica de grupo e coordenação motora superior.',
    },
    {
      name: 'Basquetebol',
      price: 'Consultar Planos',
      icon: <Target />,
      image: `${import.meta.env.BASE_URL}images/basquetebol-mod.jpg`,
      link: '/basquetebol',
      desc: 'Precisão e estratégia em cada cesto.',
    },
    {
      name: 'Aeróbica',
      price: 'Ver Planos Específicos',
      icon: <Heart />,
      image: `${import.meta.env.BASE_URL}images/aerobica-mod.jpg`,
      link: '/aerobica',
      desc: 'Ritmo e saúde cardiovascular em aulas dinâmicas.',
    },
    {
      name: 'Musculação',
      price: 'Ver Planos Específicos',
      icon: <Zap />,
      image: `${import.meta.env.BASE_URL}images/musculacao-mod.jpg`,
      link: '/musculacao',
      desc: 'Treino de força personalizado para todos os níveis.',
    },
  ];

  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8">Nossas Modalidades</h1>
          <div className="w-32 h-2 bg-neon-orange mx-auto mb-12" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de atividades desportivas para todas as idades e níveis de experiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modalities.map((mod, i) => (
            <motion.div
              key={mod.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-zinc-950 border border-white/5 overflow-hidden hover:border-neon-orange/50 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden bg-zinc-900 flex items-center justify-center">
                <img
                  src={mod.image}
                  alt={mod.name}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-neon-orange/10 flex items-center justify-center text-neon-orange">
                    {mod.icon}
                  </div>
                  <span className="text-neon-orange font-bold text-sm uppercase tracking-widest">{mod.price}</span>
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">{mod.name}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">{mod.desc}</p>
                {mod.link ? (
                  <Link
                    to={mod.link}
                    className="inline-flex items-center text-white font-bold uppercase tracking-widest text-sm group-hover:text-neon-orange transition-colors"
                  >
                    Ver Planos Detalhados
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                ) : (
                  <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                    Consulte-nos na Academia
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modalidades;
