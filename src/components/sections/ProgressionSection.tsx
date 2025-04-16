export function ProgressionSection() {
  const progressionSteps = [
    {
      belt: "Branca",
      title: "Iniciante",
      description: "Fundamentos básicos, posições defensivas e técnicas de sobrevivência",
      duration: "1-2 anos",
      icon: "🥋",
      color: "bg-white"
    },
    {
      belt: "Azul",
      title: "Aprendiz",
      description: "Desenvolvimento de jogo próprio, refinamento técnico e início de competições",
      duration: "2-3 anos",
      icon: "🥋",
      color: "bg-blue-600"
    },
    {
      belt: "Roxa",
      title: "Intermediário",
      description: "Aprofundamento tático, criação de estratégias e aprimoramento de habilidades",
      duration: "2-3 anos",
      icon: "🥋",
      color: "bg-purple-600"
    },
    {
      belt: "Marrom",
      title: "Avançado",
      description: "Domínio técnico elevado, fluidez nos movimentos e capacidade de ensinar",
      duration: "1-2 anos",
      icon: "🥋",
      color: "bg-amber-800"
    },
    {
      belt: "Preta",
      title: "Experiente",
      description: "Maestria técnica, filosófica e capacidade de inovação no esporte",
      duration: "Vida toda",
      icon: "🥋",
      color: "bg-black"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Sua Jornada no Jiu-Jitsu</h2>
      <div className="relative">
        {/* Linha do tempo */}
        <div className="absolute h-full w-1 bg-red-900/20 left-1/2 transform -translate-x-1/2 z-0"></div>
        
        <div className="space-y-12 relative z-10">
          {progressionSteps.map((step, index) => (
            <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              {/* Conteúdo */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <h3 className="text-xl font-bold flex items-center gap-2 justify-end">
                  {index % 2 === 0 ? (
                    <>
                      <span>Faixa {step.belt}</span>
                      <span className={`inline-block w-4 h-4 rounded-full ${step.color}`}></span>
                    </>
                  ) : (
                    <>
                      <span className={`inline-block w-4 h-4 rounded-full ${step.color}`}></span>
                      <span>Faixa {step.belt}</span>
                    </>
                  )}
                </h3>
                <p className="text-muted-foreground">{step.title}</p>
                <p className="mt-2">{step.description}</p>
                <p className="text-sm text-muted-foreground mt-1">Duração: {step.duration}</p>
              </div>
              
              {/* Círculo central */}
              <div className="w-2/12 flex justify-center">
                <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center border-4 border-background shadow-lg text-lg`}>
                  {step.belt === "Branca" ? (
                    <span className="text-black">1</span>
                  ) : step.belt === "Azul" ? (
                    <span className="text-white">2</span>
                  ) : step.belt === "Roxa" ? (
                    <span className="text-white">3</span>
                  ) : step.belt === "Marrom" ? (
                    <span className="text-white">4</span>
                  ) : (
                    <span className="text-white">5</span>
                  )}
                </div>
              </div>
              
              {/* Lado vazio para equilibrar */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}