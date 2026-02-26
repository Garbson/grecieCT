export function HistorySection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Nossa História
      </h2>

      {/* Foto do Mestre + Texto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-top mb-12">
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-[400px] mx-auto">
            <img
              src="/images/mestre/mestreAlemao.png"
              alt="Mestre Alemão"
              className="w-full h-[340px] md:h-[520px] object-cover rounded-2xl shadow-lg border border-border"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl p-4">
              <p className="text-white font-bold text-lg">Mestre Alemão</p>
              <p className="text-gray-300 text-sm">Fundador &amp; Professor</p>
            </div>
          </div>
        </div>

        <div className="text-base md:text-lg text-muted-foreground space-y-4">
          <p>
            O Complexo do Alemão é liderado pelo Mestre Allon Rohde, conhecido
            no mundo do Jiu-Jitsu como "O Alemão" — o maior medalhista de
            Rondônia na modalidade. Uma trajetória construída com dedicação,
            suor e inúmeros títulos nos principais campeonatos nacionais e
            internacionais.
          </p>
          <p>
            Faixa-preta com histórico de conquistas em campeonatos como o
            Europeu da IBJJF em Lisboa, o Campeonato Brasileiro e o
            Pan-Americano, Allon Rohde representa Rondônia com orgulho nas
            competições ao redor do mundo, sendo apoiado pelo programa
            governamental Pró-Atleta.
          </p>
          <p>
            Nossa filosofia de treinamento vai além do tatame. Acreditamos que o
            Jiu-Jitsu molda o caráter, fortalece a mente e prepara nossos alunos
            para os desafios da vida.
          </p>
          <p>
            O que nos diferencia é o ambiente familiar e acolhedor, onde cada
            aluno é valorizado e incentivado a superar seus limites. Aqui, não
            formamos apenas lutadores, formamos campeões na vida.
          </p>
          <p>
            Com uma trajetória marcada por medalhas de ouro, prata e bronze nos
            maiores eventos do Jiu-Jitsu mundial, o Mestre Allon Rohde construiu
            um método de ensino que une técnica apurada, disciplina mental e
            respeito mútuo — pilares que guiam cada aula no Complexo do Alemão.
          </p>
          <p>
            Hoje, atendemos alunos de todas as idades, desde crianças dando os
            primeiros passos no Jiu-Jitsu até adultos que buscam
            condicionamento, defesa pessoal ou simplesmente um lugar para
            crescer como pessoa. Cada aluno que entra aqui faz parte da nossa
            família.
          </p>
        </div>
      </div>
    </section>
  );
}
