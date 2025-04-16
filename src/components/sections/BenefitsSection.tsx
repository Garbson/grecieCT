import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function BenefitsSection() {
  const benefits = [
    {
      title: "Defesa Pessoal",
      description: "Aprenda técnicas eficazes para se proteger em situações de perigo.",
    },
    {
      title: "Condicionamento Físico",
      description: "Melhore sua força, resistência, flexibilidade e coordenação.",
    },
    {
      title: "Alívio do Stress",
      description: "Libere a tensão e o stress do dia a dia através do treino.",
    },
    {
      title: "Disciplina e Foco",
      description: "Desenvolva a disciplina, a concentração e a perseverança.",
    },
    {
      title: "Confiança",
      description: "Aumente a sua autoconfiança e a sua autoestima.",
    },
    {
      title: "Comunidade",
      description: "Faça novos amigos e encontre uma comunidade de apoio.",
    },
  ];

  return (
    <section id="benefits" className="mb-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Benefícios do Jiu-Jitsu</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <Card 
            key={index} 
            className={cn(
              "relative overflow-hidden border-none",
              "before:absolute before:inset-0 before:z-0",
              "before:bg-gradient-to-r before:from-red-800/80 before:via-red-600/80 before:to-red-800/80",
              "before:bg-[length:200%_100%] before:animate-gradientFlow"
            )}
          >
            <CardHeader className="relative z-10 text-white">
              <CardTitle>{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 text-white">
              <p className="text-white/80">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}