"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
  ArrowUp,
} from "lucide-react";
import { Logo } from "./logo";
import { site, navItems, whatsappLinks } from "@/lib/site-data";

export function Footer() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-petrol-darker text-white overflow-hidden noise-texture">
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-luxury to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <Logo variant="light" showTagline className="!h-10" />
            <p className="mt-5 text-white/65 text-sm leading-relaxed max-w-sm">
              {site.concept}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Luxury Odonto"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white/75 hover:text-gold-soft hover:border-gold-soft transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Luxury Odonto"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white/75 hover:text-gold-soft hover:border-gold-soft transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={whatsappLinks.geral}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Luxury Odonto"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white/75 hover:text-gold-soft hover:border-gold-soft transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="font-display text-sm font-medium text-gold-soft uppercase tracking-[0.2em] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 hover:text-gold-soft transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h4 className="font-display text-sm font-medium text-gold-soft uppercase tracking-[0.2em] mb-4">
              Contato
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="flex-shrink-0 w-4 h-4 text-gold-luxury mt-0.5" strokeWidth={1.5} />
                <span className="text-white/70 leading-relaxed">
                  {site.address.street}<br />
                  {site.address.district} — {site.address.city}/{site.address.state}<br />
                  CEP {site.address.cep}
                </span>
              </li>
              <li>
                <a
                  href={site.contact.phoneHref}
                  className="flex items-center gap-3 text-white/70 hover:text-gold-soft transition-colors"
                >
                  <Phone className="flex-shrink-0 w-4 h-4 text-gold-luxury" strokeWidth={1.5} />
                  <span className="font-mono">{site.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${site.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-gold-soft transition-colors"
                >
                  <MessageCircle className="flex-shrink-0 w-4 h-4 text-gold-luxury" strokeWidth={1.5} />
                  <span className="font-mono">{site.contact.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={site.contact.emailHref}
                  className="flex items-center gap-3 text-white/70 hover:text-gold-soft transition-colors"
                >
                  <Mail className="flex-shrink-0 w-4 h-4 text-gold-luxury" strokeWidth={1.5} />
                  <span className="truncate">{site.contact.email}</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <h4 className="font-display text-sm font-medium text-gold-soft uppercase tracking-[0.2em] mb-4">
              Horários
            </h4>
            <ul className="space-y-3 text-sm">
              {site.hours.map((h) => (
                <li key={h.day} className="flex items-start gap-3">
                  <Clock className="flex-shrink-0 w-4 h-4 text-gold-luxury mt-0.5" strokeWidth={1.5} />
                  <div>
                    <div className="text-white/85">{h.day}</div>
                    <div className="text-white/60 font-mono text-xs">{h.time}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-gold-luxury/15">
              <div className="text-xs text-gold-soft uppercase tracking-wider mb-1">Avaliação Google</div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl text-white font-medium">{site.ratings.google}</span>
                <span className="text-xs text-white/60">/ 5.0 estrelas</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Legal bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="text-xs text-white/45 leading-relaxed max-w-3xl">
            © {new Date().getFullYear()} {site.legalName}. Todos os direitos reservados. ·{" "}
            <span className="font-mono">CNPJ {site.cnpj}</span> ·{" "}
            <span className="font-mono">{site.cro}</span>
            <br />
            Conteúdo exclusivamente informativo. Qualquer procedimento é precedido de avaliação clínica.
          </div>

          <div className="flex items-center gap-3 text-xs">
            <a
              href="#"
              className="text-white/50 hover:text-gold-soft transition-colors"
            >
              Política de Privacidade
            </a>
            <span className="text-white/20">·</span>
            <a
              href="#"
              className="text-white/50 hover:text-gold-soft transition-colors"
            >
              Termos
            </a>
            <span className="text-white/20">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/50 hover:text-gold-soft transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              Topo
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
