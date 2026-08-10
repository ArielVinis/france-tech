# France Tech

Site institucional da **France Tech** — soluções de software sob medida (web, SaaS e sites).

## Stack

- **Next.js** 16 (App Router) + React 19
- **Tailwind CSS** 4 + **shadcn/ui** (Base UI)
- **GSAP** + **Lenis** (scroll e animações)
- **React Bits** (SplashCursor, ScrollStack, SplitText; ShinyText/TrueFocus em CSS)
- **next-themes** (claro / escuro)
- **TypeScript** + **pnpm**

## Pré-requisitos

- Node.js 20+
- [pnpm](https://pnpm.io/) 11+

## Começar

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando      | Descrição                   |
| ------------ | --------------------------- |
| `pnpm dev`   | Servidor de desenvolvimento |
| `pnpm build` | Build de produção           |
| `pnpm start` | Serve o build               |
| `pnpm lint`  | ESLint                      |

## Estrutura

```
src/
  app/           # App Router (layout, page, globals.css)
  components/    # UI shadcn + React Bits
  features/body/ # Secções da landing (hero, soluções, sobre, contato, header)
  hooks/         # Hooks partilhados (ex.: brand metálico)
  lib/           # Utilitários, nav, tokens de marca
public/          # Assets estáticos (logo, ícones)
```

## Tema e marca

- Tema **escuro** por omissão; toggle no header (lua / sol).
- Prata metálico: claro na tela no dark (`#c0c0c0`), mais escuro no light (`#18181b`) para contraste — ver `src/lib/brand.ts`.
- Splash do cursor (`SplashCursor`) adapta a cor ao tema.

## React Bits

Componentes adicionados com:

```bash
pnpm dlx shadcn@latest add @react-bits/<Nome>-TS-TW
```

Preferir sempre a variante **TS-TW**. Ver `.cursor/rules/react-bits.mdc`.

## Notas

- Package manager: **pnpm** (não misturar com npm/yarn).
- O header é custom (pill flutuante + scroll spy + Lenis).
