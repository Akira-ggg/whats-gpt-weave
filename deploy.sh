#!/bin/bash

# Deploy script for Google Cloud Platform
echo "🚀 Iniciando deploy no Google Cloud Platform..."

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null
then
    echo "❌ gcloud CLI não encontrado. Instale o Google Cloud SDK primeiro."
    echo "👉 https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Check if user is authenticated
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" | grep -q .; then
    echo "❌ Não autenticado no Google Cloud. Execute: gcloud auth login"
    exit 1
fi

# Build the project
echo "📦 Construindo o projeto..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Falha na construção do projeto."
    exit 1
fi

# Deploy to App Engine
echo "🌐 Fazendo deploy para o App Engine..."
gcloud app deploy --quiet

if [ $? -eq 0 ]; then
    echo "✅ Deploy realizado com sucesso!"
    echo "🔗 Abrindo aplicação..."
    gcloud app browse
else
    echo "❌ Falha no deploy."
    exit 1
fi