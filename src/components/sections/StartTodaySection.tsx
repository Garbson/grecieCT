const WHATSAPP_EXPERIMENTAL =
  "https://wa.me/5569993030072?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita.";

const WHATSAPP_INSTRUTOR =
  "https://wa.me/5569993030072?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20instrutor.";

export function StartTodaySection() {
  return (
    <section className="mb-16 p-4 py-16 sm:px-8 md:p-16 bg-red-900 relative overflow-hidden rounded-lg">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-white/20"></div>
        <div className="absolute -left-24 -bottom-24 w-80 h-80 rounded-full bg-white/20"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Comece Sua Jornada Hoje</h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
          Agende sua primeira aula experimental gratuita e descubra por que o Jiu-Jitsu
          pode transformar sua vida.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_EXPERIMENTAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-red-900 hover:bg-white/90 font-semibold text-lg px-8 py-3 rounded-md transition-all hover:scale-105"
          >
            Aula Experimental Grátis
          </a>
          <a
            href={WHATSAPP_INSTRUTOR}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-3 rounded-md transition-all hover:scale-105"
          >
            Fale com um Instrutor
          </a>
        </div>
        <div className="mt-8 hidden md:flex md:flex-row md:items-center md:justify-center md:gap-6 mx-auto md:max-w-2xl">
          <div className="flex items-center justify-start">
            <svg className="w-6 h-6 text-white mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-white">Sem Compromisso</span>
          </div>
          <div className="flex items-center justify-start">
            <svg className="w-6 h-6 text-white mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-white">Kimono Emprestado</span>
          </div>
          <div className="flex items-center justify-start">
            <svg className="w-6 h-6 text-white mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-white">Instrutores Qualificados</span>
          </div>
        </div>
      </div>
    </section>
  );
}
