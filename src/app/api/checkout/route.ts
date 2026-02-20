import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "");

const plans: Record<string, { name: string; amount: number; description: string }> = {
  mensal: {
    name: "Plano Mensal",
    amount: 15000,
    description: "Acesso ilimitado às aulas + Treino livre",
  },
  trimestral: {
    name: "Plano Trimestral",
    amount: 40000,
    description: "Todos os benefícios do plano mensal + Desconto especial",
  },
  anual: {
    name: "Plano Anual",
    amount: 120000,
    description: "Todos os benefícios + Acesso a eventos exclusivos",
  },
  adulto_kids_mensal: {
    name: "Adulto + Kids Mensal",
    amount: 25000,
    description: "1 adulto + 1 criança, horários exclusivos para família",
  },
  adulto_kids_anual: {
    name: "Adulto + Kids Anual",
    amount: 240000,
    description: "2 meses grátis + Kit exclusivo de uniformes",
  },
  casal: {
    name: "Plano Casal",
    amount: 28000,
    description: "2 adultos, acesso a todas as aulas",
  },
};

export async function POST(req: NextRequest) {
  try {
    const key = process.env.STRIPE_SECRET_KEY ?? "";
    if (!key || key.includes("SUA_CHAVE")) {
      return NextResponse.json(
        { error: "Chave do Stripe não configurada. Adicione STRIPE_SECRET_KEY no arquivo .env" },
        { status: 503 }
      );
    }

    const { planId } = await req.json();

    const plan = plans[planId];
    if (!plan) {
      return NextResponse.json({ error: "Plano inválido" }, { status: 400 });
    }

    const origin = req.headers.get("origin") || "http://localhost:9002";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "brl",
            unit_amount: plan.amount,
            product_data: {
              name: plan.name,
              description: plan.description,
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Erro interno";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
