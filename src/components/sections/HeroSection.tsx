"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, CreditCard, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/5569993030072?text=Ol%C3%A1!%20Gostaria%20de%20me%20matricular%20no%20Complexo%20do%20Alem%C3%A3o.";

export function HeroSection() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <section id="hero" className="text-center mb-16">
      <h1 className="text-5xl font-bold mb-6">Domine a Arte do Jiu-Jitsu</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Junte-se à nossa família e trilhe o caminho da disciplina, respeito e vitória.
      </p>
      <div className="flex flex-col items-center gap-4">
        <div className="flex justify-center gap-4">
          <Button size="lg" onClick={() => setShowOptions((v) => !v)}>
            Matricule-se Agora
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#pricing">Saiba Mais</a>
          </Button>
        </div>

        {/* Opções de matrícula */}
        {showOptions && (
          <div className="flex flex-col sm:flex-row items-center gap-3 animate-fade-in bg-card border border-border rounded-xl p-4 shadow-lg">
            <p className="text-sm text-muted-foreground font-medium">Como prefere continuar?</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              Via WhatsApp
            </a>
            <a
              href="#pricing"
              onClick={() => setShowOptions(false)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:scale-105"
            >
              <CreditCard className="w-4 h-4" />
              Pagar Online
            </a>
            <button
              onClick={() => setShowOptions(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
