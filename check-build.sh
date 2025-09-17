#!/bin/bash

# Script para verificar se o projeto está pronto para deploy
echo "🔍 Verificando projeto para deploy..."

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Instale Node.js primeiro."
    exit 1
fi

# Verificar versão do Node.js
NODE_VERSION=$(node -v)
echo "✅ Node.js: $NODE_VERSION"

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Falha na instalação das dependências."
    exit 1
fi

# Verificar TypeScript
echo "🔎 Verificando TypeScript..."
npx tsc --noEmit

if [ $? -ne 0 ]; then
    echo "❌ Erros de TypeScript encontrados."
    exit 1
fi

# Build do projeto
echo "🏗️ Construindo projeto..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Falha na construção do projeto."
    exit 1
fi

# Verificar se dist foi criado
if [ ! -d "dist" ]; then
    echo "❌ Pasta 'dist' não foi criada."
    exit 1
fi

# Verificar arquivos essenciais
if [ ! -f "dist/index.html" ]; then
    echo "❌ index.html não encontrado na pasta dist."
    exit 1
fi

echo "✅ Projeto verificado com sucesso!"
echo "📋 Resumo:"
echo "   - Dependências instaladas ✅"
echo "   - TypeScript válido ✅"
echo "   - Build criado ✅"
echo "   - Arquivos essenciais presentes ✅"
echo ""
echo "🚀 O projeto está pronto para deploy!"
echo "   Para deploy no GCP: ./deploy.sh"
echo "   Para teste local: npm run preview"