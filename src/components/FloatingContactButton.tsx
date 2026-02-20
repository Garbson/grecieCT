"use client";

import { useState } from "react";
import { MapPin, MessageCircle, X, Phone } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5569993030072?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas.";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=R.+Uruguai,+2995+-+Embratel,+Porto+Velho+-+RO,+76820-884";

export function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Opções expandidas */}
      {open && (
        <div className="flex flex-col items-end gap-2 animate-fade-in">
          {/* WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-4 py-2.5 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>

          {/* Google Maps */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm px-4 py-2.5 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
          >
            <MapPin className="w-4 h-4" />
            Como Chegar
          </a>
        </div>
      )}

      {/* Botão principal */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-2 text-white font-bold px-5 py-3.5 rounded-full shadow-xl transition-all duration-300 hover:scale-105 ${
          open
            ? "bg-zinc-700 hover:bg-zinc-600"
            : "bg-red-600 hover:bg-red-500 animate-pulse-slow"
        }`}
        aria-label="Fale Conosco"
      >
        {open ? (
          <>
            <X className="w-5 h-5" />
            Fechar
          </>
        ) : (
          <>
            <Phone className="w-5 h-5" />
            Fale Conosco
          </>
        )}
      </button>
    </div>
  );
}
