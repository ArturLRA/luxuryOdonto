"use client";

import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck, ArrowUpRight, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { team, whatsappLinks, site } from "@/lib/site-data";
import type { TeamMember } from "@/lib/site-data";

export function Team() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <section id="equipe" className="scroll-anchor bg-cream-gradient py-24 lg:py-32">
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
              Especialistas
            </span>
            <span className="h-px w-10 bg-gold-luxury" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal-petrol leading-tight text-balance">
            Cinco especialistas,{" "}
            <span className="italic text-gold-luxury">uma só família</span>.
          </h2>
          <p className="mt-6 text-ink-soft text-lg leading-relaxed">
            Cada profissional da Luxury é parte integrante da equipe — não terceirizado.
            CROs ativos, formação contínua e compromisso com atendimento humanizado.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {team.map((member, idx) => (
            <motion.button
              key={member.name}
              type="button"
              onClick={() => setSelected(member)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative text-left bg-white rounded-2xl p-7 shadow-luxury border border-gold-copper/10 hover-lift hover:shadow-luxury-lg transition-all overflow-hidden ${
                idx === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-luxury/8 to-transparent rounded-bl-full pointer-events-none group-hover:from-gold-luxury/15 transition-colors" />

              <div className="flex items-start gap-5 mb-5">
                {/* Avatar with initials */}
                <div className="relative flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-petrol-gradient text-white font-display text-xl font-medium">
                    {member.initials}
                  </div>
                  <div className="absolute -bottom-1 -right-1 flex items-center justify-center w-6 h-6 rounded-full bg-gold-gradient border-2 border-white">
                    <BadgeCheck className="w-3.5 h-3.5 text-petrol-deep" strokeWidth={2.5} />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-gold-luxury/10 text-gold-luxury text-[0.65rem] font-semibold uppercase tracking-wider mb-2">
                    {member.highlight}
                  </div>
                  <h3 className="font-display text-lg font-medium text-charcoal-petrol leading-tight">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">{member.specialty}</p>
                  <p className="mt-0.5 text-xs text-gold-copper font-mono">{member.cro}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gold-copper/10">
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-petrol-deep">
                  <GraduationCap className="w-4 h-4" strokeWidth={1.5} />
                  Ver biografia completa
                </span>
                <ArrowUpRight className="w-4 h-4 text-gold-luxury group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.button>
          ))}

          {/* 6th card — Reception / CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-petrol-gradient rounded-2xl p-7 text-white overflow-hidden noise-texture"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gold-luxury/15 text-gold-soft mb-5">
                <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-medium mb-2">
                Recepção Luxury
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5 flex-1">
                A Kary, nossa recepcionista, é o primeiro sorriso que você encontra.
                Ela encontra o horário ideal para você e tira todas as suas dúvidas.
              </p>
              <a
                href={whatsappLinks.geral}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold-gradient text-petrol-deep font-semibold px-5 py-2.5 rounded-full text-sm shadow-gold-glow"
              >
                Conversar no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal for full bio */}
      {selected && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-petrol-darker/80 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-white rounded-3xl max-w-2xl w-full shadow-luxury-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm text-ink-soft hover:text-petrol-deep hover:bg-cream transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header with avatar */}
            <div className="relative bg-petrol-gradient noise-texture p-8 lg:p-10">
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gold-gradient text-petrol-deep font-display text-2xl font-semibold border-4 border-white/15">
                  {selected.initials}
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold-luxury/15 text-gold-soft text-[0.65rem] font-semibold uppercase tracking-wider mb-2">
                    {selected.highlight}
                  </div>
                  <h3 className="font-display text-2xl font-medium text-white leading-tight">
                    {selected.name}
                  </h3>
                  <p className="text-gold-soft text-sm mt-1">{selected.specialty}</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gold-copper/15">
                <BadgeCheck className="w-4 h-4 text-gold-luxury" strokeWidth={2} />
                <span className="font-mono text-sm text-ink-soft">{selected.cro}</span>
              </div>
              <p className="text-ink-soft leading-relaxed">{selected.bio}</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={selected.whatsapp ?? whatsappLinks.geral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-petrol-deep text-white font-semibold px-5 py-3 rounded-full text-sm hover:bg-petrol-darker transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Agendar com {selected.shortName}
                </a>
                <a
                  href={site.contact.phoneHref}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-gold-copper/30 text-petrol-deep font-medium text-sm hover:border-gold-luxury hover:bg-cream transition-colors"
                >
                  Ligar para a clínica
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
