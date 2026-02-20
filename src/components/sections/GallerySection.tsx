"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export function GallerySection() {
  const photos = [
    { src: "/images/galeria/galery1.jpeg", label: "Treino" },
    { src: "/images/galeria/galery2.jpeg", label: "Graduação" },
    { src: "/images/galeria/galery3.jpeg", label: "Treino" },
    { src: "/images/galeria/galery4.jpeg", label: "Treino" },
    { src: "/images/galeria/galery5.jpeg", label: "Treino" },
    { src: "/images/galeria/galery6.jpeg", label: "Treino" },
  ];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const next = useCallback(
    () => setCurrent((i) => (i === photos.length - 1 ? 0 : i + 1)),
    [photos.length],
  );
  const prev = () => setCurrent((i) => (i === 0 ? photos.length - 1 : i - 1));

  // Auto-play: avança a cada 4s, pausa ao hover
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  // Scroll horizontal das thumbnails sem mover a página
  useEffect(() => {
    const container = thumbsRef.current;
    if (!container) return;
    const thumb = container.children[current] as HTMLElement;
    if (!thumb) return;
    const thumbLeft = thumb.offsetLeft;
    const thumbWidth = thumb.offsetWidth;
    const containerWidth = container.offsetWidth;
    container.scrollTo({
      left: thumbLeft - containerWidth / 2 + thumbWidth / 2,
      behavior: "smooth",
    });
  }, [current]);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold text-center mb-4">
        Galeria de Treinos
      </h2>
      <p className="text-center text-muted-foreground mb-10">
        Momentos do nosso dia a dia no tatame
      </p>

      <div
        className="relative max-w-3xl mx-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Imagem principal */}
        <div className="relative overflow-hidden rounded-xl border border-border bg-black aspect-video">
          <img
            key={photos[current].src}
            src={photos[current].src}
            alt={photos[current].label}
            className="w-full h-full object-contain animate-fade-in"
          />
          {/* Label */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <span className="text-white font-semibold text-lg">
              {photos[current].label}
            </span>
          </div>

          {/* Barra de progresso */}
          {!paused && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20">
              <div
                key={current}
                className="h-full bg-white origin-left animate-progress"
              />
            </div>
          )}
        </div>

        {/* Seta esquerda */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Seta direita */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
          aria-label="Próxima foto"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Thumbnails */}
        <div
          ref={thumbsRef}
          className="flex gap-2 mt-3 overflow-x-auto pb-1 scroll-smooth scrollbar-hide"
        >
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              onClick={() => setCurrent(i)}
              className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                i === current
                  ? "border-white opacity-100 scale-105"
                  : "border-transparent opacity-50 hover:opacity-80"
              }`}
              aria-label={`Ver ${photo.label}`}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
