# Documentação das Funções JavaScript

## utils.js
Este arquivo contém funções utilitárias:
- `inverterData(isoDate)`: Converte uma data do formato ISO (YYYY-MM-DD) para o formato brasileiro (DD/MM/YYYY)
- `printDiv()`: Aciona a função de impressão do navegador

## table.js
Gerencia a tabela de exibição dos dados:
- `createRow(client, index)`: Cria uma nova linha na tabela com os dados do cliente
- `clearTable()`: Remove todas as linhas da tabela
- `updateTable()`: Atualiza a tabela com todos os clientes do banco de dados
- `editDeleteView(event)`: Gerencia os eventos de edição e exclusão de clientes

## storage.js
Gerencia o armazenamento local dos dados:
- `getLocalStorage()`: Recupera os dados do localStorage
- `setLocalStorage(dbClient)`: Salva os dados no localStorage
- `createClient(client)`: Adiciona um novo cliente ao banco de dados
- `readClient()`: Lê todos os clientes do banco de dados
- `updateClient(index, client)`: Atualiza os dados de um cliente específico
- `deleteClient(index)`: Remove um cliente do banco de dados

## modal.js
Controla o modal de edição:
- `openModal()`: Abre o modal de edição
- `closeModal()`: Fecha o modal de edição
- `fillModal(client)`: Preenche o modal com os dados do cliente
- `isValidModalFields()`: Verifica se todos os campos do modal são válidos
- `saveEdit()`: Salva as alterações feitas no modal

## main.js
Arquivo principal que inicializa a aplicação:
- Configura os event listeners para:
  - Botão de cadastro
  - Tabela de dados (para edição e exclusão)
  - Botão de salvar edição no modal
  - Botão de fechar modal
  - Botão de impressão

## form.js
Gerencia o formulário de cadastro:
- `isValidFields()`: Verifica se todos os campos do formulário são válidos
- `clearFields()`: Limpa todos os campos do formulário
- `saveClient()`: Salva um novo cliente no banco de dados 