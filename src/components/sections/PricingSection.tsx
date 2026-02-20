"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

async function handleCheckout(planId: string, setLoading: (id: string | null) => void) {
  setLoading(planId);
  try {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ planId }),
    });
    const data = await res.json();
    if (!res.ok) {
      alert(data.error ?? "Erro ao iniciar pagamento. Tente novamente.");
      return;
    }
    if (data.url) window.location.href = data.url;
  } catch {
    alert("Erro de conexão. Verifique sua internet e tente novamente.");
  } finally {
    setLoading(null);
  }
}

export function PricingSection() {
  const [loading, setLoading] = useState<string | null>(null);

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
            <Button
              className="w-full"
              disabled={loading === "mensal"}
              onClick={() => handleCheckout("mensal", setLoading)}
            >
              {loading === "mensal" ? "Aguarde..." : "Assinar Mensal"}
            </Button>
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
            <Button
              className="w-full"
              disabled={loading === "trimestral"}
              onClick={() => handleCheckout("trimestral", setLoading)}
            >
              {loading === "trimestral" ? "Aguarde..." : "Assinar Trimestral"}
            </Button>
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
            <Button
              className="w-full"
              disabled={loading === "anual"}
              onClick={() => handleCheckout("anual", setLoading)}
            >
              {loading === "anual" ? "Aguarde..." : "Assinar Anual"}
            </Button>
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
            <Button
              className="w-full"
              disabled={loading === "adulto_kids_mensal"}
              onClick={() => handleCheckout("adulto_kids_mensal", setLoading)}
            >
              {loading === "adulto_kids_mensal" ? "Aguarde..." : "Assinar Família"}
            </Button>
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
            <Button
              className="w-full"
              disabled={loading === "adulto_kids_anual"}
              onClick={() => handleCheckout("adulto_kids_anual", setLoading)}
            >
              {loading === "adulto_kids_anual" ? "Aguarde..." : "Assinar Família Anual"}
            </Button>
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
            <Button
              className="w-full"
              disabled={loading === "casal"}
              onClick={() => handleCheckout("casal", setLoading)}
            >
              {loading === "casal" ? "Aguarde..." : "Assinar Casal"}
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
