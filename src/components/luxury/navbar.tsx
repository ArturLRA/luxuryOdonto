"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Logo } from "./logo";
import { navItems, site, whatsappLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "backdrop-blur-md shadow-luxury border-b border-gold-copper/20"
            : "bg-transparent",
        )}
        style={{ backgroundColor: scrolled ? "rgba(8, 69, 80, 0.95)" : "transparent" }}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#inicio" className="flex-shrink-0" aria-label="Luxury Odonto — Início">
              <Logo variant="light" showTagline />
            </a>

            <div className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-underline font-sans text-sm text-white/85 hover:text-gold-soft transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href={site.contact.phoneHref}
                className="flex items-center gap-2 px-3 py-2 text-sm text-white/85 hover:text-gold-soft transition-colors"
                aria-label={`Ligar para ${site.contact.phone}`}
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">{site.contact.phone}</span>
              </a>
              <a
                href={whatsappLinks.geral}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-gold-gradient text-petrol-deep font-semibold px-5 py-2.5 rounded-full text-sm shadow-gold-glow hover:scale-[1.03] transition-transform"
              >
                <MessageCircle className="w-4 h-4" />
                Agende sua avaliação
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-white"
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 bg-petrol-darker/95 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 bottom-0 w-full max-w-sm bg-petrol-deep shadow-luxury-lg flex flex-col transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between p-6 border-b border-gold-copper/20">
            <Logo variant="light" showTagline />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-white/80 hover:text-gold-soft transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-lg font-display text-white border-b border-white/5 hover:text-gold-soft transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="p-6 space-y-3 border-t border-gold-copper/20">
            <a
              href={site.contact.phoneHref}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full border border-white/20 text-white hover:border-gold-soft transition-colors"
            >
              <Phone className="w-4 h-4" />
              {site.contact.phone}
            </a>
            <a
              href={whatsappLinks.geral}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-gold-gradient text-petrol-deep font-semibold shadow-gold-glow"
            >
              <MessageCircle className="w-4 h-4" />
              Agende sua avaliação
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
