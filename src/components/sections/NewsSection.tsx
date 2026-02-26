import { ExternalLink, Newspaper } from "lucide-react";

interface NewsArticle {
  source: string;
  title: string;
  description: string;
  url: string;
  date: string;
  highlight?: boolean;
}

const articles: NewsArticle[] = [
  {
    source: "JH Notícias",
    title: "Maior medalhista de RO, Allon Rohde, o Alemão, brilha no Europeu de Jiu-Jitsu em Lisboa e conquista duas medalhas para Rondônia",
    description:
      "Allon Rohde, o 'Alemão', conquista medalha de prata na categoria absoluta e bronze na faixa-preta pesadíssima no Campeonato Europeu de Jiu-Jítsu em Lisboa, Portugal. O atleta é considerado o maior medalhista de Rondônia na modalidade.",
    url: "https://jhnoticias.com.br/esporte/maior-medalhista-de-ro-allon-rohde-o-alemao-brilha-no-europeu-de-jiu-jitsu-em-lisboa-e-conquista-duas-medalhas-para-rondonia/",
    date: "Janeiro 2025",
    highlight: true,
  },
  {
    source: "O Estado de Rondônia",
    title: "Atletas de Rondônia se destacam no Campeonato Europeu de Jiu-Jitsu 2025 com incentivo do governo do estado",
    description:
      "Com apoio do programa Pró-Atleta do governo de Rondônia, Allon Rohde e outros atletas rondonienses brilharam no Europeu de Jiu-Jitsu 2025 em Lisboa, representando o estado com orgulho no cenário internacional.",
    url: "https://oestadoderondonia.com.br/atletas-de-rondonia-se-destacam-no-campeonato-europeu-de-jiu-jitsu-2025-com-incentivo-do-governo-do-estado/",
    date: "Janeiro 2025",
  },
  {
    source: "Governo do Estado de Rondônia",
    title: "Atletas de Rondônia se destacam no Campeonato Europeu de Jiu-Jitsu 2025 com incentivo do governo do estado",
    description:
      "O governo do estado destaca a participação dos atletas rondonienses, incluindo Allon Rohde, no Campeonato Europeu de Jiu-Jitsu 2025, realizado em Portugal, com suporte do programa Pró-Atleta do governador Marcos Rocha.",
    url: "https://rondonia.ro.gov.br/atletas-de-rondonia-se-destacam-no-campeonato-europeu-de-jiu-jitsu-2025-com-incentivo-do-governo-do-estado/",
    date: "Janeiro 2025",
  },
  {
    source: "Gente de Opinião",
    title: "Atletas de Rondônia se destacam no Campeonato Europeu de Jiu-Jitsu 2025, em Portugal",
    description:
      "Cobertura completa da atuação dos atletas rondonienses no Europeu de Jiu-Jitsu 2025. Allon Rohde, o Alemão, garantiu vice-campeonato no absoluto Master 5 e terceiro lugar na categoria pesadíssima, reforçando seu histórico de conquistas internacionais.",
    url: "https://www.gentedeopiniao.com.br/esporte/atletas-de-rondonia-se-destacam-no-campeonato-europeu-de-jiu-jitsu-2025-com-incentivo-do-governo-do-estado",
    date: "Janeiro 2025",
  },
  {
    source: "Folha do Sul Online",
    title: "Atletas de Rondônia se destacam no Campeonato Europeu de Jiu-Jitsu 2025, em Portugal",
    description:
      "Destaque para os atletas de Rondônia no cenário internacional do Jiu-Jitsu. Allon Rohde, o Alemão, mais uma vez colocou Rondônia no mapa do Jiu-Jitsu mundial ao conquistar duas medalhas no Europeu da IBJJF em Lisboa.",
    url: "https://www.folhadosulonline.com.br/noticias/detalhe/2025/atletas-rondonia-se-destacam-no-campeonato-europeu-jiujitsu-2025-em-portugal",
    date: "Janeiro 2025",
  },
  {
    source: "FloGrappling",
    title: "Roberto Godoi vs Allon Rohde — 2025 European Jiu-Jitsu IBJJF Championship",
    description:
      "Cobertura da final do Campeonato Europeu de Jiu-Jitsu IBJJF 2025, com Allon Rohde disputando o título absoluto na categoria Master 5. Um dos combates mais aguardados do evento, que garantiu ao Alemão a medalha de prata.",
    url: "https://www.flograppling.com/video/13553476-roberto-godoi-vs-allon-rohde-2025-european-jiu-jitsu-ibjjf-championship",
    date: "Janeiro 2025",
  },
  {
    source: "FloGrappling",
    title: "Allon Rohde vs Sebastien Astier — 2018 European Jiu-Jitsu IBJJF Championship",
    description:
      "Combate histórico do Mestre Allon Rohde no Campeonato Europeu de Jiu-Jitsu IBJJF 2018, demonstrando sua longa trajetória de participações internacionais e consolidando seu nome entre os grandes competidores do estado de Rondônia.",
    url: "https://www.flograppling.com/video/6091240-allon-rohde-vs-sebastien-astier-2018-european-jiu-jitsu-ibjjf-championship",
    date: "2018",
  },
];

export function NewsSection() {
  return (
    <section id="noticias" className="mb-16">
      <div className="flex items-center justify-center gap-3 mb-10">
        <Newspaper className="w-8 h-8 text-red-600" />
        <h2 className="text-3xl font-semibold text-center">
          Mestre Allon Rohde na Mídia
        </h2>
      </div>

      <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto text-lg">
        Acompanhe as reportagens e coberturas sobre o Mestre Allon Rohde, o
        "Alemão", maior medalhista de Rondônia no Jiu-Jitsu e orgulho do nosso
        estado.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-lg hover:border-red-600/60 transition-all duration-300 ${
              article.highlight ? "md:col-span-2 lg:col-span-1 border-red-600/40 bg-red-950/10" : ""
            }`}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-500 bg-red-500/10 border border-red-500/20 rounded-full px-3 py-1">
                  <Newspaper className="w-3 h-3" />
                  {article.source}
                </span>
                {article.highlight && (
                  <span className="text-xs font-bold text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-2 py-1">
                    Destaque
                  </span>
                )}
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-red-500 transition-colors flex-shrink-0" />
            </div>

            {/* Title */}
            <h3 className="font-bold text-foreground text-sm leading-snug mb-3 group-hover:text-red-400 transition-colors line-clamp-3">
              {article.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-xs leading-relaxed flex-1 line-clamp-4">
              {article.description}
            </p>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{article.date}</span>
              <span className="text-xs font-medium text-red-500 group-hover:underline">
                Ler reportagem →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
