# Gabriel Dev - Portfolio

Este é o repositório do meu site/portfólio pessoal, desenvolvido em Next.js 15 com Tailwind CSS e TypeScript.

---

## Tecnologias

- Next.js 15 - Framework React para aplicações SSR/SSG.
- React 19
- TypeScript
- Tailwind CSS 4
- tsparticles - Para efeitos visuais de partículas.
- Hooks customizados para scroll suave e revelação de elementos.

---

## Scripts disponíveis

- `npm run dev` — Inicia o servidor de desenvolvimento com Turbopack.
- `npm run build` — Gera a build de produção.
- `npm start` — Inicia o servidor da aplicação em produção.
- `npm run lint` — Roda o linter para verificar padrões de código.

---

## Estrutura de pastas

```
public/
  └── images/               # Imagens estáticas usadas no site

src/
  ├── app/
  │   ├── page.tsx           # Página principal
  │   ├── layout.tsx         # Layout raiz da aplicação
  │   ├── globals.css        # Estilos globais Tailwind e customizados
  │   └── favicon.ico        # Ícone do site
  ├── components/
  │   ├── common/           # Componentes reutilizáveis (Header, Footer, Menu, Modal)
  │   ├── home/             # Componentes da página inicial (Hero, Sobre, Projetos, etc)
  │   └── icons/            # Ícones SVG personalizados usados na interface

  ├── hooks/                # Hooks React customizados
  │   ├── useScrollReveal.ts    # Anima elementos ao aparecer no scroll
  │   └── useSmoothScroll.ts    # Scroll suave entre seções

  └── lib/
      └── phrases.ts        # Frases usadas no efeito terminal
```

---

## Componentes principais destacados

### TerminalTyping.tsx

Componente que simula digitação em terminal, alternando frases com pausa e exclusão para um efeito dinâmico.

### ParticlesBackground.tsx

Fundo animado com partículas azuis conectadas e interativas, usando `tsparticles` em modo slim para performance.

---

## Como rodar localmente

1. Clone o repositório
2. Rode `npm install` para instalar dependências
3. Rode `npm run dev` para iniciar o servidor de desenvolvimento
4. Acesse `http://localhost:3000` no navegador

---

## Contato

Gabriel - [linkedin](https://www.linkedin.com/in/gabrielamaral22/)
