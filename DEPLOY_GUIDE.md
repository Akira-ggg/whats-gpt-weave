# 🚀 Guia de Deploy - WhatsApp RAG Chatbot

## 📋 Checklist Pré-Deploy

### ✅ Projeto Finalizado
- [x] Autenticação JWT implementada
- [x] Dashboard administrativo responsivo
- [x] Design system consistente
- [x] Componentes otimizados
- [x] Build para produção configurado
- [x] Arquivos de deploy criados

### ✅ Arquivos de Configuração
- [x] `app.yaml` - Google App Engine
- [x] `cloudbuild.yaml` - Cloud Build CI/CD
- [x] `Dockerfile` - Container alternativo
- [x] `nginx.conf` - Configuração do servidor
- [x] `.gcloudignore` - Arquivos ignorados no deploy

## 🌐 Opções de Deploy

### 1. Google App Engine (Recomendado)
```bash
# 1. Instalar Google Cloud SDK
curl https://sdk.cloud.google.com | bash
exec -l $SHELL

# 2. Autenticar
gcloud auth login
gcloud auth application-default login

# 3. Configurar projeto
gcloud config set project SEU_PROJECT_ID
gcloud app create --region=us-central1

# 4. Deploy
chmod +x deploy.sh
./deploy.sh
```

### 2. Google Cloud Run
```bash
# Build da imagem
gcloud builds submit --tag gcr.io/SEU_PROJECT_ID/whatsapp-rag-bot

# Deploy no Cloud Run
gcloud run deploy whatsapp-rag-bot \
  --image gcr.io/SEU_PROJECT_ID/whatsapp-rag-bot \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

### 3. Firebase Hosting
```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login e configuração
firebase login
firebase init hosting

# Deploy
npm run build
firebase deploy
```

## 🔧 Configurações de Produção

### Variáveis de Ambiente
O projeto já está configurado com o Supabase. Para futuras integrações:

```bash
# No Google Cloud Console, configure:
OPENAI_API_KEY="sua-chave-openai"
WHATSAPP_ACCESS_TOKEN="token-whatsapp"
WHATSAPP_WEBHOOK_VERIFY_TOKEN="token-webhook"
```

### Domínio Personalizado
1. No Google Cloud Console
2. App Engine > Settings > Custom domains
3. Adicione seu domínio e configure DNS

### Monitoramento
- **Logs**: Google Cloud Logging
- **Métricas**: Google Cloud Monitoring
- **Alertas**: Configure alertas para erros 5xx

## 🛡️ Segurança

### Headers de Segurança (já configurado)
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Content-Security-Policy configurado

### HTTPS
- Automaticamente habilitado no App Engine
- Redirecionamento HTTP → HTTPS ativo

## 📊 Performance

### Otimizações Implementadas
- **Gzip compression** habilitado
- **Cache de assets** estáticos (1 ano)
- **Bundle splitting** com Vite
- **Tree shaking** automático
- **Minificação** CSS/JS

### Métricas Esperadas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

## 🔍 Verificação Pós-Deploy

### Testes Essenciais
```bash
# 1. Verificar build local
npm run build
npm run preview

# 2. Testar autenticação
# - Cadastro de novo usuário
# - Login com usuário existente
# - Logout e redirecionamento

# 3. Verificar responsividade
# - Desktop, tablet, mobile
# - Tema escuro/claro

# 4. Performance
# - Lighthouse score > 90
# - Tempo de load < 3s
```

### Endpoints de Verificação
- `GET /` - Página principal
- `GET /auth` - Página de login
- `GET /health` - Health check (nginx)

## 🚨 Troubleshooting

### Problemas Comuns

1. **Build falha**:
   ```bash
   # Limpar cache e reinstalar
   rm -rf node_modules dist
   npm install
   npm run build
   ```

2. **Erro de autenticação**:
   - Verificar configuração Supabase
   - Testar conexão com banco
   - Verificar RLS policies

3. **Deploy falha**:
   ```bash
   # Verificar logs
   gcloud app logs tail -s default
   
   # Verificar quota do projeto
   gcloud compute project-info describe
   ```

## 📈 Próximos Passos

### Funcionalidades Pendentes
1. **Implementar RAG**:
   - Configurar Pinecone/ChromaDB
   - Integrar OpenAI Embeddings
   - Sistema de upload de documentos

2. **WhatsApp Integration**:
   - Configurar WhatsApp Business API
   - Implementar webhooks
   - Sistema de templates

3. **Analytics Avançado**:
   - Google Analytics 4
   - Métricas customizadas
   - Dashboard de business intelligence

### Melhorias de Performance
- Implementar PWA
- Service Workers para cache
- Lazy loading de componentes
- Otimização de imagens

---

**🎉 Seu projeto está pronto para produção!**

Para suporte adicional, consulte:
- [Google Cloud Documentation](https://cloud.google.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [React Documentation](https://react.dev)