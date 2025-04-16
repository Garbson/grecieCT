import { cn } from "@/lib/utils";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={cn(
      "relative overflow-hidden",
      "before:absolute before:inset-0 before:z-0",
      "before:bg-gradient-to-r before:from-red-900 before:via-red-800 before:to-red-900",
      "before:bg-[length:200%_100%] before:animate-gradientFlow"
    )}>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Seção sobre */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4 text-white">Grecie Centro de Treinamento</h3>
            <p className="text-gray-200 mb-6 max-w-xs mx-auto">
              Academia especializada em Jiu-Jitsu, oferecendo treinamento de qualidade para todas as idades e níveis.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-red-300 transition-colors text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-red-300 transition-colors text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-red-300 transition-colors text-white">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Horários */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4 text-white">Horários</h3>
            <ul className="space-y-3 text-gray-200">
              <li className="flex justify-center">Segunda a Sexta: 6h às 22h</li>
              <li className="flex justify-center">Sábado: 9h às 18h</li>
              <li className="flex justify-center">Domingo: 9h às 14h</li>
            </ul>
          </div>

          {/* Contato */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4 text-white">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 justify-center">
                <MapPin size={20} className="shrink-0" />
                <span className="text-gray-200">Av. Paulista, 1000, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-2 justify-center">
                <Phone size={20} className="shrink-0" />
                <a href="tel:+5511999999999" className="text-gray-200 hover:text-white transition-colors">(11) 99999-9999</a>
              </li>
              <li className="flex items-center gap-2 justify-center">
                <Mail size={20} className="shrink-0" />
                <a href="mailto:contato@greciect.com.br" className="text-gray-200 hover:text-white transition-colors">contato@greciect.com.br</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-red-800/30 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-center md:text-left">© {currentYear} Grecie Centro de Treinamento - Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <p className="text-gray-300">
             Site desenvolvido por <span className="font-semibold">Garbson Souza</span>
            </p>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center justify-center md:justify-end gap-1 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-green-400">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}