import { Button } from "@/components/ui/button";

export function TestimonialVideoSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Depoimentos dos Nossos Alunos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Vídeo 1 */}
        <div className="rounded-lg overflow-hidden">
          <div className="aspect-video bg-red-900 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                </svg>
              </div>
              <h3 className="text-white font-bold">Carlos Silva</h3>
              <p className="text-white/80">Faixa Azul - 2 anos de treino</p>
            </div>
          </div>
          <div className="bg-secondary p-4">
            <p className="italic text-muted-foreground">"O Jiu-Jitsu mudou completamente minha vida. Perdi 15kg e ganhei muito mais confiança no dia a dia."</p>
          </div>
        </div>

        {/* Vídeo 2 */}
        <div className="rounded-lg overflow-hidden">
          <div className="aspect-video bg-red-900 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                </svg>
              </div>
              <h3 className="text-white font-bold">Mariana Costa</h3>
              <p className="text-white/80">Faixa Roxa - 4 anos de treino</p>
            </div>
          </div>
          <div className="bg-secondary p-4">
            <p className="italic text-muted-foreground">"Comecei para aprender defesa pessoal, mas descobri uma nova paixão. Agora sou campeã estadual!"</p>
          </div>
        </div>

        {/* Vídeo 3 */}
        <div className="rounded-lg overflow-hidden">
          <div className="aspect-video bg-red-900 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                </svg>
              </div>
              <h3 className="text-white font-bold">Família Oliveira</h3>
              <p className="text-white/80">Pai e filho - 1 ano de treino</p>
            </div>
          </div>
          <div className="bg-secondary p-4">
            <p className="italic text-muted-foreground">"Treinar juntos fortaleceu nosso relacionamento. Meu filho está mais disciplinado na escola."</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <Button>Ver Mais Depoimentos</Button>
      </div>
    </section>
  );
}