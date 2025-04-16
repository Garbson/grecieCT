import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function LocationSection() {
  return (
    <section id="location" className="mb-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Onde Nos Encontrar</h2>
      <div className="relative overflow-hidden rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7394752239213!2d-46.65879782488774!3d-23.540068162509973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0e9e3b%3A0x5ca24ca8bca5b50d!2sAv.%20Paulista%2C%201578%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-200!5e0!3m2!1spt-BR!2sbr!4v1718917779434!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full aspect-video"
        ></iframe>
      </div>
      <p className="text-center mt-4 text-muted-foreground">
        Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200
      </p>
      <div className="flex justify-center mt-4">
        <Button variant="outline" size="lg">
          <a href="https://www.google.com/maps/search/?api=1&query=-23.540068162509973,-46.65879782488774" target="_blank" rel="noopener noreferrer">
            Abrir no Google Maps <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </Button>
      </div>
    </section>
  );
}