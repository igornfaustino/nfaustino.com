---
title: Criando uma criptomoeda
date: 2021-10-02
description: Criando a primeira criptomoeda do zero utilizando a blockchain do ethereum de forma facil e rápida.
---

Comecei a estudar mais sobre desenvolvimento de aplicações blockchain recentemente, e por mais que exista muito conteúdo presente na internet sobre o assunto, achei poucas coisas juntando toda a informação necessária, ainda mais para um completo iniciante no assunto como eu.
Por isso estou criando esse artigo para juntar as informações que adquiri me aprofundando no assunto.

## O que vamos construir

A principal aplicação de blockchain atualmente são as criptomoedas. E por mais que uma blockchain não se limite apenas a isso, acho interessante o processo de construção de uma, pois dá uma boa base para entender o fluxo de desenvolvimento e de uso da blockchain.
Nesse projeto utilizaremos a blockchain do ethereum.

## Pré requisitos

- NodeJS
- Extensão do metamask instalada

## Ferramentas

Vamos passar sobre todas as bibliotecas e ferramentas que serão necessárias para construir esse projeto.

### Ambiente de desenvolvimento ethereum

Quando desenvolvemos os smart contracts, sendo basicamente as aplicações que rodam diretamente na blockchain, precisamos de uma forma para executá-los localmente em nosso ambiente de desenvolvimento, sem precisar lidar com o ambiente real.

Para este projeto, vamos utilizar o framework Hardhat, que permite o desenvolvimento de aplicações ethereum fullstack. Porem outras ferramentas semelhantes também podem ser utilizadas.

### Metamask

O metamask ajuda a gerenciar contas e a conexão do usuário com a blockchain. Quando um usuário está conectado com o metamask, é possível interagir diretamente com a API do ethereum via o navegador (`window.ethereum`).
Todas as ações de transações serão requeridas ao usuário pelo próprio metamask.
Para manter o projeto o mais simples e possível, vamos utilizar apenas a extensão do metamask para interagir com a nossa blockchain, (podemos construir um frontend em posts futuros).

## Começando o desenvolvimento

Crie a pasta do seu projeto e inicie seu projeto node:

```shell
$ npm init
```

E vamos instalar as dependencias necessarias:

```shell
$ npm i -D hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
```

```shell
$ npx hardhat
```

Selecione a opção `create a basic sample project` para permitir que o hardhat crie os arquivos de configuração necessária.

Apos a execução do comando, você deve encontrar os seguintes arquivos dentro do seu projeto:

- **hardhat.config.js**: O arquivo de configuração do hardhat, onde pode ser adicionado plugins e outras configurações.
- **scripts**: Uma pasta contendo scripts executados pelo hardhat, aqui é onde adicionaremos o nosso script de deploy.
- **test**: Uma pasta contendo um exemplo de script de teste
- **contracts**: Pasta onde ficam os nossos contratos

Por conta de uma configuração do metamask, precisamos atualizar o chain ID da nossa aplicação para o 1337. Isso acontece porque o metamask assume que esse é o ID de todas as redes locais.
Para realizar isso, vamos editar o arquivo `hardhat.config.js` e atualizar o `module.exports` para algo similar a isto:

```js
module.exports = {
	solidity: '0.8.4',
	networks: {
		hardhat: {
			chainId: 1337,
		},
	},
};
```

### Entendendo nosso contrato

Primeiramente, vamos entender o smart contract de exemplo do hardhat.

```sol
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    string private greeting;

    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
```

Um pouco sobre a sintaxe, os smart contracts do ethereum são escritos utilizando a linguagem solidity e a primeira linha é importante para indicar qual versão da linguagem está sendo utilizada para escrever esse contrato. Contratos, após irem para a blockchain nunca poderão ser atualizados, por conta disso é importante garantir que atualizações da linguagem não quebrem nossa aplicação em produção.

A seguir temos um import de alguns auxiliares do hardhat e a criação do contrato. O contrato funciona como uma classe, contendo um construtor e algumas funções disponibilizadas para uso.
O construtor é executado apenas quando o contrato é criado sendo utilizado para realizar as configurações iniciais do contrato.

Antes de seguir para as funções, temos que entender um pouco das 2 operações permitidas em uma blockchain: leitura e escrita.
Quando realizamos uma operação de leitura estamos apenas consultando um valor da blockchain e nenhum dado é alterado, porem quando escrevemos um dado estamos, na verdade, criando uma transação que precisa ser executada pela rede para poder ser adicionada de fato, e para isto precisamos pagar a taxa de operação da rede, que no nosso caso, é cobrado em ethereum.
Calma, não precisa sair desse artigo por enquanto. O hardhat disponibiliza uma rede de testes com 100 000 ethereum de teste para nós (bem que podiam ser ethereuns reais).

Mas voltando ao código do contrato, repare na função `greet` a presença da palavra-chave `view`, essa palavra conta a rede que não será realizado nenhuma operação de escrita dentro dela, portanto, não será disparado nenhuma transação para executá-la. Já a função `setGreetings`, por não conter a palavra `view`, será criado uma transação ao tentar executá-la.

### Criando nossa moeda

Agora que entendemos a estrutura básica de um contrato, vamos criar o nosso próprio. Para isso crie um arquivo na pasta `contracts` chamado `Token.sol`. Agora vamos adicionar a estrutura básica do nosso contrato:

```sol
pragma solidity ^0.8.0;

contract Token {

}
```

Vamos adicionar algumas propriedades na nossa moeda. Para isso basta definir as propriedades desejadas de forma pública.

