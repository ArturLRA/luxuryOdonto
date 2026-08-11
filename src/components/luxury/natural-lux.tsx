"use client";

import { motion } from "framer-motion";
import { Clock, ShieldOff, RefreshCw, Sparkles, MessageCircle } from "lucide-react";
import { whatsappLinks } from "@/lib/site-data";

const benefits = [
  {
    icon: ShieldOff,
    label: "Sem anestesia",
    description: "Procedimento indolor, sem desconforto.",
  },
  {
    icon: RefreshCw,
    label: "Reversível",
    description: "Sem desgaste dental — estrutura preservada.",
  },
  {
    icon: Clock,
    label: "Uma única sessão",
    description: "Resultado imediato em um único dia.",
  },
  {
    icon: Sparkles,
    label: "Durabilidade natural",
    description: "Resina nobre com aparência natural.",
  },
];

export function NaturalLux() {
  return (
    <section id="natural-lux" className="scroll-anchor relative bg-petrol-radial noise-texture py-24 lg:py-32 overflow-hidden">
      {/* Decorative gold ring */}
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 -right-32 w-[40rem] h-[40rem] rounded-full border border-gold-luxury/15" />
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 -right-40 w-[44rem] h-[44rem] rounded-full border border-gold-luxury/8" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold-luxury" />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold-soft">
                Técnica proprietária
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-[1.05] text-balance">
              Natural Lux
              <span className="text-gold-shimmer italic align-super text-2xl ml-1">®</span>
            </h2>

            <p className="mt-3 text-gold-soft font-display italic text-xl">
              Lentes de contato dental sem desgaste.
            </p>

            <div className="mt-8 space-y-4 text-white/75 text-base lg:text-lg leading-relaxed">
              <p>
                Desenvolvida pela equipe Luxury, a técnica Natural Lux® aplica lentes em resina
                nobre diretamente sobre o dente — sem qualquer desgaste do esmalte natural.
                Totalmente reversível, permite que você veja o novo sorriso em uma única sessão.
              </p>
              <p>
                É a tradução clínica do nosso conceito de marca: tecnologia a serviço do
                cuidado, preservando o que é seu para entregar o que você sempre quis.
              </p>
            </div>

            <a
              href={whatsappLinks.lentes}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2.5 bg-gold-gradient text-petrol-deep font-semibold px-6 py-3.5 rounded-full shadow-gold-glow hover:scale-[1.02] transition-transform"
            >
              <MessageCircle className="w-4 h-4" />
              Quero saber mais sobre Natural Lux®
            </a>
          </motion.div>

          {/* Benefits card column */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {benefits.map((b, idx) => (
              <div
                key={b.label}
                className={`group relative p-6 lg:p-7 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.07] hover:border-gold-luxury/30 transition-all ${
                  idx === 0 ? "sm:mt-8" : idx === 3 ? "sm:mt-8" : ""
                }`}
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gold-luxury/10 text-gold-soft mb-4 group-hover:bg-gold-gradient group-hover:text-petrol-deep transition-colors">
                  <b.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg text-white font-medium mb-1">
                  {b.label}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
