import { XCircle } from "lucide-react";
import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <XCircle className="text-red-500 mb-6" size={72} />
      <h1 className="text-3xl font-bold mb-4">Pagamento cancelado</h1>
      <p className="text-muted-foreground text-lg mb-8">
        Seu pagamento foi cancelado. Nenhuma cobrança foi realizada.
      </p>
      <Link
        href="/#pricing"
        className="bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-md transition-colors"
      >
        Voltar aos planos
      </Link>
    </div>
  );
}
