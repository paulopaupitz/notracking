# Paleta de Cores do Projeto

Esta é a documentação completa do sistema de cores do projeto. A paleta está organizada em quatro seções principais para garantir clareza e fácil consulta.
Essas cores apresentadas são do modo claro(LightMode), as cores do modo escuro (DarkMode) apresentam opacidade de 40% ~ 60% de branco
sobre elas, gerando uma cor menos saturada e agrádavel aos olhos. TODAS as cores passam pelo teste de acessibilidade da WebAIM Contrast Checker
respeitando o contraste mínimo de 4.5:1 para acessibilidade (WCAG AA).

## 1. Cores Base (Paleta Fundamental)

As fundações da paleta, organizadas em gradientes que vão do tom mais claro (100) ao mais escuro (900). Esta paleta é a fonte para as cores semânticas usadas nos temas.
|-----------|---------------------------------------|----------------------------------------|---------------------------------------|
|   Nível   | Azul Escuro                           | Azul Marinho                           | Azul Cinza                            |
| :-------: | :------------------------------------ | :------------------------------------- | :------------------------------------ |
|  **100**  | `--cor-azulEscuro-100`<br>`#f7fafc`   | `--cor-azulMarinho-100`<br>`#e6e7f2`   | `--cor-azul-cinza-100`<br>`#f1f3f5`   |
|  **200**  | `--cor-azulEscuro-200`<br>`#edf2f7`   | `--cor-azulMarinho-200`<br>`#c0c4e4`   | `--cor-azul-cinza-200`<br>`#dee2e6`   |
|  **300**  | -                                     | `--cor-azulMarinho-300`<br>`#98a0d6`   | `--cor-azul-cinza-300`<br>`#c9cfd7`   |
|  **400**  | `--cor-azulEscuro-400`<br>`#a0aec0`   | `--cor-azulMarinho-400`<br>`#6d7bc6`   | `--cor-azul-cinza-400`<br>`#b0b8c1`   |
|  **500**  | -                                     | `--cor-azulMarinho-500`<br>`#4255b6`   | `--cor-azul-cinza-500`<br>`#949da8`   |
|  **600**  | -                                     | `--cor-azulMarinho-600`<br>`#354492`   | `--cor-azul-cinza-600`<br>`#778390`   |
|  **700**  | `--cor-azulEscuro-700`<br>`#2d3748`   | `--cor-azulMarinho-700`<br>`#26316d`   | `--cor-azul-cinza-700`<br>`#5c6877`   |
|  **800**  | -                                     | `--cor-azulMarinho-800`<br>`#192049`   | `--cor-azul-cinza-800`<br>`#404d5c`   |
|  **900**  | `--cor-azulEscuro-900`<br>`#1a202c`   | `--cor-azulMarinho-900`<br>`#0b0e29`   | `--cor-azul-cinza-900`<br>`#263240`   |
| --------- | ------------------------------------- | -------------------------------------- | ------------------------------------- |

### \_ Core Puras \_/

--cor-Preto: #000000;
--cor-Branca: #f0f6f7, #f8fafc;

## 2. Cores de Layout e UI

Variáveis que aplicam as cores base a elementos específicos da interface, como fundos, contêineres, tabelas e cards.

### Fundos e Estrutura

--cor-fundo-body: var(--cor-azul-cinza-300);`#c9cfd7`
--cor-fundo-bodyLogin: var(--cor-azul-cinza-200);`#dee2e6`
--cor-fundo-nav: var(--cor-azul-cinza-100);`#f1f3f5`
--cor-fundo-header: var(--cor-azul-cinza-800);`#404d5c`
--cor-fundo-main: #f8fafc;
--cor-fundo-input: var(--cor-azulEscuro-200);`#edf2f7`

### Containers, Modais e SideBar

