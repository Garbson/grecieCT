"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={cn(
      "sticky top-0 z-50 shadow-md",
      "relative overflow-hidden",
      "before:absolute before:inset-0 before:z-0",
      "before:bg-gradient-to-r before:from-red-800/90 before:via-red-600/90 before:to-red-800/90",
      "before:bg-[length:200%_100%] before:animate-gradientFlow"
    )}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">GRECIE CT</span>
          </Link>

          {/* Menu para desktop */}
          <div className="hidden md:flex space-x-6">
            <Link href="#hero" className="font-medium text-white/80 hover:text-white transition-colors">
              Início
            </Link>
            <Link href="#benefits" className="font-medium text-white/80 hover:text-white transition-colors">
              Benefícios
            </Link>
            <Link href="#schedule" className="font-medium text-white/80 hover:text-white transition-colors">
              Horários
            </Link>
            <Link href="#pricing" className="font-medium text-white/80 hover:text-white transition-colors">
              Planos
            </Link>
            <Link href="#faq" className="font-medium text-white/80 hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="#location" className="font-medium text-white/80 hover:text-white transition-colors">
              Localização
            </Link>
          </div>

          {/* Botão CTA */}
          <div className="hidden md:block">
            <Button className="bg-white hover:bg-gray-100 text-red-800 font-semibold">
              Agende uma Aula
            </Button>
          </div>

          {/* Menu para mobile */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile expandido */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 shadow-md relative z-10">
          <div className="flex flex-col space-y-4">
            <Link href="#hero" onClick={toggleMenu} className="font-medium text-white/80 hover:text-white transition-colors">
              Início
            </Link>
            <Link href="#benefits" onClick={toggleMenu} className="font-medium text-white/80 hover:text-white transition-colors">
              Benefícios
            </Link>
            <Link href="#schedule" onClick={toggleMenu} className="font-medium text-white/80 hover:text-white transition-colors">
              Horários
            </Link>
            <Link href="#pricing" onClick={toggleMenu} className="font-medium text-white/80 hover:text-white transition-colors">
              Planos
            </Link>
            <Link href="#faq" onClick={toggleMenu} className="font-medium text-white/80 hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="#location" onClick={toggleMenu} className="font-medium text-white/80 hover:text-white transition-colors">
              Localização
            </Link>
            <Button className="bg-white hover:bg-gray-100 text-red-800 font-semibold w-full">
              Agende uma Aula
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}