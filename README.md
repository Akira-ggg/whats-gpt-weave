# WhatsApp RAG Chatbot - Dashboard Administrativo

Uma aplicação completa para gerenciamento de chatbot RAG (Retrieval-Augmented Generation) integrado ao WhatsApp, com dashboard administrativo moderno e autenticação JWT.

## 🚀 Funcionalidades

### ✅ Implementado
- **Autenticação JWT** com Supabase
- **Dashboard Administrativo** responsivo
- **Interface moderna** com design system consistente
- **Métricas em tempo real** (preparado para integração)
- **Gestão de conversas** (interface pronta)
- **Tema escuro/claro** automático
- **Componentes reutilizáveis** com Shadcn/UI

### 🔄 Para Implementação Futura
- Base de conhecimento RAG
- Integração WhatsApp Business API
- API OpenAI para geração de respostas
- Banco de dados vetorial
- Sistema de upload de documentos

## 🛠️ Tecnologias

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: Shadcn/UI, Lucide Icons
- **Autenticação**: Supabase Auth (JWT)
- **Backend**: Supabase (PostgreSQL)
- **Deploy**: Google Cloud Platform (App Engine)
- **Build**: Vite

## 📦 Instalação e Desenvolvimento

### Pré-requisitos
```bash
Node.js 18+ 
npm ou yarn
```

### Configuração Local
```bash
# Clone o repositório
git clone <seu-repositorio>
cd whatsapp-rag-chatbot

# Instale as dependências
npm install

# Configure as variáveis de ambiente
# (As configurações do Supabase já estão no projeto)

# Execute em modo de desenvolvimento
npm run dev
```

### Scripts Disponíveis
```bash
npm run dev        # Desenvolvimento
npm run build      # Build para produção
npm run preview    # Preview da build
npm run lint       # Verificação de código
```

## 🌐 Deploy no Google Cloud Platform

### Configuração Inicial
1. **Instale o Google Cloud SDK**:
   ```bash
   # macOS
   brew install google-cloud-sdk
   
   # Ubuntu/Debian
   curl https://sdk.cloud.google.com | bash
   ```

2. **Autentique-se**:
   ```bash
   gcloud auth login
   gcloud auth application-default login
   ```

3. **Configure o projeto**:
   ```bash
   gcloud config set project SEU_PROJECT_ID
   gcloud app create --region=us-central1
   ```

### Deploy Automático
```bash
# Torne o script executável
chmod +x deploy.sh

# Execute o deploy
./deploy.sh
```

### Deploy Manual
```bash
# Build do projeto
npm run build

# Deploy para App Engine
gcloud app deploy
```

### Deploy com Cloud Build (CI/CD)
```bash
# Ative o Cloud Build
gcloud services enable cloudbuild.googleapis.com

# Execute o build
gcloud builds submit --config=cloudbuild.yaml
```

## 🏗️ Arquitetura

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes base (Shadcn/UI)
│   ├── Dashboard.tsx   # Dashboard principal
│   ├── Header.tsx      # Cabeçalho com logout
│   └── Sidebar.tsx     # Menu lateral
├── pages/              # Páginas principais
│   ├── Auth.tsx        # Login/Cadastro
│   ├── Index.tsx       # Página inicial
│   └── NotFound.tsx    # 404
├── contexts/           # Contextos React
│   └── AuthContext.tsx # Gerenciamento de autenticação
├── integrations/       # Integrações externas
│   └── supabase/       # Cliente Supabase
├── hooks/              # Hooks customizados
└── lib/                # Utilitários
```

## 🎨 Design System

O projeto utiliza um design system consistente baseado em:

- **Cores**: HSL com suporte a tema escuro/claro
- **Tipografia**: Inter (via Tailwind)
- **Componentes**: Shadcn/UI customizados
- **Icons**: Lucide React
- **Animações**: Tailwind CSS + Framer Motion ready

### Paleta de Cores Principal
- **Primary**: Verde (`142 76% 36%`) - Cor principal do bot
- **Background**: Escuro (`240 10% 3.9%`) - Fundo principal
- **Card**: Semi-transparente com blur
- **Accent**: Gradientes suaves

## 🔐 Autenticação

Sistema completo com Supabase:

- **JWT Tokens** automáticos
- **Sessão persistente** no localStorage
- **Proteção de rotas** com ProtectedRoute
- **Estados de loading** gerenciados
- **Tratamento de erros** em português

## 📊 Métricas e Monitoramento

Dashboard preparado para:

- **Conversas ativas** em tempo real
- **Taxa de resposta** do bot
- **Satisfação do usuário** (NPS ready)
- **Performance** de busca RAG
- **Logs de erro** centralizados

## 🚦 Próximos Passos

1. **Implementar RAG**:
   - Banco de dados vetorial (Pinecone/ChromaDB)
   - Embeddings com OpenAI API
   - Sistema de busca semântica

2. **WhatsApp Integration**:
   - WhatsApp Business API
   - Webhooks para mensagens
   - Gestão de templates

3. **Funcionalidades Avançadas**:
   - Upload de documentos
   - Treinamento do modelo
   - Analytics avançado

## 🆘 Suporte

Para dúvidas ou problemas:

1. Verifique os logs no Google Cloud Console
2. Execute `npm run dev` localmente para debug
3. Consulte a documentação do Supabase
4. Teste a autenticação primeiro

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido com ❤️ para automatizar atendimento no WhatsApp**
