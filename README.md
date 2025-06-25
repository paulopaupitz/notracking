# InsightBridge

## Introdução
InsightBridge é uma aplicação web desenvolvida para gerenciar informações de clientes, oferecendo funcionalidades para cadastro de clientes, visualização de dados através de um painel (dashboard) e geração de relatórios. O sistema visa fornecer uma plataforma abrangente e intuitiva para acompanhar os dados dos clientes, incluindo detalhes pessoais, interesses, sentimentos e valores.

## Funcionalidades

### Autenticação de Usuário
* **Página de Login**: Os usuários podem fazer login com seu e-mail e senha. Ambos os campos são obrigatórios, e um alerta será exibido se não forem preenchidos.
* **Cadastro de Administrador**: Permite que novos administradores se registrem no sistema.

### Gerenciamento de Clientes (CRUD)
* **Cadastro de Clientes**:
    * Uma página dedicada para o registro de novos clientes.
    * Inclui um campo "Nome" obrigatório, com um aviso se não for preenchido.
    * O processo de registro é estruturado em quatro etapas: Fatos e Dados, Interesses, Sentimentos e Valores, utilizando vários tipos de entrada, como campos de texto e áreas de texto e checkbox.
    * Os dados do cliente são armazenados localmente.
* **Listagem de Clientes (Dashboard)**:
    * O painel exibe uma lista de clientes registrados em formato de tabela.
    * As linhas mudam de cor ao passar o mouse para uma melhor experiência do usuário.
    * A funcionalidade para editar e excluir registros de clientes está disponível.
* **Funcionalidade de Edição**: Os clientes podem ser editados através de um modal, que é preenchido com os dados existentes do cliente para modificação.
* **Funcionalidade de Exclusão**: Permite a remoção de registros de clientes do localstorage.

### Dashboard e Relatórios
* **Visão Geral do Dashboard**: Apresenta "dados estatísticos"(ainda estáticos, não implementado a dinamicidade entre eles) , incluindo o total de cadastros, cadastros no último mês e cadastros inativos. Mínimo de 3 elementos são exibidos.
* **Funcionalidade de Busca**: Permite a busca dentro da lista de clientes na página de relatórios.
* **Página de Relatórios**: Fornece uma lista detalhada de clientes com opção para impressão.
* **Funcionalidade de Impressão**: Um botão de impressão aciona a interface de impressão do navegador, excluindo especificamente a barra lateral, cabeçalho e outros elementos que não a lista na saída impressa usando CSS Media Print.

### Interface do Usuário e Experiência
* **Modo Escuro**: Um interruptor permite que os usuários alternem entre temas claros e escuros, melhorando o conforto visual, com todos os elementos validados pelo WebAIM Contrast Checker.
* **Tema**: A aplicação utiliza uma paleta de cores consistente com usos específicos para cada cor, a fim de manter uma aparência limpa e moderna:
    * `#2C3E50`: Usado para cabeçalhos, navegação, rodapés, botões principais e ícones/textos proeminentes.
    * `#E0E0E0`: Aplicado a fundos de cartões, fundos de listas e campos de entrada de formulários.
    * `#F5F5F5`: Utilizado para o fundo principal da página e espaçamento entre contêineres.
    * `#B0B8C1`: Usado para efeitos de "hover" em botões, divisores, destaques secundários e títulos de seções.
    * `#FFFFFF`: Empregado para fundos de modais e áreas que exigem alto contraste.

## Primeiros Passos

Para ter uma cópia do projeto funcionando em sua máquina local, siga estes passos:

### Instalação
1.  **Clone o repositório**:
    ```bash
    git clone <URL_DO_REPOSITORIO>
    ```
2.  **Navegue até o diretório do projeto**:
    ```bash
    cd insight-bridge
    ```

### Executando a Aplicação
Como esta é uma aplicação front-end, você pode simplesmente abrir o arquivo `index.html` em seu navegador web.

## Demonstração Online

Você pode acessar uma demonstração online do projeto [aqui](https://paulopaupitz.github.io/insight-bridge/)
