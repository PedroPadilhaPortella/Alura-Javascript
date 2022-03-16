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