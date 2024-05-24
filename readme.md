# 💻 Sobre o Projeto

O projeto é um desafio do curso **Formação Node.js Fundamentals** da [DIO](https://www.dio.me/), onde desenvolvemos a aplicação e através do terminal, ter uma interação com o usuário e gerar um **QRCode** ou uma **Senha**.

---

## ⚙️ Executando o projeto

Para ver o projeto funcionando, você pode clonar esse repositório e abrir na sua IDE.

Para funcionar, é preciso criar um arquivo **.env** na raiz do projeto com as variáveis:

```
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=12
```

As variáveis: **UPPERCASE_LETTERS, LOWERCASE_LETTERS, NUMBERS, SPECIAL_CHARACTERS**, são as opções de caracteres utilizadas na **criação da senha**.

Caso **não** queria alguma das opções na **criação de senha**, basta trocar o valor da variável para **false**.

A variável: **PASSWORD_LENGTH** é quantidade de caracteres que você deseja na sua senha.

Criado o arquivo **.env**, é necessário utilizar o comando no terminal:

_O terminal deve estar aberto na pasta principal do projeto._

```
npm run prestart
```

Esse comando faz o download das dependências utilizadas no projeto.

Agora sim, você pode ver o projeto funcionando! Utilize o comando para iniciar o projeto no terminal:

```
npm run start
```

---

## 📦 Dependências utilizadas

-   [Chalk](https://www.npmjs.com/package/chalk)
-   [Prompt](https://www.npmjs.com/package/prompt)
-   [Qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal)

---

## 📚 Aprendizado

O projeto destacou a importância da modularização, separação de responsabilidades das funções, gerenciamento de variáveis de ambiente e estruturação do código. Esses aspectos facilitam a leitura e compreensão do código, um conhecimento que pretendo continuar aplicando em futuros projetos.
