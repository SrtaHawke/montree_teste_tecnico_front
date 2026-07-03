# Teste Técnico Frontend - Mini Chat

## Desenvolvedora

**Nayara da Cruz**

---

# Descrição

Este projeto foi desenvolvido como solução para o teste técnico de Frontend.

A aplicação consiste em uma interface de chat desenvolvida em **React + TypeScript**, simulando uma aplicação moderna de mensagens em tempo real.

Além do envio de mensagens, foram implementados diferenciais voltados à arquitetura, organização do código e experiência do usuário, como múltiplos canais de conversa, preferências personalizáveis e persistência das configurações da interface.

Toda a aplicação foi estruturada seguindo o padrão **MVVM (Model-View-ViewModel)**, permitindo uma clara separação entre interface, regras de negócio e gerenciamento de estado.

---

# Tecnologias

- React
- TypeScript
- Vite
- Styled Components
- Lucide React

---

# Estrutura do Projeto

```
src
├── features
│   └── chat
│       ├── model
│       ├── services
│       ├── view
│       │   └── components
│       └── viewmodel
│
├── shared
│   ├── hooks
│   └── utils
│
└── styles
```

---

# Instalação

Clone o projeto

```bash
git clone <url-do-repositorio>
```

Entre na pasta

```bash
cd teste_tecnico_front
```

Instale as dependências

```bash
npm install
```

Execute a aplicação

```bash
npm run dev
```

A aplicação ficará disponível em

```
http://localhost:5173
```

Para gerar a versão de produção

```bash
npm run build
```

Visualizar a build

```bash
npm run preview
```

---

# Funcionalidades

## Chat

- envio de mensagens;
- simulação de respostas automáticas;
- indicador de digitação;
- scroll automático;
- histórico independente por canal.

---

## Canais

Foram implementados quatro canais simulados:

- Jogos
- Trabalho
- Família
- Amigos

Cada canal possui sua própria base de mensagens simuladas.

---

## Configurações

A aplicação permite personalizar:

- nome do usuário;
- tema (Claro / Escuro);
- cor principal da interface.

As preferências são persistidas localmente utilizando o armazenamento do navegador.

---

# Responsividade

A interface adapta automaticamente seu layout para diferentes tamanhos de tela.

Desktop:

- navegação lateral;
- painel de configurações;
- layout em três colunas.

Mobile:

- navegação inferior;
- drawer lateral para configurações;
- interface otimizada para dispositivos móveis.

---

# Estrutura Arquitetural

O projeto foi organizado seguindo o padrão **MVVM**.

```
View
    ↓
ViewModel
    ↓
Services
    ↓
Model
```

Cada camada possui responsabilidades bem definidas:

### Model

Responsável pelas entidades da aplicação, tipagens, constantes e estruturas de dados.

### Services

Responsável pelas regras de acesso aos dados simulados e persistência das preferências.

### ViewModel

Responsável pelo gerenciamento de estado da aplicação, comunicação entre View e Services e regras de interação.

### View

Responsável exclusivamente pela interface da aplicação e renderização dos componentes.

---

# Persistência

As preferências do usuário são armazenadas utilizando o **Local Storage**, preservando:

- tema escolhido;
- cor principal;
- nome do usuário.

---

# Observações

Durante o desenvolvimento foram adotadas boas práticas como:

- separação de responsabilidades;
- arquitetura MVVM;
- componentização;
- tipagem completa com TypeScript;
- reutilização de componentes;
- Styled Components para estilização;
- organização por Features;
- serviços desacoplados da interface;
- gerenciamento de estado através do ViewModel;
- estrutura preparada para futura integração com APIs reais.

---

# Diferenciais Implementados

- ✔ Arquitetura MVVM
- ✔ React + TypeScript
- ✔ Styled Components
- ✔ Componentização
- ✔ Múltiplos canais independentes
- ✔ Simulação de mensagens em tempo real
- ✔ Indicador de digitação
- ✔ Persistência das preferências do usuário
- ✔ Temas Claro e Escuro
- ✔ Personalização de cores da interface
- ✔ Responsividade para Desktop e Mobile
- ✔ Estrutura preparada para integração com APIs
- ✔ Separação entre Model, View, ViewModel e Services