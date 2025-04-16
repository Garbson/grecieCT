# Grecie Centro de Treinamento - Site Institucional

![Banner Grecie CT](https://via.placeholder.com/1200x300/red/white?text=Grecie+Centro+de+Treinamento)

## 📋 Sobre o Projeto

Este é um site institucional desenvolvido para o Grecie Centro de Treinamento, uma academia especializada em Jiu-Jitsu. O site foi construído utilizando tecnologias modernas como Next.js, TypeScript e Tailwind CSS, proporcionando uma experiência de usuário fluida e responsiva.

## 🚀 Tecnologias Utilizadas

- **Next.js** - Framework React para renderização híbrida e estática
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn/UI** - Componentes de UI reutilizáveis

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js (v16+)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/grecieCT.git
cd grecieCT
```

2. Instale as dependências:
```bash
npm install
# ou
yarn
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Acesse o site em `http://localhost:3000`

## 📱 Recursos e Funcionalidades

- **Design Responsivo**: Adaptado para todos os tamanhos de tela
- **Seções Informativas**: Sobre a academia, benefícios, horários, preços, etc.
- **FAQ Interativo**: Perguntas frequentes em formato de acordeão
- **Mapa de Localização**: Integração com Google Maps
- **Navegação Suave**: Links de ancoragem para facilitar a navegação

## 🏗️ Estrutura do Projeto

```
src/
  ├── app/            # Páginas e configurações do App Router
  ├── components/     # Componentes reutilizáveis
  │   ├── sections/   # Seções da página principal
  │   └── ui/         # Componentes de UI (shadcn)
  ├── lib/            # Utilitários e helpers
  └── services/       # Serviços externos e APIs
```

## 📚 Seções Principais

1. **Hero** - Apresentação inicial da academia
2. **Benefícios** - Vantagens de praticar Jiu-Jitsu
3. **Horários** - Grade de horários das aulas
4. **Planos** - Opções de mensalidades e pacotes
5. **FAQ** - Perguntas frequentes
6. **Localização** - Endereço e mapa

## 📝 Personalização

Para personalizar o site para sua própria academia:

1. Modifique as informações de contato no arquivo `Footer.tsx`
2. Atualize o conteúdo das seções em `components/sections/`
3. Substitua as imagens na pasta `public/`
4. Ajuste as cores e estilos em `tailwind.config.ts`

## 🔄 Deploy

O projeto está configurado para ser facilmente implantado na Vercel:

```bash
npm run build
# ou
vercel --prod
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor

Desenvolvido por [Garbson Souza](https://wa.me/5511999999999)

---

2025 © Grecie Centro de Treinamento - Todos os direitos reservados.
