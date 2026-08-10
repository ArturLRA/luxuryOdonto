"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, User, Mail, Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import { site, whatsappLinks } from "@/lib/site-data";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Vim pelo site.\n\nNome: ${form.name}\nTelefone: ${form.phone}\nE-mail: ${form.email}\nInteresse: ${form.service}\nMensagem: ${form.message}`,
    );
    window.open(`https://wa.me/${site.contact.whatsappNumber}?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <section id="contato" className="scroll-anchor relative bg-petrol-radial noise-texture py-24 lg:py-32 overflow-hidden">
      {/* Decorative gold orb */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[36rem] h-[36rem] rounded-full bg-gold-luxury/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[36rem] h-[36rem] rounded-full bg-petrol-light/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: invitation */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold-luxury" />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold-soft">
                Agende sua avaliação
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight text-balance">
              O primeiro passo do seu{" "}
              <span className="italic text-gold-shimmer">novo sorriso</span>.
            </h2>

            <p className="mt-6 text-white/75 text-lg leading-relaxed">
              Preencha o formulário ao lado e nossa recepção entrará em contato via WhatsApp
              para confirmar o melhor horário. Você também pode falar diretamente conosco:
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={whatsappLinks.geral}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-gold-luxury/30 transition-all group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25d366]/15 text-[#25d366]">
                  <MessageSquare className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-white/60">WhatsApp — resposta rápida</div>
                  <div className="font-medium text-white font-mono">{site.contact.whatsapp}</div>
                </div>
                <Send className="w-4 h-4 text-gold-soft group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={site.contact.phoneHref}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-gold-luxury/30 transition-all"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-petrol-light/30 text-gold-soft">
                  <Phone className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-white/60">Telefone fixo</div>
                  <div className="font-medium text-white font-mono">{site.contact.phone}</div>
                </div>
              </a>

              <a
                href={site.contact.emailHref}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-gold-luxury/30 transition-all"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-petrol-light/30 text-gold-soft">
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-white/60">E-mail</div>
                  <div className="font-medium text-white truncate">{site.contact.email}</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl p-7 lg:p-9 shadow-luxury-lg"
          >
            <h3 className="font-display text-2xl font-medium text-charcoal-petrol mb-1">
              Solicite seu horário
            </h3>
            <p className="text-sm text-ink-soft mb-6">
              Resposta em até 1 dia útil. Sem compromisso.
            </p>

            <form onSubmit={onSubmit} className="space-y-4">
              <Field
                label="Nome completo"
                icon={<User className="w-4 h-4" />}
                required
              >
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Como podemos te chamar?"
                  className="w-full bg-transparent outline-none text-sm text-charcoal-petrol placeholder:text-ink-soft/50"
                />
              </Field>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="WhatsApp"
                  icon={<Phone className="w-4 h-4" />}
                  required
                >
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="(48) 90000-0000"
                    className="w-full bg-transparent outline-none text-sm text-charcoal-petrol placeholder:text-ink-soft/50"
                  />
                </Field>
                <Field
                  label="E-mail"
                  icon={<Mail className="w-4 h-4" />}
                >
                  <input
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="voce@email.com"
                    className="w-full bg-transparent outline-none text-sm text-charcoal-petrol placeholder:text-ink-soft/50"
                  />
                </Field>
              </div>

              <div>
                <label className="block text-xs font-medium text-ink-soft mb-1.5 uppercase tracking-wider">
                  Tratamento de interesse
                </label>
                <select
                  value={form.service}
                  onChange={update("service")}
                  className="w-full bg-cream border border-gold-copper/20 rounded-lg px-4 py-3 text-sm text-charcoal-petrol outline-none focus:border-gold-luxury transition-colors"
                >
                  <option value="">Selecione uma opção...</option>
                  <option value="Avaliação geral">Avaliação geral</option>
                  <option value="Lentes de contato (Natural Lux®)">Lentes de contato (Natural Lux®)</option>
                  <option value="Implantes">Implantes</option>
                  <option value="Invisalign">Invisalign</option>
                  <option value="Clareamento">Clareamento</option>
                  <option value="Harmonização orofacial">Harmonização orofacial</option>
                  <option value="Odontopediatria">Odontopediatria (crianças)</option>
                  <option value="Outro / não sei ainda">Outro / não sei ainda</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-ink-soft mb-1.5 uppercase tracking-wider">
                  Mensagem (opcional)
                </label>
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  rows={3}
                  placeholder="Conte-nos o que você procura..."
                  className="w-full bg-cream border border-gold-copper/20 rounded-lg px-4 py-3 text-sm text-charcoal-petrol outline-none focus:border-gold-luxury transition-colors resize-none placeholder:text-ink-soft/50"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="w-full inline-flex items-center justify-center gap-2 bg-gold-gradient text-petrol-deep font-semibold px-6 py-4 rounded-full shadow-gold-glow hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:hover:scale-100"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Mensagem enviada!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar via WhatsApp
                  </>
                )}
              </button>

              <p className="text-xs text-ink-soft/70 text-center pt-2">
                Ao enviar, abriremos o WhatsApp com sua mensagem preenchida.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  icon,
  required,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-ink-soft mb-1.5 uppercase tracking-wider">
        {label} {required && <span className="text-gold-luxury">*</span>}
      </label>
      <div className="flex items-center gap-3 bg-cream border border-gold-copper/20 rounded-lg px-4 py-3 focus-within:border-gold-luxury transition-colors">
        <span className="text-gold-copper flex-shrink-0">{icon}</span>
        {children}
      </div>
    </div>
  );
}
