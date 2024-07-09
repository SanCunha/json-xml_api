# Request / Responde - JSON / XML

Este projeto demonstra como fazer requisições HTTP em JSON e XML usando TypeScript, utilizando a biblioteca Axios para enviar e receber dados de APIs externas. O objetivo é mostrar como configurar requisições para diferentes formatos de dados e processar respostas de maneira eficiente.

## Requisitos

- Node.js v14 ou superior
- npm (Node Package Manager) v6 ou superior

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/SanCunha/json-xml_api.git
   cd json-xml_api

   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

## Execução

1. Compile o código TypeScript para JavaScript:
   ```bash
   npx tsc
   ```
2. Execute o script principal para testar as requisições
   ```bash
   npx ts-node src/index.ts
   ```

## Funcionalidades

O projeto atualmente demonstra quatro configurações diferentes de requisições:

- _Requisição em JSON, resposta em JSON_
- _Requisição em JSON, resposta em XML_
- _Requisição em XML, resposta em JSON_
- _Requisição em XML, resposta em XML_

Cada configuração é definida no arquivo `src/index.ts` e utiliza a função `sendRequest` em `src/apiRequest.ts` para fazer requisições HTTP utilizando Axios.

## Configurações

As configurações de cada requisição são definidas através de objetos ApiRequestConfig no arquivo `src/index.ts`. Cada objeto contém:

- `url`: URL da API ou endpoint a ser acessado.
- `method`: Método HTTP da requisição (por exemplo, GET, POST).
- `requestFormat`: Formato dos dados enviados na requisição (json ou xml).
- `responseFormat`: Formato esperado da resposta da API (json ou xml).
- `data` (opcional): Dados a serem enviados na requisição.