--cor-CadastrosContainer: var(--cor-azul-cinza-200);`#dee2e6`
--cor-CadModal: var(--cor-azul-cinza-300);`#c9cfd7`
--color-ContainerLogin: var(--cor-azulEscuro-400);`#a0aec0`
--cor-borda-sidebar: var(--cor-azul-cinza-400);`#b0b8c1`
--cor-fundo-sidebar-hover:var(--cor-azul-cinza-500);`#949da8`
--cor-activeHover: var(--cor-azul-cinza-800);`#404d5c`

### Contêineres, Modais e Sidebar

--cor-CadastrosContainer: var(--cor-azul-cinza-200);`#dee2e6`
--cor-CadModal: var(--cor-azul-cinza-300);`#c9cfd7`
--color-ContainerLogin: var(--cor-azulEscuro-400);`#a0aec0`
--cor-borda-sidebar: var(--cor-azul-cinza-400);`#b0b8c1`
--cor-fundo-sidebar-hover:var(--cor-azul-cinza-500);`#949da8`
--cor-activeHover: var(--cor-azul-cinza-800);`#404d5c`
Tabelas e Cards
CSS

### /_ Tabelas _/

--cor-linhas-tabela: #c9cfd7;
--cor-tabela-hover: var(--cor-azul-cinza-300);`#c9cfd7`
--cor-thead-table: var(--cor-azul-cinza-500);`#949da8`

### /_ Cards _/

--cor-fundo-cards: var(--cor-azul-cinza-200);`#dee2e6`
--cor-cardH1-azul: #326ab2;
--cor-cardH1-verde: #2e942f;
--cor-cardH1-vermelho: #fb0b0bfb;
--cor-cardP-azul: #326ab2;
--cor-cardP-verde: #267d28;
--cor-cardP-vermelho: #e00000;

### 1. Cores de Tipografia

Cores dedicadas para textos em diferentes contextos (claros, escuros, secundários) e placeholders.

--cor-texto-escuro: #000000;
--cor-texto-claro: #f0f6f7;
--cor-textoPS-claro: #f0f6f7;
--cor-texto-secundario: #362b2b;
--cor-textoActiveHover: #000000;
--cor-CadModal-texto: var(--cor-azul-cinza-900);`#263240`
--btnImprimir-txt: #f0f6f7;
--btnTxtEscuro-color: #212529;
--btnTxtClaro-color: #f0f6f7;
--cor-placeholders: #00000081;

## 2. Cores Semânticas: Light vs. Dark

Aqui comparamos como as variáveis são aplicadas em cada tema.

### Fundos e Estrutura

|---------------------------|--------------------|-------------------|
| Variável                  | Valor Light Mode   | Valor Dark Mode   |
| :------------------------ | :----------------- | :---------------- |
| `--cor-fundo-body`        | `#c9cfd7`          | `#121212`         |
| `--cor-fundo-bodyLogin`   | `#dee2e6`          | `#232a32`         |
| `--cor-fundo-main`        | `#f8fafc`          | `#232a32`         |
| `--cor-fundo-header`      | `#404d5c`          | `#1a202c`         |
| `--cor-fundo-nav`         | `#f1f3f5`          | `#1a202c`         |
| `--cor-fundo-input`       | `#edf2f7`          | `#34495e`         |
| ------------------------- | ------------------ | ----------------- |

### Contêineres, Sidebar e Tabelas

|-------------------------------|--------------------|-------------------|
| Variável                      | Valor Light Mode   | Valor Dark Mode   |
| :---------------------------- | :----------------- | :---------------- |
| `--color-ContainerLogin`      | `#a0aec0`          | `#2f3a48`         |
| `--cor-CadastrosContainer`    | `#dee2e6`          | `#263240`         |
| `--cor-CadModal`              | `#c9cfd7`          | `#2d3748`         |
| `--cor-borda-sidebar`         | `#b0b8c1`          | `#2d3748`         |
| `--cor-fundo-sidebar-hover`   | `#949da8`          | `#2d3748`         |
| `--cor-activeHover`           | `#404d5c`          | `#dee2e6`         |
| `--cor-thead-table`           | `#949da8`          | `#1a202c`         |
| `--cor-tabela-hover`          | `#c9cfd7`          | `#404d5c`         |
| ----------------------------- | ------------------ | ----------------- |

