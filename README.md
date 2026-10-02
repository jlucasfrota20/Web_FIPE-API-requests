# FIPE APIrequests

Aplicação web para consultar o preço médio atualizado de carros no Brasil usando dados da Tabela FIPE disponibilizados pela BrasilAPI.

## 🧠 Problemática

Consultar o preço de um veículo exige encontrar a marca, o modelo e o ano corretos em uma base de referência. A navegação manual por essas opções pode ser demorada e dificultar uma consulta rápida.

## 🎯 Objetivo

Oferecer uma interface simples para selecionar marca, modelo e ano do veículo e visualizar o preço e os detalhes retornados pela API. Com um código fonte unificado e simples de entender, melhorando o treinamento e aprendizado dos fluxos de requisições e APIs.

## 🕹️ Funcionalidades

- Carrega as marcas de carros disponíveis.
- Busca os modelos de acordo com a marca selecionada.
- Busca os anos disponíveis para o modelo escolhido.
- Consulta e exibe o preço e os detalhes do veículo.
- Impede a consulta do preço enquanto faltarem seleções obrigatórias.

## 📱 Tecnologias

- HTML
- CSS
- JavaScript
- React
- Vite
- Axios

## 📩 API

O projeto usa a [BrasilAPI](https://brasilapi.com.br/) para acessar dados da FIPE. As requisições são feitas diretamente pelo navegador:

| Consulta | Endpoint |
| --- | --- |
| Marcas | `/api/fipe/marcas/v1/carros` |
| Modelos por marca | `/api/fipe/veiculos/v1/carros/{marcaId}` |
| Anos por marca e modelo | `/api/fipe/anos/v1/carros/{marcaId}/{modeloId}` |
| Detalhes e preço | `/api/fipe/detalhes/v1/carros/{marcaId}/{modeloId}/{anoId}` |

Base URL: `https://brasilapi.com.br`. A disponibilidade dos dados depende desse serviço externo.

## 📡 Executar localmente

É necessário ter Node.js e npm instalados.

```bash
git clone <URL_DO_REPOSITORIO>
cd <PASTA_DO_PROJETO>
npm install
npm run dev
```

Abra no navegador o endereço local indicado pelo Vite. Para gerar uma versão de produção, execute `npm run build`. Assim, criará-se uma pasta build transpilada pronta para funcionamento.

## 📦 Aplicação publicada

**Link:** [Deploy na Vercel](https://fipe-apirequests.vercel.app/)

## 🤖 Uso de IA

A IA foi usada como apoio ao aprendizado e à programação rápida: para esclarecer conceitos de React, investigar problemas nas requisições e acelerar a implementação e a documentação. As sugestões foram tratadas como apoio, não como fonte infalível; cabe ao desenvolvedor revisar o código, conferir a documentação das tecnologias e testar o comportamento da aplicação.

Obs.: Prompts para geração de código não foram utilizados.