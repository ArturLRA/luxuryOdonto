"use client";

import { motion } from "framer-motion";
import { Star, Car, Sparkles, ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { site, whatsappLinks } from "@/lib/site-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-petrol-gradient noise-texture"
    >
      {/* Decorative gold orbs */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[36rem] h-[36rem] rounded-full bg-gold-luxury/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-petrol-light/20 blur-3xl" />

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(219,158,4,1) 1px, transparent 1px), linear-gradient(90deg, rgba(219,158,4,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Gold corner accents */}
      <div className="pointer-events-none absolute top-32 left-8 hidden lg:block">
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-gold-luxury/40" />
        <div className="h-px w-24 bg-gradient-to-r from-gold-luxury/40 to-transparent" />
      </div>
      <div className="pointer-events-none absolute bottom-32 right-8 hidden lg:block">
        <div className="h-px w-24 bg-gradient-to-l from-gold-luxury/40 to-transparent ml-auto" />
        <div className="w-px h-24 bg-gradient-to-t from-gold-luxury/40 to-transparent ml-auto" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold-luxury" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold-soft">
              Estreito · Florianópolis / SC
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-white text-4xl sm:text-5xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-balance"
          >
            Especialistas em transformar{" "}
            <span className="italic text-gold-shimmer font-medium">vidas</span> através de sorrisos.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-2xl text-lg sm:text-xl text-white/80 font-light leading-relaxed text-pretty"
          >
            Odontologia completa, humanizada e tecnológica no coração do Estreito. O luxo
            está no acolhimento, na sinceridade e no carinho — não na ostentação.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={whatsappLinks.geral}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 bg-gold-gradient text-petrol-deep font-semibold px-7 py-4 rounded-full shadow-gold-glow hover:scale-[1.02] transition-transform"
            >
              <MessageCircle className="w-5 h-5" />
              Agende sua avaliação
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#especialidades"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/25 text-white hover:border-gold-soft hover:bg-white/5 transition-all"
            >
              Conheça nossos tratamentos
            </a>
          </motion.div>

          {/* Badges */}
          <motion.div
            variants={itemVariants}
            className="mt-14 flex flex-wrap gap-x-8 gap-y-4"
          >
            <Badge
              icon={<Star className="w-4 h-4 fill-gold-luxury text-gold-luxury" />}
              title="5.0 estrelas"
              subtitle="no Google"
            />
            <Badge
              icon={<Car className="w-4 h-4 text-gold-luxury" />}
              title="Estacionamento gratuito"
              subtitle="para pacientes"
            />
            <Badge
              icon={<Sparkles className="w-4 h-4 text-gold-luxury" />}
              title="Natural Lux®"
              subtitle="técnica proprietária"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/50 hover:text-gold-soft transition-colors"
        aria-label="Rolar para baixo"
      >
        <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em]">Role</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.a>
    </section>
  );
}

function Badge({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-9 h-9 rounded-full border border-gold-luxury/30 bg-gold-luxury/5">
        {icon}
      </div>
      <div className="flex flex-col leading-tight">
        <span className="font-display text-white text-sm font-medium">{title}</span>
        <span className="font-sans text-xs text-white/60">{subtitle}</span>
      </div>
    </div>
  );
}
