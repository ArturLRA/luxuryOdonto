"use client";

import { motion } from "framer-motion";
import { Car, Sparkles, Languages, Users, Star } from "lucide-react";
import { differentials } from "@/lib/site-data";

const iconMap = {
  Car,
  Sparkles,
  Languages,
  Users,
  Star,
} as const;

export function Differentials() {
  return (
    <section className="relative bg-petrol-deep noise-texture py-24 lg:py-32 overflow-hidden">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] rounded-full bg-gold-luxury/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold-luxury" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold-soft">
              Por que escolher a Luxury
            </span>
            <span className="h-px w-10 bg-gold-luxury" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight text-balance">
            Diferenciais que tornam a experiência{" "}
            <span className="italic text-gold-shimmer">genuinamente luxuosa</span>.
          </h2>
          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            Cinco razões concretas que tornam a Luxury Odonto uma referência em Florianópolis.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {differentials.map((item, idx) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            const isWide = idx === 0; // First card spans wider on mobile
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative p-7 lg:p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] hover:border-gold-luxury/30 transition-all hover-lift ${
                  isWide ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gold-luxury/10 text-gold-soft mb-5 group-hover:bg-gold-gradient group-hover:text-petrol-deep transition-colors">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-white font-medium mb-3">
                  {item.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">{item.description}</p>

                {/* Gold corner accent */}
                <div className="absolute top-4 right-4 font-display italic text-gold-luxury/30 text-sm">
                  0{idx + 1}
                </div>
              </motion.div>
            );
          })}

          {/* 6th card — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="group relative p-7 lg:p-8 rounded-2xl bg-gold-gradient text-petrol-deep flex flex-col justify-between hover-lift"
          >
            <div>
              <h3 className="font-display text-2xl font-medium leading-tight">
                Experimente a diferença Luxury.
              </h3>
              <p className="mt-3 text-petrol-deep/80 text-sm leading-relaxed">
                Agende sua avaliação e descubra por que somos referência em odontologia humanizada em Florianópolis.
              </p>
            </div>
            <a
              href="https://wa.me/554891302547?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-petrol-deep text-white font-semibold px-5 py-3 rounded-full text-sm hover:bg-petrol-darker transition-colors"
            >
              Agendar agora
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
