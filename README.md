# AurumJSTest ![Alt text](https://secure.gravatar.com/avatar/b2622fded11e0e142b77bcb1974d957f?s=96&d=mm&r=g)
This test was done by me, trying to apply for a position at Aurum Software Jurídico.

# Desafio 1

O desafio n° 1 consistia em elaborar uma função que recebesse dois inputs, uma string e um number (limit)
Este deve tratar a string o numero de vezes que um carácter sequencial repetido pode aparecer na string
através do input limit.

com base nisso, o resultado obtido para os exemplos sugeridos foi o seguinte:

function removeRepeated("xxxyzzaaayy", 1) => "xyzay"

function removeRepeated("xxxyzzaaayy", 2) => "xxyzzaayy"

![Alt text](https://i.imgur.com/bnSN6U3.jpeg)

# Desafio 2

o Desafio n°2 cumina na elaboração de uma função que deveria substituir os '?' dentro de uma string por os valores
anteriores a ele, x vezes. Assim, temos o input de uma string e um number (times) que representa o número
de vezes que o carácter '?' deveria ser substituído pelo carácter anterior. Caso '?' esteja como primeiro
carácter na string, ele deveria repetir o último carácter da string.

Assim, para os exemplos fornecidos abaixo, tiveram-se os seguintes resultados:

function replaceChar("x?yzza?y?", 1) => "xxyzzaayy"

function replaceChar("x?yzza?y?", 2) => "xxxyzzaaayyy"

function replaceChar("?x?yzza?y?", 2) => "yyxxxyzzaaayyy"

![Alt text](https://i.imgur.com/VIb58H1.jpeg)

# Desafio 3

Por fim, o último desafio buscou receber duas strings e delegar um número ordinal para cada carácter da
string, de acordo com sua ordem no alfabeto. Além disso, deveria-se realizar as somas das multiplicações
entre o maiorLetraString1 x menorLetraString2  + maiorLetraString2 x menorLetraString1.

Para os exemplos fornecidos no teste, chegou-se aos devidos resultados:

function lettersSum("dacb", "gdab") =>  11

function lettersSum("dcb", "gdab") =>  18


![Alt text](https://i.imgur.com/1gCkktu.jpeg)

# Considerações Finais

Todos os desafios foram completados e todos os exemplos de entrada tiveram os retornos de acordo com o
solicitado pelo teste. Obrigado!