### Cards (Status)

|---------------------------|--------------------|-------------------|
| Variável                  | Valor Light Mode   | Valor Dark Mode   |
| :------------------------ | :----------------- | :---------------- |
| `--cor-fundo-cards`       | `#dee2e6`          | `#2d3748`         |
| `--cor-cardH1-azul`       | `#326ab2`          | `#99bbec`         |
| `--cor-cardH1-verde`      | `#2e942f`          | `#79d48a`         |
| `--cor-cardH1-vermelho`   | `#fb0b0b`          | `#f88080`         |
| ------------------------- | ------------------ | ----------------- |

### Tipografia

|--------------------------|--------------------|-----------------------------------|
| Variável                 | Valor Light Mode   | Valor Dark Mode                   |
| :----------------------- | :----------------- | :-------------------------------- |
| `--cor-texto-escuro`     | `#000000`          | `#eaecee`                         |
| `--cor-texto-claro`      | `#f0f6f7`          | `#000000` (`#1a252f` em botões)   |
| `--cor-CadModal-texto`   | `#263240`          | `#eaecee`                         |
| `--cor-placeholders`     | `#00000081`        | `#eaecee`                         |
| ------------------------ | ------------------ | --------------------------------- |

---

## 3. Cores de Interação: Botões

Conjunto detalhado de cores para botões, definindo seus diferentes estados (padrão, hover, pressionado).

### Botão Azul (Primário)

# Comparação de Cores dos Botões (Light vs. Dark Mode)

|------------------------------|--------------------------|--------------------|
| Variável                     | Valor Light Mode         | Valor Dark Mode    |
| ---------------------------- | ------------------------ | -------------------|
| **Botão Azul (Primário)**    |                          |                    |
| `--btnAzul-color`            | `#2c3e50`                | `#3498db`          |
| `--btnAzul-hover`            | `#34495e`                | `#5dade2`          |
| `--btnAzul-pressed`          | `#1a252f`                | `#2e86c1`          |
| ---------------------------- | ------------------------ | -------------------|
| **Botão Branco**             |                          |                    |
| `--bntBranco-color`          | `#e9ecef`                | `#34495e`          |
| `--bntBranco-hover`          | `#d3d9df`                | `#4a6572`          |
| `--bntBranco-pressed`        | `#c0c7cf`                | `#2c3e50`          |
| `--bntBranco-borda`          | `#ced4da`                | `#4a6572`          |
| ---------------------------- | ------------------------ | -------------------|
| **Botão Editar**             |                          |                    |
| `--btnEditar-color`          | `#70c930`                | `#2ecc71`          |
| `--btnEditar-hover`          | `#54ac23`                | `#58d68d`          |
| `--btnEditar-pressed`        | `#388e3c`                | `#2ecc71`          |
| ---------------------------- | ------------------------ | -------------------|
| **Botão Excluir**            | ------------------------ | -------------------|
| `--btnExcluir-color`         | `#ff3b2d`                | `#e74c3c`          |
| `--btnExcluir-hover`         | `#f10a21`                | `#ec7063`          |
| `--btnExcluir-pressed`       | `#f10a21`                | `#c0392b`          |
| ---------------------------- | ------------------------ | -------------------|
| **Botão Imprimir**           | ------------------------ | -------------------|
| `--btnImprimir-color`        | `#d35400`                | `#ffa71b`          |
| `--btnImprimir-hover`        | `#e67e22`                | `#f5a623`          |
| `--btnImprimir-pressed`      | `#a04000`                | `#e18e0a`          |
| `--btnImprimir-txt`          | `#f0f6f7`                | `#252d3c`          |
| ---------------------------- | ------------------------ | -------------------|


Links de referência:
https://m3.material.io/styles/icons/designing-icons


Extensão: VisBug

Livros de referência: 


 single responsibility