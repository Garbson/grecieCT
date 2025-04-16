import { Button } from "@/components/ui/button";

export function LocationSection() {
  return (
    <section id="location" className="mb-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Onde Nos Encontrar</h2>
      <div className="relative overflow-hidden rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.9865544899364!2d-48.65391221497962!3d-27.022701583994534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b5cdf7af0909%3A0x35f4d9168d6aa7a3!2sR.%20Jos%C3%A9%20R.%20da%20Cunha%2C%20128%20-%20Centro%2C%20Cambori%C3%BA%20-%20SC%2C%2088340-308!5e0!3m2!1spt-BR!2sbr!4v1713371235918!5m2!1spt-BR!2sbr"
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
        R. José R. da Cunha, 128 - Centro, Camboriú - SC, 88340-308
      </p>
      <div className="flex justify-center mt-4">
        <Button className="bg-red-800" variant="outline" size="lg">
          <a href="https://www.google.com/maps/search/?api=1&query=-27.0227015,-48.6490413" target="_blank" rel="noopener noreferrer">
            Abrir no Google Maps
          </a>
        </Button>
      </div>
    </section>
  );
}