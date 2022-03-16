# Expressões regulares: capturando textos de forma mágica

> Regex, ou expressões regulares, é uma linguagem para encontrar padrões de texto.
Sendo uma linguagem independente, existem interpretadores para a maioria das plataformas de desenvolvimento, como JavaScript, C#, Python ou Ruby.

Uma classe de caracteres predefinida é \d, que significa qualquer dígito.
Existem vários meta-char, como . ou *.
Existem quantifiers que definem quantas vezes um caractere deve aparecer:
{1} é um quantifier que significa uma vez.
* é um quantifier que significa zero, uma ou mais vezes
. é um meta-char que significa qualquer char.
Com \ podemos escapar meta-chars, por exemplo \..

### Encontrando o CNPJ
Expressão:
`\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}`

### Encontrando o IP
Expressão:
`\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}`

### Encontrando o CEP
Expressão:
`\d{5}-\d{3}`

### Encontrando o Telefone
Expressão:
`\(\d{2}\) \d{4,5}-\d{4}`