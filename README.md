# Currículo Premium - Kaio Gustavo

Currículo pessoal com design premium, modo escuro, dados centralizados e dezenas de funcionalidades interativas.

## Stack

- **HTML5** — Semântico, acessível, data-driven
- **CSS3** — Variáveis, Grid, Flexbox, animações, gradientes
- **JavaScript** — Vanilla JS (0 dependências), Canvas, Web Speech API, Web Share API
- **Font Awesome 6** — Ícones
- **Google Fonts** — Poppins

## Funcionalidades

### 🎨 Design
- Gradiente animado no background
- Partículas flutuando (canvas)
- Efeito 3D tilt nos cards (segue o mouse)
- Typing effect no título
- Barra de progresso de leitura
- Dark mode com persistência

### 📦 Arquitetura
- **data.js** — Dados centralizados (JSON-LD + i18n)
- Renderização dinâmica por JavaScript
- Schema.org (JSON-LD) para SEO
- Suporte multi-idioma (PT/EN)

### 🚀 Interatividade
- Compartilhar via WhatsApp, LinkedIn, Email (Web Share API)
- Formulário de contato funcional (Formspree)
- Leitura por voz (Speech Synthesis API)
- Radar chart de skills (Canvas puro)
- Animações ao scroll (Intersection Observer)
- Toast notifications

### 🌐 Integrações
- **GitHub API** — Repositórios reais em tempo real
- Contador de visitas (localStorage)
- Links sociais diretos (WhatsApp, GitHub, LinkedIn)

### 📱 PWA
- `manifest.json` — Instalável como app
- `sw.js` — Service worker (funciona offline)
- Meta tags para iOS (apple-mobile-web-app)

### ♿ Acessibilidade
- ARIA labels em todos os elementos
- Navegação por teclado
- Suporte a leitores de tela (sr-only)
- Comandos de voz (Speech API)

## Estrutura

```
curriculumvitae-main/
├── index.html       # Estrutura HTML
├── style.css        # Estilos e animações
├── script.js        # JavaScript com todas as features
├── data.js          # Dados centralizados + i18n
├── manifest.json    # PWA manifest
├── sw.js            # Service worker offline
├── README.md        # Este arquivo
└── img/
    └── perfil.png   # Foto do perfil
```

## Como usar

1. Abra o `index.html` no navegador
2. Clique no 🌙/☀️ para alternar tema
3. Clique no 🔊 para ouvir o currículo
4. Clique no 🔗 para compartilhar nas redes
5. Clique em PT/EN para trocar idioma

## Personalizar

Edite o arquivo `data.js` para alterar todas as informações sem mexer no HTML.
