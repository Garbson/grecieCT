import { Button } from "@/components/ui/button";

export function BlogSection() {
  const blogPosts = [
    {
      title: "Os 5 Princípios Fundamentais do Jiu-Jitsu Brasileiro",
      excerpt: "Descubra os princípios básicos que sustentam toda a prática do Jiu-Jitsu e como aplicá-los em sua jornada.",
      date: "10 de abril, 2025",
      category: "Técnica",
      image: "/blog/fundamentos.jpg"
    },
    {
      title: "Como o Jiu-Jitsu Pode Transformar a Vida de seu Filho",
      excerpt: "Saiba como o Jiu-Jitsu ajuda no desenvolvimento da disciplina, concentração e respeito nas crianças.",
      date: "2 de abril, 2025",
      category: "Kids",
      image: "/blog/kids.jpg"
    },
    {
      title: "Nutrição para Lutadores: O Que Comer Antes e Depois do Treino",
      excerpt: "Guia completo de alimentação para maximizar seu desempenho nos treinos e acelerar a recuperação muscular.",
      date: "28 de março, 2025",
      category: "Saúde",
      image: "/blog/nutricao.jpg"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Dicas e Conhecimento</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="border border-border rounded-lg overflow-hidden bg-card transition-transform hover:scale-[1.02]">
            <div className="h-48 bg-red-900/40 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/60 text-sm">Imagem {index + 1}</span>
              </div>
              <div className="absolute top-4 left-4 bg-red-700 text-white text-xs py-1 px-2 rounded">
                {post.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{post.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{post.date}</p>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <Button variant="outline" className="w-full">Ler Artigo</Button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button>Ver Todos os Artigos</Button>
      </div>
    </section>
  );
}