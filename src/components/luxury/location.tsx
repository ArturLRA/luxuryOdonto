"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Car, Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";
import { site, whatsappLinks } from "@/lib/site-data";

export function Location() {
  const mapQuery = encodeURIComponent(
    "Rua Souza Dutra 145, Estreito, Florianópolis, SC, 88070-605",
  );
  const mapEmbed = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const mapLink = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;
  const wazeLink = `https://waze.com/ul?q=${mapQuery}`;

  return (
    <section id="localizacao" className="scroll-anchor bg-cream py-24 lg:py-32">
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
              Visite-nos
            </span>
            <span className="h-px w-10 bg-gold-luxury" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal-petrol leading-tight text-balance">
            No coração do{" "}
            <span className="italic text-gold-luxury">Estreito</span>.
          </h2>
          <p className="mt-6 text-ink-soft text-lg leading-relaxed">
            Estamos na Rua Souza Dutra, 145 — fácil acesso e estacionamento gratuito conveniado.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 relative rounded-2xl overflow-hidden shadow-luxury border border-gold-copper/15 min-h-[24rem] lg:min-h-[28rem]"
          >
            <iframe
              title="Mapa — Luxury Odonto no Estreito, Florianópolis"
              src={mapEmbed}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, filter: "saturate(0.85) hue-rotate(-8deg)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            {/* Floating address card */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-white/95 backdrop-blur-md rounded-xl p-5 shadow-luxury border border-gold-copper/15">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-petrol-deep text-gold-soft flex-shrink-0">
                  <MapPin className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base font-medium text-charcoal-petrol">
                    Luxury Odonto
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                    {site.address.street}<br />
                    {site.address.district} — {site.address.city}/{site.address.state}
                  </p>
                  <p className="mt-1 text-xs text-gold-copper font-mono">CEP {site.address.cep}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-petrol-deep text-white text-xs font-medium px-3 py-2 rounded-full hover:bg-petrol-darker transition-colors"
                >
                  Google Maps
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={wazeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 border border-gold-copper/30 text-petrol-deep text-xs font-medium px-3 py-2 rounded-full hover:border-gold-luxury hover:bg-cream transition-colors"
                >
                  Waze
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-luxury border border-gold-copper/10">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-gold-luxury" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-medium text-charcoal-petrol">
                  Horários de atendimento
                </h3>
              </div>
              <ul className="space-y-2">
                {site.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between text-sm py-2 border-b border-gold-copper/10 last:border-0"
                  >
                    <span className="text-ink-soft">{h.day}</span>
                    <span className="font-medium text-charcoal-petrol font-mono">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Parking */}
            <div className="bg-petrol-gradient noise-texture rounded-2xl p-6 text-white shadow-luxury">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gold-luxury/15 text-gold-soft flex-shrink-0">
                  <Car className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-base font-medium">
                    {site.parking.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70 leading-relaxed">
                    {site.parking.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick contacts */}
            <div className="bg-white rounded-2xl p-6 shadow-luxury border border-gold-copper/10">
              <h3 className="font-display text-lg font-medium text-charcoal-petrol mb-4">
                Contato direto
              </h3>
              <div className="space-y-2">
                <a
                  href={site.contact.phoneHref}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-cream transition-colors group"
                >
                  <Phone className="w-4 h-4 text-petrol-deep" strokeWidth={1.5} />
                  <div className="flex-1">
                    <div className="text-xs text-ink-soft">Telefone fixo</div>
                    <div className="text-sm font-medium text-charcoal-petrol font-mono">
                      {site.contact.phone}
                    </div>
                  </div>
                </a>
                <a
                  href={`https://wa.me/${site.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-cream transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 text-[#25d366]" strokeWidth={1.5} />
                  <div className="flex-1">
                    <div className="text-xs text-ink-soft">WhatsApp</div>
                    <div className="text-sm font-medium text-charcoal-petrol font-mono">
                      {site.contact.whatsapp}
                    </div>
                  </div>
                </a>
                <a
                  href={site.contact.emailHref}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-cream transition-colors group"
                >
                  <Mail className="w-4 h-4 text-petrol-deep" strokeWidth={1.5} />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-ink-soft">E-mail</div>
                    <div className="text-sm font-medium text-charcoal-petrol truncate">
                      {site.contact.email}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
