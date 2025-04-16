import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const faqs = [
    {
      question: "Preciso ter experiência para começar no Jiu-Jitsu?",
      answer: "Não, não é necessário ter nenhuma experiência prévia. Nossas aulas para iniciantes são projetadas para ensinar desde os fundamentos básicos, em um ambiente acolhedor e seguro."
    },
    {
      question: "Qual é a idade mínima para crianças começarem no Jiu-Jitsu?",
      answer: "Aceitamos crianças a partir de 4 anos em nossas turmas infantis. Temos programas específicos por faixa etária, com metodologia adaptada para cada idade."
    },
    {
      question: "Preciso estar em forma para começar a treinar?",
      answer: "Não, você pode começar no seu nível atual de condicionamento físico. O Jiu-Jitsu vai ajudar a melhorar sua resistência, força e flexibilidade gradualmente."
    },
    {
      question: "Preciso comprar um kimono para começar?",
      answer: "Para sua primeira aula experimental, emprestamos um kimono. Depois, recomendamos a compra de um kimono próprio, que pode ser adquirido em nossa academia."
    },
    {
      question: "O Jiu-Jitsu é seguro?",
      answer: "Sim, praticado sob supervisão adequada e com as técnicas corretas, o Jiu-Jitsu é bastante seguro. Nossos instrutores são certificados e priorizamos a segurança dos alunos."
    },
    {
      question: "Quantas vezes por semana devo treinar?",
      answer: "Para iniciantes, recomendamos de 2 a 3 vezes por semana. Conforme sua evolução, você pode aumentar a frequência de acordo com seus objetivos e disponibilidade."
    },
    {
      question: "O Jiu-Jitsu serve para defesa pessoal?",
      answer: "Sim, o Jiu-Jitsu é uma das artes marciais mais eficazes para defesa pessoal, pois ensina técnicas para neutralizar oponentes mais fortes e maiores usando alavancas e posicionamento."
    },
    {
      question: "Posso treinar com problemas de coluna ou outras lesões?",
      answer: "Em muitos casos sim, mas recomendamos consultar seu médico antes. Nossos instrutores podem adaptar os treinos às suas necessidades específicas e limitações físicas."
    }
  ];

  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Perguntas Frequentes</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tire suas dúvidas sobre nossa academia e a prática do Jiu-Jitsu
        </p>
        
        <div className="max-w-4xl mx-auto grid gap-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className={cn(
                  "mb-4 rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden",
                  "relative border-none",
                  "before:absolute before:inset-0 before:z-0",
                  "before:bg-gradient-to-r before:from-red-800/80 before:via-red-600/80 before:to-red-800/80",
                  "before:bg-[length:200%_100%] before:animate-gradientFlow"
                )}
              >
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left hover:no-underline relative z-10 text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="relative z-10">
                    <CardContent className="pt-0 pb-4 text-white">
                      <p className="text-white/80">{faq.answer}</p>
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>
              </Card>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12 bg-soconday bg-secondary dark:bg-slate-800 rounded-lg p-6 max-w-2xl mx-auto shadow-sm">
          <h3 className="text-xl  font-semibold mb-2">Ainda tem dúvidas?</h3>
          <p className="text-muted-foreground mb-4">
            Entre em contato conosco e teremos prazer em ajudar.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <a href="tel:+5511999999999" className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              (11) 99999-9999
            </a>
            <span className="hidden sm:inline text-gray-300">|</span>
            <a href="mailto:contato@greciect.com.br" className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              contato@greciect.com.br
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}