# Testes Automatizados com Cypress

Este repositório contém a configuração e os testes automatizados utilizando o **Cypress** para validar o fluxo completo de compra em uma aplicação web. O objetivo é garantir que o processo de login, navegação pela lista de produtos, gerenciamento do carrinho e finalização da compra estejam funcionando corretamente.

## Pré-requisitos

Antes de começar, certifique-se de que os seguintes itens estão instalados:

- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn** (gerenciador de pacotes)
- Um editor de código, como **Visual Studio Code**

## Clonar o Repositório

Clone o repositório do projeto com o comando:

```bash
git clone https://github.com/feliperuedas19/desafio-tecnico.git
cd desafio-tecnico
```

## Instalar Dependências

Execute o comando abaixo para instalar as dependências do Cypress e outras bibliotecas necessárias:

- **npm install**

## Abrir o Cypress

Para iniciar o Cypress e verificar se a instalação foi bem-sucedida, use o comando:

- **npx cypress open**

Isso abrirá a interface gráfica do Cypress, onde você poderá visualizar e executar os testes.

## Estrutura do Projeto

A estrutura básica do projeto criada ao iniciar o Cypress é a seguinte:

cypress/fixtures: Arquivos JSON para dados simulados.
cypress/integration: Local onde os testes devem ser escritos.
cypress/support: Arquivos de configuração e comandos customizados.

## Organização dos Arquivos

Páginas: Contém as classes que interagem com os elementos de cada página.

support/pages/Login.js
support/pages/Produtos.js
support/pages/Carrinho.js
support/pages/Checkout.js

Elementos: Seletores de elementos específicos para cada página.

support/pages/elements.js

## Execução dos Testes

### Executar no Modo Interativo
Para rodar os testes com a interface gráfica, execute o seguinte comando:

- **npx cypress open**

Na interface que abrir, selecione o arquivo fluxoCompleto.spec.js para executar os testes.

### Executar via Linha de Comando
Se preferir executar os testes diretamente no terminal, use:

- **npx cypress run**

Isso executará todos os testes automaticamente, sem a necessidade da interface gráfica.

## Passos dos Testes Realizados em Gherkin

### Feature: Login no Sistema

**Como** usuário da aplicação,  
**Quero** realizar o login no sistema,  
**Para** acessar as funcionalidades disponíveis.

#### Cenários:

- **Login com credenciais válidas**  
  - **Dado** que estou na página de login,  
  - **Quando** eu insiro o usuário `standard_user` e a senha `secret_sauce`,  
  - **E** clico no botão de login,  
  - **Então** devo ser redirecionado para a página principal,  
  - **E** o sistema deve permitir o acesso.

- **Login com senha inválida**  
  - **Dado** que estou na página de login,  
  - **Quando** eu insiro o usuário `standard_user` e a senha `123456`,  
  - **E** clico no botão de login,  
  - **Então** o sistema deve bloquear o acesso,  
  - **E** exibir a mensagem de erro: `Epic sadface: Username and password do not match any user in this service`.

- **Login com usuário bloqueado**  
  - **Dado** que estou na página de login,  
  - **Quando** eu insiro o usuário `locked_out_user` e a senha `secret_sauce`,  
  - **E** clico no botão de login,  
  - **Então** o sistema deve bloquear o acesso,  
  - **E** exibir a mensagem de erro: `Epic sadface: Sorry, this user has been locked out`.

---

### Feature: Verificação da Lista de Produtos

**Como** usuário da aplicação,  
**Quero** verificar se a lista de produtos está sendo exibida corretamente,  
**Para** garantir que todos os produtos disponíveis estão visíveis na página.

#### Cenário:

- **Verificação da lista de produtos**  
  - **Dado** que estou na página de produtos,  
  - **Quando** a lista de produtos for carregada,  
  - **Então** o título da lista de produtos deve ser `Products`,  
  - **E** a lista de produtos deve conter 6 itens,  
  - **E** o primeiro item da lista deve ter 1 elemento.

---

### Feature: Gerenciamento de Itens no Carrinho

**Como** usuário da aplicação,  
**Quero** adicionar e remover itens do meu carrinho,  
**Para** garantir que a quantidade de itens no carrinho seja atualizada corretamente.

#### Cenários:

- **Adicionar um item ao carrinho**  
  - **Dado** que estou na página de produtos,  
  - **Quando** eu clicar no primeiro item da lista,  
  - **E** clicar no botão "Add to Cart",  
  - **Então** o carrinho deve exibir 1 item.

- **Adicionar múltiplos itens ao carrinho**  
  - **Dado** que estou na página de produtos,  
  - **Quando** eu clicar no item "Sauce Labs Backpack",  
  - **E** clicar no item "Sauce Labs Bolt T-Shirt",  
  - **E** clicar no item "Sauce Labs Onesie",  
  - **Então** o carrinho deve exibir 3 itens.

- **Remover um item do carrinho**  
  - **Dado** que estou com itens no carrinho,  
  - **Quando** eu clicar no botão "Remove" para um item,  
  - **Então** o carrinho não deve mais exibir esse item,  
  - **E** o carrinho deve exibir 0 itens.

- **Remover um item específico e atualizar o carrinho**  
  - **Dado** que estou com 3 itens no carrinho,  
  - **Quando** eu clicar no botão "Remove" do item "Sauce Labs Bolt T-Shirt",  
  - **Então** o carrinho deve exibir 2 itens restantes.

---

### Feature: Finalização da Compra

**Como** usuário da aplicação,  
**Quero** preencher meus dados e finalizar a compra,  
**Para** garantir que o processo de checkout esteja correto e que o total final seja calculado corretamente.

#### Cenário:

- **Finalizar a compra com sucesso**  
  - **Dado** que estou na página do carrinho,  
  - **Quando** eu clicar no botão "Checkout",  
  - **E** eu preencher os campos "First Name", "Last Name" e "Postal Code" com dados válidos,  
  - **E** eu clicar no botão "Continue",  
  - **Então** o sistema deve calcular o subtotal, a taxa e o total corretamente,  
  - **E** o valor total deve ser igual ao subtotal mais a taxa,  
  - **E** eu devo clicar no botão "Finish" para finalizar a compra,  
  - **Então** o sistema deve exibir o botão "Back Home",  
  - **Quando** eu clicar no botão "Back Home",  
  - **Então** eu devo ser redirecionado de volta para a página de produtos,  
  - **E** a página de produtos deve ser exibida com o título "Products".