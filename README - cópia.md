# 🌸 Lilium Pink - Creative Technology Portfolio

> "Cultivating Digital Experiences"

Um portfólio de tecnologia criativa que combina engenharia frontend robusta com design orgânico e minimalista. Este projeto visa demonstrar habilidades em React, animações complexas, UX design e arquitetura de software limpa.

![Project Banner](/client/public/images/hero-lily-bg.png)

## 🎨 Identidade Visual & Conceito

**Estilo:** Ethereal Botanical Tech
**Core:** Minimalista + Feminino + Profissional + Natureza

O design funde a precisão da engenharia com a beleza orgânica dos lírios. A interface utiliza muito espaço em branco (respiro), tipografia elegante (Playfair Display + Inter) e micro-interações suaves que imitam o movimento natural das plantas.

### Paleta de Cores
- **Background:** `#FAFAF8` (Papel de Arroz / Off-white texturizado)
- **Texto:** `#1F1F1F` (Carvão Suave)
- **Primary:** `#E6A8B8` (Rosa Lírio)
- **Secondary:** `#7A9A84` (Verde Sálvia)

## 🛠️ Stack Tecnológica

- **Core:** React 19 + Vite + TypeScript
- **Estilização:** Tailwind CSS v4
- **Animações:** Framer Motion
- **Roteamento:** Wouter
- **Ícones:** Lucide React


## 📂 Estrutura do Projeto

```bash
lilium-pink/
├── client/
│   ├── public/             # Assets estáticos (imagens, fontes)
│   │   └── images/         # Imagens dos lírios geradas por IA
│   └── src/
│       ├── assets/         # Assets importados via JS
│       ├── components/
│       │   ├── animations/ # Componentes de animação reutilizáveis
│       │   ├── layout/     # Layouts globais (Header, Footer)
│       │   └── ui/         # Componentes base (Botões, Cards - shadcn/ui)
│       ├── contexts/       # React Contexts (Theme, State global)
│       ├── hooks/          # Custom Hooks
│       ├── lib/            # Utilitários e helpers
│       ├── pages/          # Páginas da aplicação
│       └── styles/         # Estilos globais adicionais
├── server/                 # (Opcional) Backend proxy se necessário
└── ...config files
```

## 🚀 Como Rodar Localmente

1.  **Instale as dependências:**
    ```bash
    pnpm install
    ```

2.  **Inicie o servidor de desenvolvimento:**
    ```bash
    pnpm dev
    ```

3.  **Acesse:** `http://localhost:3000`

## 🌿 Funcionalidades Planejadas (Roadmap)

- [x] **Setup Inicial:** Estrutura de pastas, Tailwind, Fontes.
- [x] **Home Page:** Hero section com animações de entrada.
- [ ] **Jardim de Projetos:** Mapa interativo onde cada projeto é uma flor.
- [ ] **Sobre Mim:** Storytelling visual com parallax.
- [ ] **Case Studies:** Páginas detalhadas de projetos (DNA do projeto).
- [ ] **Playground:** Área de experimentação de animações.
- [ ] **Easter Eggs:** Chuva de pétalas e interações secretas.

## 🤝 Guia de Desenvolvimento

1.  **Componentes:** Use a pasta `components/ui` para componentes base. Prefira composição a herança.
2.  **Estilos:** Use classes utilitárias do Tailwind. Para estilos complexos ou animações específicas, use `framer-motion` diretamente no JSX.
3.  **Commits:** Mantenha mensagens de commit claras e semânticas (ex: `feat: adiciona hero section`, `fix: ajusta cor do botão`).

---

Desenvolvido por Isadora Drong
