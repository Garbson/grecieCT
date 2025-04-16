import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function QuotesSection() {
  const quotes = [
    {
      title: "Sem dor, sem ganho.",
      quote: "O esforço de hoje é a vitória de amanhã."
    },
    {
      title: "Respeito é a base.",
      quote: "A vitória é consequência."
    },
    {
      title: "Mente sã, corpo são.",
      quote: "A disciplina no tatame reflete na vida."
    },
    {
      title: "A persistência conquista.",
      quote: "Nunca desista, a faixa preta é só o começo."
    },
    {
      title: "A técnica aprimora.",
      quote: "O treino constante te leva à perfeição."
    },
    {
      title: "Humildade acima de tudo.",
      quote: "Aprenda com todos, ensine com o exemplo."
    }
  ];

  return (
    <section>
      <h2 className="text-3xl font-semibold text-center mb-8">Inspiração</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {quotes.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground italic">
                {item.quote}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}