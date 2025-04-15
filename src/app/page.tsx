"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, ExternalLink } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    toast({
      title: "Bem-vindo!",
      description: "Explore nossos planos e junte-se à família Clube da Luta.",
    });
  }, []);

  return (
    <div className="container mx-auto py-12">
      {/* Hero Section with CTAs */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Domine a Arte do Jiu-Jitsu</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Junte-se à nossa família e trilhe o caminho da disciplina, respeito e vitória.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">Matricule-se Agora</Button>
          <Button variant="outline" size="lg">Saiba Mais</Button>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Nossos Planos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Monthly Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Mensal</CardTitle>
              <CardDescription>Flexibilidade total</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-between h-full">
              <div>
                <div className="text-2xl font-bold">R$ 150,00</div>
                <ul className="list-disc pl-5 mt-4 text-muted-foreground">
                  <li>Acesso ilimitado às aulas</li>
                  <li>Treino livre</li>
                </ul>
              </div>
              <Button className="mt-4 w-full">Escolher Mensal</Button>
            </CardContent>
          </Card>

          {/* Quarterly Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Trimestral</CardTitle>
              <CardDescription>Economia e compromisso</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-between h-full">
              <div>
                <div className="text-2xl font-bold">R$ 400,00</div>
                <ul className="list-disc pl-5 mt-4 text-muted-foreground">
                  <li>Todos os benefícios do plano mensal</li>
                  <li>Desconto especial</li>
                </ul>
              </div>
              <Button className="mt-4 w-full">Escolher Trimestral</Button>
            </CardContent>
          </Card>

          {/* Annual Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Anual</CardTitle>
              <CardDescription>Máximo desempenho e economia</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-between h-full">
              <div>
                <div className="text-2xl font-bold">R$ 1.200,00</div>
                <ul className="list-disc pl-5 mt-4 text-muted-foreground">
                  <li>Todos os benefícios dos planos anteriores</li>
                  <li>Acesso a eventos exclusivos</li>
                </ul>
              </div>
              <Button className="mt-4 w-full">Escolher Anual</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Training Center Location */}
      <section className="mb-16">
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

      {/* Training Center History */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Nossa História</h2>
        <div className="text-lg text-muted-foreground">
          <p className="mb-4">
            Fundado em 2005 pelo Mestre João Silva, o CT Clube da Luta nasceu do desejo de criar um espaço
            onde a disciplina e o respeito fossem tão importantes quanto a técnica.
          </p>
          <p className="mb-4">
            Nossa filosofia de treinamento vai além do tatame. Acreditamos que o Jiu-Jitsu molda o caráter,
            fortalece a mente e prepara nossos alunos para os desafios da vida.
          </p>
          <p>
            O que nos diferencia é o ambiente familiar e acolhedor, onde cada aluno é valorizado e incentivado
            a superar seus limites. Aqui, não formamos apenas lutadores, formamos campeões na vida.
          </p>
        </div>
      </section>

      {/* Testimonials/Quotes */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8">Inspiração</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Sem dor, sem ganho.</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground italic">
                O esforço de hoje é a vitória de amanhã.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Respeito é a base.</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground italic">
                A vitória é consequência.
              </p>
            </CardContent>
          </Card>
            <Card>
            <CardHeader>
              <CardTitle>Mente sã, corpo são.</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground italic">
                A disciplina no tatame reflete na vida.
              </p>
            </CardContent>
          </Card>
             <Card>
            <CardHeader>
              <CardTitle>A persistência conquista.</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground italic">
                Nunca desista, a faixa preta é só o começo.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
