import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function PricingSection() {
  return (
    <section id="pricing" className="mb-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Nossos Planos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Monthly Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Mensal</CardTitle>
            <CardDescription>Flexibilidade total</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div>
              <div className="text-2xl font-bold">R$ 150,00</div>
              <ul className="list-disc pl-5 mt-4 text-muted-foreground">
                <li>Acesso ilimitado às aulas</li>
                <li>Treino livre</li>
              </ul>
            </div>
          </CardContent>
          <div className="p-6 pt-0">
            <Button className="w-full">Escolher Mensal</Button>
          </div>
        </Card>

        {/* Quarterly Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Trimestral</CardTitle>
            <CardDescription>Economia e compromisso</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div>
              <div className="text-2xl font-bold">R$ 400,00</div>
              <ul className="list-disc pl-5 mt-4 text-muted-foreground">
                <li>Todos os benefícios do plano mensal</li>
                <li>Desconto especial</li>
              </ul>
            </div>
          </CardContent>
          <div className="p-6 pt-0">
            <Button className="w-full">Escolher Trimestral</Button>
          </div>
        </Card>

        {/* Annual Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Anual</CardTitle>
            <CardDescription>Máximo desempenho e economia</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div>
              <div className="text-2xl font-bold">R$ 1.200,00</div>
              <ul className="list-disc pl-5 mt-4 text-muted-foreground">
                <li>Todos os benefícios dos planos anteriores</li>
                <li>Acesso a eventos exclusivos</li>
              </ul>
            </div>
          </CardContent>
          <div className="p-6 pt-0">
            <Button className="w-full">Escolher Anual</Button>
          </div>
        </Card>
        
        {/* Adulto + Kids Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Adulto + Kids Mensal</CardTitle>
            <CardDescription>Treine com seu filho</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div>
              <div className="text-2xl font-bold">R$ 250,00</div>
              <ul className="list-disc pl-5 mt-4 text-muted-foreground">
                <li>1 adulto + 1 criança</li>
                <li>Acesso a todas as aulas</li>
                <li>Desconto de R$10 por criança adicional</li>
                <li>Horários exclusivos para família</li>
              </ul>
            </div>
          </CardContent>
          <div className="p-6 pt-0">
            <Button className="w-full">Escolher Família</Button>
          </div>
        </Card>
        
        {/* Adulto + Kids Annual Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Adulto + Kids Anual</CardTitle>
            <CardDescription>Compromisso familiar</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div>
              <div className="text-2xl font-bold">R$ 2.400,00</div>
              <ul className="list-disc pl-5 mt-4 text-muted-foreground">
                <li>1 adulto + 1 criança</li>
                <li>2 meses grátis (comparado ao mensal)</li>
                <li>Desconto de R$10 por criança adicional</li>
                <li>Kit exclusivo de uniformes</li>
              </ul>
            </div>
          </CardContent>
          <div className="p-6 pt-0">
            <Button className="w-full">Escolher Anual Família</Button>
          </div>
        </Card>
        
        {/* Couple Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Plano Casal</CardTitle>
            <CardDescription>Treinem juntos</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div>
              <div className="text-2xl font-bold">R$ 280,00</div>
              <ul className="list-disc pl-5 mt-4 text-muted-foreground">
                <li>2 adultos</li>
                <li>Acesso a todas as aulas</li>
                <li>Desconto exclusivo para casais</li>
                <li>Horários flexíveis</li>
              </ul>
            </div>
          </CardContent>
          <div className="p-6 pt-0">
            <Button className="w-full">Escolher Plano Casal</Button>
          </div>
        </Card>
      </div>
    </section>
  );
}