import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="hero" className="text-center mb-16">
      <h1 className="text-5xl font-bold mb-6">Domine a Arte do Jiu-Jitsu</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Junte-se à nossa família e trilhe o caminho da disciplina, respeito e vitória.
      </p>
      <div className="flex justify-center gap-4">
        <Button size="lg">Matricule-se Agora</Button>
        <Button variant="outline" size="lg">Saiba Mais</Button>
      </div>
    </section>
  );
}