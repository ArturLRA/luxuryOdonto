"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { Logo } from "./logo";
import { navStructure, site, whatsappLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import * as React from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
            ? "backdrop-blur-md shadow-luxury border-b border-gold-copper/15"
            : "bg-transparent",
        )}
        style={{
          backgroundColor: scrolled ? "rgba(30, 45, 66, 0.95)" : "rgba(30, 45, 66, 0)",
        }}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
            {/* Logo */}
            <a
              href="#inicio"
              className="flex-shrink-0 flex items-center"
              aria-label="Luxury Odonto — Início"
            >
              <Logo variant="light" className="h-9 lg:h-11 w-auto" />
            </a>

            {/* Desktop nav with dropdowns */}
            <div className="hidden lg:flex items-center gap-1">
              {navStructure.primary.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                >
                  <button
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white/85 hover:text-gold-soft transition-colors"
                    aria-expanded={openDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform",
                        openDropdown === item.label && "rotate-180",
                      )}
                    />
                  </button>

                  {/* Dropdown panel */}
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-3 min-w-[20rem]">
                      <div className="bg-white rounded-xl shadow-luxury-lg border border-gold-copper/15 py-2 overflow-hidden">
                        {item.items.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-5 py-3 hover:bg-cream transition-colors group"
                          >
                            <div className="font-display text-sm font-medium text-charcoal-petrol group-hover:text-petrol-deep transition-colors">
                              {sub.label}
                            </div>
                            <div className="text-xs text-ink-soft mt-0.5">
                              {sub.description}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
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

            {/* Mobile button */}
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
          <div className="flex items-center justify-between p-5 border-b border-gold-copper/15">
            <Logo variant="light" className="h-9 w-auto" />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-white/80 hover:text-gold-soft transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-5">
            {navStructure.primary.map((item) => (
              <MobileDropdown key={item.label} item={item} onNavigate={() => setMobileOpen(false)} />
            ))}
          </div>

          <div className="p-5 border-t border-gold-copper/15">
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
            <a
              href={site.contact.phoneHref}
              className="mt-3 flex items-center justify-center gap-2 text-sm text-white/60"
            >
              {site.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

/** Mobile accordion-style dropdown for nav groups */
function MobileDropdown({
  item,
  onNavigate,
}: {
  item: { label: string; items: { label: string; href: string; description: string }[] };
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setExpanded((e) => !e)}
        className="flex items-center justify-between w-full py-3.5 text-white"
        aria-expanded={expanded}
      >
        <span className="font-display text-lg">{item.label}</span>
        <ChevronDown
          className={cn("w-5 h-5 text-gold-soft transition-transform", expanded && "rotate-180")}
        />
      </button>
      {expanded && (
        <div className="pb-3 space-y-1">
          {item.items.map((sub) => (
            <a
              key={sub.label}
              href={sub.href}
              onClick={onNavigate}
              className="block py-2.5 pl-3 border-l-2 border-gold-copper/30 text-white/75 hover:text-gold-soft hover:border-gold-soft transition-colors"
            >
              <div className="font-medium text-sm">{sub.label}</div>
              <div className="text-xs text-white/45 mt-0.5">{sub.description}</div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
