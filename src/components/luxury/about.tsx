"use client";

import { motion } from "framer-motion";
import { Heart, Award, Cpu } from "lucide-react";
import { pillars } from "@/lib/site-data";

const iconMap = {
  Heart,
  Award,
  Cpu,
} as const;

export function About() {
  return (
    <section id="sobre" className="scroll-anchor relative bg-cream-gradient py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold-luxury" />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold-copper">
                Sobre a Luxury
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-charcoal-petrol text-balance">
              O luxo está no{" "}
              <span className="italic text-gold-luxury">acolhimento</span>. Não no brilho.
            </h2>

            <div className="mt-8 space-y-5 text-base lg:text-lg text-ink-soft leading-relaxed">
              <p>
                A Luxury Odonto nasceu em agosto de 2020, no coração do Estreito em Florianópolis,
                com um propósito claro: quebrar o trauma histórico de gerações com dentista.
                Transformamos o atendimento em uma experiência amável — do abraço na recepção ao
                pós-tratamento com carinho real.
              </p>
              <p>
                O nome <em className="text-gold-luxury not-italic font-medium">Luxury</em> não
                significa ostentação; significa excelência no cuidado, no ambiente e na técnica.
                É o que diferencia a clínica de quem foca apenas em tecnologia ou preço. Aqui, você
                é cuidado por uma equipe completa de especialistas — não por uma esteira de pacientes.
              </p>
            </div>

            <div className="mt-10 inline-flex items-center gap-4 p-5 rounded-xl bg-white shadow-luxury border border-gold-copper/15">
              <div className="flex flex-col">
                <span className="font-display text-3xl text-petrol-deep font-semibold">5.0</span>
                <span className="font-sans text-xs uppercase tracking-wider text-ink-soft">
                  estrelas no Google
                </span>
              </div>
              <div className="gold-divider-vertical h-12" />
              <p className="text-sm text-ink-soft max-w-xs leading-relaxed">
                Avaliação máxima com depoimentos espontâneos de pacientes reais.
              </p>
            </div>
          </motion.div>

          {/* Pillars */}
          <div className="lg:col-span-7 grid gap-5">
            {pillars.map((pillar, idx) => {
              const Icon = iconMap[pillar.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative bg-white rounded-2xl p-7 lg:p-8 shadow-luxury border border-gold-copper/10 hover-lift hover:shadow-luxury-lg transition-shadow"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-petrol-mist text-petrol-deep group-hover:bg-petrol-deep group-hover:text-gold-soft transition-colors">
                        <Icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="font-display italic text-gold-luxury text-sm">
                          0{idx + 1}
                        </span>
                        <h3 className="font-display text-xl lg:text-2xl font-medium text-charcoal-petrol">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-ink-soft leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
