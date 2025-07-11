import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  BookOpen, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Star,
  Phone,
  Smartphone,
  DollarSign,
  Target,
  Lock,
  Zap
} from "lucide-react";

console.log('[RaioXPage] Página carregada');

const RaioXDoBalcao = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCTAClick = () => {
    console.log('[RaioXPage] CTA clicado');
    setIsLoading(true);
    // Simular redirecionamento para checkout
    setTimeout(() => {
      setIsLoading(false);
      window.open('https://pay.hotmart.com/exemplo', '_blank');
    }, 1000);
  };

  const modules = [
    {
      icon: Eye,
      title: "Anatomia do Golpe",
      description: "Aprenda a identificar as 15 táticas mais usadas pelos técnicos desonestos para inflacionar orçamentos."
    },
    {
      icon: DollarSign,
      title: "Tabela de Preços Reais",
      description: "Descubra quanto REALMENTE custa cada tipo de reparo e nunca mais pague valores abusivos."
    },
    {
      icon: Target,
      title: "Perguntas Certeiras",
      description: "As 10 perguntas que todo técnico honesto sabe responder (e que deixam os golpistas nervosos)."
    },
    {
      icon: Lock,
      title: "Proteção Total",
      description: "Estratégias para proteger seus dados e fotos pessoais durante qualquer reparo."
    },
    {
      icon: CheckCircle,
      title: "Checklist de Segurança",
      description: "Passo a passo para escolher uma assistência técnica confiável em sua cidade."
    },
    {
      icon: Zap,
      title: "Emergência Digital",
      description: "O que fazer quando seu celular para de funcionar: protocolo completo de ação imediata."
    }
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Seção 1 - Atenção */}
      <section className="bg-dark-bg text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark opacity-90"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Você não é{" "}
              <span className="line-through text-gray-400">burro(a)</span>.
              <br />
              Você só está{" "}
              <span className="text-gold-accent">desarmado(a)</span>.
              <br />
              <span className="text-2xl md:text-3xl">Por enquanto.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              O manual que os técnicos de celular{" "}
              <span className="text-gold-accent font-bold">REZAM</span> para que você nunca leia está finalmente aqui.
            </p>
            <div className="flex justify-center">
              <Badge variant="outline" className="border-gold-accent text-gold-accent text-lg px-6 py-2">
                🔥 Mais de 10.000 pessoas já se protegeram
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2 - Interesse (Storytelling) */}
      <section className="bg-white py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Você já passou por isso?
              </h2>
              
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Seu celular quebra. Você corre para a primeira assistência técnica que encontra.
                </p>
                
                <p>
                  O técnico olha seu aparelho por 30 segundos e já dispara:
                </p>
                
                <blockquote className="bg-gray-100 p-4 border-l-4 border-danger-red italic">
                  "Olha, vai dar R$ 450 pra trocar essa tela. E provavelmente a placa-mãe também tá com problema... pode chegar a R$ 800."
                </blockquote>
                
                <p>
                  Seu coração dispara. É quase o preço de um celular novo!
                </p>
                
                <p>
                  Mas você <strong>PRECISA</strong> do seu telefone. Então aceita, de cabeça baixa, sentindo que está sendo roubado mas sem saber como se defender.
                </p>
                
                <p className="font-bold text-danger-red">
                  E se eu te disser que você provavelmente FOI roubado?
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <Smartphone className="w-24 h-24 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 italic">
                  "Mais um cliente que não entende nada... 
                  <br />
                  Vou cobrar o dobro mesmo."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3 - Desejo (Apresentação do Produto) */}
      <section className="bg-premium-gray text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Apresento a você:
            </h2>
            <div className="relative inline-block">
              <h3 className="text-5xl md:text-7xl font-bold text-gold-accent mb-8">
                O Raio-X do Balcão™
              </h3>
              <div className="absolute -inset-4 bg-gold-accent/20 blur-xl rounded-full"></div>
            </div>
          </div>

          <div className="flex justify-center mb-12">
            <div className="w-48 h-48 relative">
              <div className="absolute inset-0 bg-dark-bg rounded-full border-4 border-gold-accent flex items-center justify-center">
                <div className="relative">
                  <Shield className="w-20 h-20 text-danger-red" />
                  <Smartphone className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
              <div className="absolute inset-0 animate-ping bg-gold-accent/30 rounded-full"></div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="text-gold-accent font-bold">O único manual</span> que revela todos os segredos, truques e armadilhas que a indústria de reparos de celular não quer que você descubra.
          </p>

          <div className="bg-dark-bg/50 rounded-lg p-8 border border-gold-accent/30">
            <p className="text-lg text-gray-300 leading-relaxed">
              "Depois de 15 anos consertando celulares, decidi quebrar o código de silêncio. 
              É hora de você saber a verdade sobre o que realmente acontece quando você entrega seu aparelho para reparo."
            </p>
            <p className="text-gold-accent font-bold mt-4">
              - Rafael Santos, Ex-Técnico em Eletrônica
            </p>
          </div>
        </div>
      </section>

      {/* Seção 4 - Conteúdo (Módulos) */}
      <section className="bg-light-section py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              O que você vai descobrir:
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              6 módulos completos que vão transformar você de presa fácil em consumidor expert
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gold-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <module.icon className="w-8 h-8 text-gold-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {module.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-gold-accent/30 max-w-2xl mx-auto">
              <AlertTriangle className="w-12 h-12 text-gold-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                BÔNUS EXCLUSIVO
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                <strong>"Lista Negra das Assistências"</strong>
              </p>
              <p className="text-gray-600">
                Receba também nossa lista atualizada com assistências técnicas problemáticas em todo o Brasil. 
                Evite dor de cabeça antes mesmo de sair de casa!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5 - Oferta */}
      <section className="bg-white py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gray-50 rounded-2xl p-12 border-2 border-danger-red shadow-premium text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-danger-red mb-6">
              🚨 OFERTA ESPECIAL POR TEMPO LIMITADO 🚨
            </h2>
            
            <div className="mb-8">
              <p className="text-lg text-gray-700 mb-4">
                Imagine pagar <strong className="text-danger-red">apenas uma vez</strong> por um conhecimento que pode te economizar <strong>milhares de reais</strong> pelo resto da vida.
              </p>
              
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-gray-500 line-through text-2xl">R$ 197,00</span>
                <span className="text-5xl font-bold text-danger-red">R$ 47,00</span>
              </div>
              
              <p className="text-sm text-gray-600 mb-8">
                Menos que o valor de um diagnóstico em qualquer assistência técnica!
              </p>
            </div>

            <Button 
              variant="cta" 
              size="lg" 
              className="text-xl py-6 px-12 mb-6 w-full md:w-auto"
              onClick={handleCTAClick}
              disabled={isLoading}
            >
              {isLoading ? "PROCESSANDO..." : "🔥 QUERO MEU ARSENAL AGORA!"}
            </Button>

            <div className="grid md:grid-cols-3 gap-4 mt-8 text-sm text-gray-600">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-success-green" />
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-success-green" />
                <span>Download Seguro</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-success-green" />
                <span>Suporte 24h</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-6">
              💳 Pagamento 100% seguro via Hotmart • Parcelamento disponível
            </p>
          </div>
        </div>
      </section>

      {/* Seção 6 - Garantia */}
      <section className="bg-light-section py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-12">
            <div className="w-24 h-24 bg-success-green rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Garantia Blindada de 30 Dias
            </h2>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg max-w-3xl mx-auto mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Eu tenho tanta certeza de que este manual vai revolucionar sua relação com assistências técnicas que ofereço uma garantia simples:
            </p>
            
            <div className="bg-success-green/10 rounded-lg p-6 mb-6">
              <p className="text-xl font-bold text-gray-900 mb-4">
                Se em 30 dias você não economizar pelo menos 10x o valor investido...
              </p>
              <p className="text-lg text-gray-700">
                Eu devolvo <strong>100% do seu dinheiro</strong>. Sem perguntas, sem burocracia.
              </p>
            </div>

            <p className="text-gray-600">
              O risco é todo meu. Você só tem a ganhar.
            </p>
          </div>

          <Button 
            variant="cta" 
            size="lg" 
            className="text-xl py-6 px-12 w-full md:w-auto"
            onClick={handleCTAClick}
            disabled={isLoading}
          >
            {isLoading ? "PROCESSANDO..." : "🛡️ PROTEGER-ME AGORA COM GARANTIA TOTAL"}
          </Button>

          <div className="mt-8 text-sm text-gray-500">
            <p>🔒 Seus dados estão protegidos • SSL 256-bit • Hotmart Certificada</p>
          </div>
        </div>
      </section>

      {/* Footer da Landing Page */}
      <footer className="bg-dark-bg text-gray-400 py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="mb-4">
            © 2024 O Raio-X do Balcão™ - Todos os direitos reservados
          </p>
          <p className="text-sm">
            Este produto não oferece garantia de resultados. Resultados dependem do uso adequado das informações.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RaioXDoBalcao;