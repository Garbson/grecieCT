export function HistorySection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Nossa História
      </h2>

      {/* Foto do Mestre + Texto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-top mb-12">
        <div className="flex flex-col items-center">
          <div className="relative w-[400px] mx-auto">
            <img
              src="/images/mestre/mestreAlemao.png"
              alt="Mestre Alemão"
              className="w-full h-[520px] object-cover rounded-2xl shadow-lg border border-border"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl p-4">
              <p className="text-white font-bold text-lg">Mestre Alemão</p>
              <p className="text-gray-300 text-sm">Fundador &amp; Professor</p>
            </div>
          </div>
        </div>

        <div className="text-lg text-muted-foreground space-y-4">
          <p>
            Fundado em 2025 pelo Mestre Diego Santos, o Complexo do Alemão
            nasceu do desejo de criar um espaço onde a disciplina e o respeito
            fossem tão importantes quanto a técnica.
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
            Com anos de experiência no tatame e uma trajetória marcada por
            conquistas dentro e fora das competições, o Mestre Alemão construiu
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
