import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <CheckCircle className="text-green-500 mb-6" size={72} />
      <h1 className="text-3xl font-bold mb-4">Pagamento realizado com sucesso!</h1>
      <p className="text-muted-foreground text-lg mb-8">
        Obrigado por assinar o Complexo do Alemão. Em breve entraremos em contato para confirmar sua matrícula.
      </p>
      <Link
        href="/"
        className="bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-md transition-colors"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
