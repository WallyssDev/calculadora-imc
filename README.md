# Calculadora de IMC

Projeto desenvolvido para praticar manipulação do DOM, eventos de formulário e validação utilizando JavaScript.

A aplicação recebe altura e peso do usuário, calcula o IMC e retorna a classificação correspondente.

## Funcionalidades

* Cálculo automático do IMC
* Validação dos dados inseridos
* Conversão automática de altura em centímetros
* Exibição da classificação do resultado
* Limpeza do formulário após envio
* Interface responsiva

## Tecnologias

* HTML
* CSS
* JavaScript

## Como executar

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/calculadora-imc.git
```

Abra o arquivo `index.html` no navegador.

Ou utilize a extensão **Live Server** no VS Code.

## Estrutura

```bash
calculadora-imc/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Lógica utilizada

O IMC é calculado através da fórmula:

```text
IMC = peso / (altura × altura)
```

Classificações:

* Abaixo de 18.5 → Abaixo do peso
* 18.5 até 24.9 → Peso normal
* 25 até 29.9 → Sobrepeso
* 30 até 34.9 → Obesidade grau 1
* 35 até 39.9 → Obesidade grau 2
* Acima de 40 → Obesidade grau 3

## Objetivo

Esse projeto foi criado como prática de JavaScript para trabalhar:

* Eventos
* Funções
* Condicionais
* Manipulação do HTML via DOM
* Organização de código

## Melhorias futuras

* Adicionar histórico de cálculos
* Implementar modo escuro
* Melhorar animações
* Salvar dados localmente

---

Desenvolvido por Wallace Sousa.
