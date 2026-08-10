"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { testimonials, site } from "@/lib/site-data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const go = (dir: number) => {
    setIndex((prev) => (prev + dir + total) % total);
  };

  const current = testimonials[index];

  return (
    <section
      id="depoimentos"
      className="scroll-anchor relative bg-petrol-deep noise-texture py-24 lg:py-32 overflow-hidden"
    >
      {/* Decorative gold orbs */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold-luxury/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-petrol-light/15 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold-luxury" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold-soft">
              Depoimentos
            </span>
            <span className="h-px w-10 bg-gold-luxury" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight text-balance">
            Histórias reais de quem{" "}
            <span className="italic text-gold-shimmer">confiou no nosso cuidado</span>.
          </h2>

          <div className="mt-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-gold-luxury/20">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-luxury text-gold-luxury" />
              ))}
            </div>
            <span className="font-display text-white text-sm font-medium">
              {site.ratings.google} estrelas
            </span>
            <span className="text-white/50 text-xs">· {site.ratings.reviewsCount} avaliações no Google</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <Quote
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 text-gold-luxury/20"
            strokeWidth={1}
          />

          <div className="relative min-h-[22rem] sm:min-h-[26rem] lg:min-h-[24rem] flex items-center">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex flex-col items-center text-center px-4 sm:px-12 lg:px-16"
              >
                <p className="font-display italic text-white/95 text-lg sm:text-xl lg:text-2xl leading-relaxed text-balance">
                  &ldquo;{current.text}&rdquo;
                </p>

                <div className="mt-8 flex flex-col items-center">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gold-gradient text-petrol-deep font-display text-lg font-semibold mb-3">
                    {current.initials}
                  </div>
                  <div className="font-display text-white text-lg font-medium">
                    {current.name}
                  </div>
                  <div className="mt-1 text-xs text-gold-soft uppercase tracking-wider">
                    {current.highlight}
                  </div>
                  <div className="mt-2 text-xs text-white/50">{current.source}</div>
                </div>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/70 hover:text-gold-soft hover:border-gold-soft transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className="h-1.5 rounded-full transition-all"
                  style={{
                    width: i === index ? 28 : 6,
                    backgroundColor:
                      i === index ? "var(--gold-luxury)" : "rgba(255,255,255,0.25)",
                  }}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/70 hover:text-gold-soft hover:border-gold-soft transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <a
            href={site.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold-soft hover:text-gold-luxury font-medium transition-colors"
          >
            Ver todas as avaliações no Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
