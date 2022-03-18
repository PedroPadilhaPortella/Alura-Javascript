https://medium.com/xp-inc/regex-um-guia-pratico-para-express%C3%B5es-regulares-1ac5fa4dd39f

cpf com . e - opcionais, como em 405.751.068-08, 40575106808 ou 405.751.068.08

\d{3}\.?\d{3}\.?\d{3}[-.]?\d{2}

regex de tags html

No <code>for</code>, o valor de <code>i</code> começa de zero e é incrementado a cada volta enquanto <code>i < 10</code>, portando o bloco de código do for é executado 10 vezes.

</?code>

regex para horario nesse formato: 19h32min16s
\d{2}h\d{2}min\d{2}s


11 de Abril de 1995
[1-3]?\d\s+de\s+[A-Z][a-zç]{3,8}\s+de\s+[12]\d{3}

var DIA  = "[0123]?\d"; 
var _DE_ = "\s+de\s+";
var MES  = "[A-Za-z][a-zç]{1,8}";
var ANO  = "[12]\d{3}";
var stringRegex = DIA + _DE_ +  MES + _DE_ + ANO;
var objetoRegex  = new RegExp(stringRegex, 'g');


Quantifiers
? - zero ou uma vez.
* - zero ou mais vezes.
+ - uma ou mais vezes.
{n} - exatamente n vezes.
{n,} - no mínimo n vezes.
{n,m} - no mínimo n vezes, no máximo m vezes.

Caracteres especiais
\t é um tab.
\r é carriage return.
\n é newline.
\f é form feed.
\s significa whitespace e é um atalho para [ \t\r\n\f].


Classes de letras
Para descrever o mês, devemos usar uma nova classe de letras, seguem alguns exemplos:

[A-Z] significa de A até Z, sempre maiúscula.
[a-z] significa de a até z, sempre minúscula,
[A-Za-z] significa A-Z ou a-z.
[abc] significa a, b ou c.
\w significa word char e é uma atalho para [A-Za-z0-9_]


pegar o nome e a nota dos alunos que tenham a nota entre 7.2 e 7.9
9.8 - Robson, 7.1 - Teresa, 4.5 - Armênio, 6.5 - Zulu, 7.7 - Stefania, 7.8 - João, 5.0 - Romeu, 7.2 - Pompilho, 3.1 - Reinaldo, 7.3 - Bernadete, 4.7 - Cinério 

7\.[2-9]\s+-\s+[^,]+ ou 7\.[2-9]\s+-\s+[A-Z][a-zãç]+


Faça com que selecione o nome e a nota dos alunos que tenham a nota entre 7.5 e 7.9, independente de espaços em branco:
10 - Bruce, 9.5 - Miranda, 7.9    - Bob, 10 - Zimbabue, 7.5 - Bety
[7]\.[5-9]\s+-\s+\w+


Escreva uma expressão regular que faça match apenas com as palavras GARROTE, SERROTE e ROTEIRO:
BALEIRO GARROTE SERROTE GOLEIRO ROTEIRO 
\w*ROT\w+


O username precisa ser da seguinte forma:
O limite é de 10 caracteres;
O primeiro caractere deve ser uma letra do alfabeto, não pode ser um número;
A partir do segundo caractere podemos ter letras maiúsculas, minúsculas e números;
@Pattern(regexp="[a-zA-Z][a-zA-Z0-9]{0,9}")



Word boundary - Âncoras
denise teste, 987.654.321-00,28 de Dezembro de 1991,(31)45562712,SCS Qd. 8 Bl. B-50,11,70333-900,Rio Grande
\bde\b

aaa aaaa aaa aaaa aaa
\ba{3}\b

## Validação de Emails
Expressão:
`^([\w-]\.?)+@([\w-]+\.)+([A-Za-z]{2,4})+$`

## Validação de email da Alura
> O email deve ter um @ e terminar com caelum.com.br ou alura.com.br. O nome do usuário (tudo antes do @) tem apenas letras minúsculas, pode ter um número no final e tem de 5 a 15 caracteres.  
Exemplo: super.mario@caelum.com.br extrai super.mario

Expressão:
`([a-z.]{4,14}[a-z1-9])@(?:caelum.com.br|alura.com.br)`

## 
> Nico Steppat|14/05/1977|Rua Buarque de Macedo|50|22222-222|Rio de Janeiro
> Romulo Henrique|14/06/1993|Rua do Lins|120|12345-322|Rio de Janeiro
> Leonardo Cordeiro|01/01/1995|Rua de Campo Grande|01|00001-234|Rio de Janeiro

Expressão:  
`([\w\s]+)\|(?:\d\d/\d\d/\d\d\d\d)\|([\w\s]+)\|(\d{1,4})\|(\d{5}-\d{3})\|(?:[\w\s]+)`

## O Recurso de Backreference /\
```<h1 class="text-left">Expressões Regulares</h1>```  
Expressão:  
`<(h1|h2).+?>([\w\sõãí.]+)<\/\1>`