#!/bin/bash

# Script de configuração inicial do projeto
echo "🚀 Configurando WhatsApp RAG Chatbot..."

# Tornar scripts executáveis
chmod +x deploy.sh
chmod +x check-build.sh
chmod +x setup.sh

echo "✅ Scripts configurados como executáveis"

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Por favor instale Node.js 18+ primeiro."
    echo "👉 https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt "18" ]; then
    echo "❌ Node.js versão 18+ necessária. Versão atual: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detectado"

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Falha na instalação das dependências."
    exit 1
fi

echo "✅ Dependências instaladas com sucesso"

# Verificar build
echo "🏗️ Testando build de produção..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Falha no build de produção."
    exit 1
fi

echo "✅ Build de produção criado com sucesso"

# Limpar pasta de build para economizar espaço
rm -rf dist

echo ""
echo "🎉 Projeto configurado com sucesso!"
echo ""
echo "📋 Próximos passos:"
echo "   1. Para desenvolvimento: npm run dev"
echo "   2. Para verificar build: ./check-build.sh"
echo "   3. Para deploy no GCP: ./deploy.sh"
echo ""
echo "📚 Documentação:"
echo "   - README.md - Documentação completa"
echo "   - DEPLOY_GUIDE.md - Guia de deploy detalhado"
echo ""
echo "🔗 Links úteis:"
echo "   - Dashboard Supabase: https://supabase.com/dashboard/project/kdusvnuddkgamsfnypjf"
echo "   - Google Cloud Console: https://console.cloud.google.com/"
echo ""
echo "✨ Bom desenvolvimento!"