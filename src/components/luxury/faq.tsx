"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { faqItems, whatsappLinks } from "@/lib/site-data";

export function FAQ() {
  return (
    <section id="faq" className="scroll-anchor bg-cream-gradient py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold-luxury" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold-copper">
              Dúvidas frequentes
            </span>
            <span className="h-px w-10 bg-gold-luxury" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal-petrol leading-tight text-balance">
            Tudo o que você precisa{" "}
            <span className="italic text-gold-luxury">saber antes de chegar</span>.
          </h2>
          <p className="mt-6 text-ink-soft text-lg leading-relaxed">
            Reunimos as perguntas mais comuns. Não encontrou a resposta? Fale conosco no WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <Accordion
            type="single"
            collapsible
            className="space-y-3"
            defaultValue="item-0"
          >
            {faqItems.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-white rounded-2xl shadow-luxury border border-gold-copper/10 overflow-hidden px-6 lg:px-7 data-[state=open]:border-gold-luxury/30 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-6 group">
                  <div className="flex items-start gap-4 text-left">
                    <HelpCircle
                      className="flex-shrink-0 w-5 h-5 text-gold-luxury mt-0.5 group-data-[state=open]:rotate-12 transition-transform"
                      strokeWidth={1.5}
                    />
                    <span className="font-display text-base lg:text-lg font-medium text-charcoal-petrol">
                      {item.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-ink-soft leading-relaxed pb-6 pt-0 pl-9">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-ink-soft mb-5">
            Ainda tem dúvidas? Nossa equipe responde rapidamente no WhatsApp.
          </p>
          <a
            href={whatsappLinks.geral}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-petrol-deep text-white font-semibold px-6 py-3.5 rounded-full shadow-luxury hover:bg-petrol-darker transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Tirar dúvidas no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
