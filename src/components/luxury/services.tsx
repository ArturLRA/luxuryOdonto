"use client";

import { motion } from "framer-motion";
import {
  Anchor,
  AlignCenterHorizontal,
  Sparkles,
  Smile,
  ShieldCheck,
  Stethoscope,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { serviceCategories, whatsappLinks } from "@/lib/site-data";

const iconMap: Record<string, LucideIcon> = {
  Anchor,
  AlignCenterHorizontal,
  Sparkles,
  Smile,
  ShieldCheck,
  Stethoscope,
};

const categoryWhatsApp: Record<string, string> = {
  implantes: whatsappLinks.implantes,
  ortodontia: whatsappLinks.invisalign,
  estetica: whatsappLinks.lentes,
  harmonizacao: whatsappLinks.harmonizacao,
  preventivo: whatsappLinks.geral,
  cirurgias: whatsappLinks.odontopediatria,
};

export function Services() {
  return (
    <section id="especialidades" className="scroll-anchor bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold-luxury" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold-copper">
              Tratamentos
            </span>
            <span className="h-px w-10 bg-gold-luxury" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal-petrol leading-tight text-balance">
            Doze especialidades,{" "}
            <span className="italic text-gold-luxury">um único cuidado</span>.
          </h2>
          <p className="mt-6 text-ink-soft text-lg leading-relaxed">
            Atendimento odontológico completo, organizado por áreas de especialização.
            Cada tratamento conduzido por um especialista dedicado — nunca terceirizado.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {serviceCategories.map((category, idx) => {
            const Icon = iconMap[category.icon] ?? Sparkles;
            const waLink = categoryWhatsApp[category.id] ?? whatsappLinks.geral;
            return (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white rounded-2xl p-7 lg:p-8 shadow-luxury border border-gold-copper/10 hover-lift hover:shadow-luxury-lg transition-shadow flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-petrol-mist text-petrol-deep group-hover:bg-petrol-deep group-hover:text-gold-soft transition-colors">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <span className="font-display italic text-gold-luxury/40 text-sm">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl lg:text-2xl font-medium text-charcoal-petrol mb-1">
                  {category.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-gold-copper mb-5">
                  {category.tagline}
                </p>

                <ul className="space-y-2.5 flex-1 mb-6">
                  {category.services.map((service) => (
                    <li
                      key={service.name}
                      className="flex items-start gap-2.5 text-sm text-ink-soft"
                    >
                      <span className="mt-[0.4rem] flex-shrink-0 w-1 h-1 rounded-full bg-gold-luxury" />
                      <span className="leading-snug">
                        <span className="font-medium text-charcoal-petrol/90">{service.name}</span>
                        <span className="text-ink-soft/70"> — {service.description}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-petrol-deep hover:text-gold-luxury transition-colors group/link"
                >
                  Saber mais
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