```sol
...

contract Token {
    string public name = "Tutorial Token";
    string public symbol = "TT";
    uint256 public totalSupply = 1000000;
}
```

A propriedade `name` e `symbol` são responsáveis por definir o nome e o símbolo da moeda respectivamente e a propriedade `totalSupply` define a quantidade total de moedas existentes até o momento.

**É importante notar que para o nosso exemplo de uma crypto moeda, os nomes devem ser sempre os mesmos, por fazer parte de um padrão, falarei um pouco mais sobre isso ao final do artigo**

Vamos agora criar o construtor do nosso contrato, aqui vamos dar todas as nossas moedas para o primeiro usuário, assim, ele vai ser o responsável por distribuir os valores posteriormente.

```sol
...

contract Token {
    string public name = "Tutorial Token";
    string public symbol = "TT";
    uint256 public totalSupply = 1000000;
    mapping(address => uint256) balances;

    constructor() {
        balances[msg.sender] = totalSupply;
    }
}
```

Para isto, criamos uma hash table que vai mapear cada endereço, que representa o endereço da carteira do usuario, ao valor de moedas que ele possui. E dentro do construtor, vamos dar todas as moedas ao primeiro usuário. Agora precisamos definir as operações que podem ser realizadas dentro do nosso contrato, ou seja, as funções. Para o nosso exemplo, vamos ter apenas duas operações, `transfer` (transferir) e `balanceOf` (verificar o saldo de um usuário).

```sol
contract Token {
	...

    function transfer(address to, uint256 amount) external {
        require(balances[msg.sender] >= amount, "Saldo insuficiente");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}
```

A função `transfer` verifica se o usuário possui saldo o suficiente para fazer a transferência, e realiza a operação, enquanto a função `balanceOf` apenas devolve a quantidade de tokens do usuário.

## Rodando nosso contrato

Agora, precisamos realizar o deploy do nosso script para a nossa rede de teste. Para isto, vamos utilizar a pasta scripts criada pelo hardhat. Vamos então renomear o script de exemplo chamado `sample-script.js` para `deploy.js`. Este script já realiza o deploy do contrato padrão, então vamos apenas alterar para no lugar realizar o deploy do nosso script.

```js
const hre = require('hardhat');

async function main() {
	const Token = await hre.ethers.getContractFactory('Token');
	const token = await Token.deploy();

	await token.deployed();

	console.log('Token deployed to:', token.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
```

Agora que temos o script de deploy pronto, vamos levantar nossa rede de testes utilizando o comando

```shel
$ npx hardhat node
```

Quando voce rodar esse comando, vai reparar que o hardhat cria para gente varias contas de teste, cada uma com 10 000 ETH para serem utilizadas. Agora em outro terminal, vamos rodar o comando para realizar o deploy do nosso contrato

```shell
$ npx hardhat run scripts/deploy.js --network localhost
```

Aqui a informação importante que temos, é o endereço da nossa moeda.

![Token deployed](/img/token_deployed.png)

Vamos agora utilizar a extensão do metamask em nosso navegador. Primeiramente, precisamos nos conectar a nossa rede local

![Metamask localhost](/img/metamask_localhost.png)

Após isso, vamos importar uma das contas criadas pelo hardhat, utilizando o valor da private key

![accounts](/img/test_accounts.png)

Para isto, clique no botão, importar conta dentro do metamask e coloque a chave privada

![import account](/img/import_account.png)

Pronto, vamos agora adicionar nossa moeda nessa conta, utilizando o botão "Adicionar Token"

![add token](/img/add_token.png)

Na próxima tela, vamos colocar o endereço da nossa moeda na rede

![add token address](/img/add_token_address.png)

E ao confirmar a operação, nosso usuário já possui os 10 000 tokens iniciais da nossa moeda. Agora, podemos realizar os mesmos passos para importar um usuário diferente do metamask, e realizar transferências entre eles. Ao tentar realizar uma transferência entre usuários, o metamask irá mostrar uma tela de confirmação, alertando o preço da taxa em ethereum que será utilizada para realizar a operação, além do valor que será transferido para o novo usuário.

![confirm](/img/confirm_transaction.png)

## Falando um pouco sobre o ERC-20

Agora que temos uma moeda funcional, podemos falar brevemente sobre o ERC-20. O ERC-20 define um padrão a ser seguido por todas as moedas similares dentro da blockchain do ethereum. Esses padrões são importantes para prever como novas moedas funcionam, de forma que moedas seguindo o mesmo padrão podem ser compativeis entre elas.
Por conta desse padrão, que o metamask conseguiu identificar nossa moeda de forma simples, pois seguimos alguns dos padrões propostos. O padrão completo define 6 funções obrigatorias e 3 opcionais que uma moeda precisa seguir para poder ser chamada de um token ERC-20, sendo estes as seguintes funções

```solidity
function name() public view returns (string)
function symbol() public view returns (string)
function decimals() public view returns (uint8)
function totalSupply() public view returns (uint256)
function balanceOf(address _owner) public view returns (uint256 balance)
function transfer(address _to, uint256 _value) public returns (bool success)
function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)
function approve(address _spender, uint256 _value) public returns (bool success)
function allowance(address _owner, address _spender) public view returns (uint256 remaining)
```

## Conclusão

Nesse artigo acompanhamos o desenvolvimento de uma cryptomoeda simples, na qual foi possivel observar o funcionamento basico de uma aplicação rodando em uma blockchain, alem de detalhes basicos da linguagem.
Eu espero que esse artigo de uma base inicial pratica para construir novos projetos futuros.
