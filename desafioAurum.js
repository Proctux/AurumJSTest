/* Desafio da Aurum realizado por Luiz Fernando de Morais */

/* DESAFIO 01 */

/** A constante remove trabalha a função em arrow function da variável string recebida na função
 * Em seguida, cria-se um array com da string recebida pelo método string;
 * Através do reduce, o accumulator que representa o item da callback anterior 
 * e o actual que representa o item da callback atual, estes delimitam o retorno através de um 'if, if else e else'
 * Por fim, retornamos a const remove com o resultado
 */

const removeRepeated = (string, limit) => {
  const remove = (string) =>
    string.split('').reduce((accumulator, actual) => {
      if (accumulator[accumulator.length - 1] !== actual) {
        let acc = accumulator + actual;
        return acc;
      } else if (accumulator[accumulator.length - limit] !== actual) {
        let acc = accumulator + actual;
        return acc;
      } else {
        return accumulator;
      }
    }, '');
  return remove(string)
};

console.log(removeRepeated("xxxyzzaaayy", 1));
console.log(removeRepeated("xxxyzzaaayy", 2));



/* DESAFIO 02 */

  /** Assim como na função anterior, transforma-se a string em array para poder trabalhá-la
   * em um reduce, junto aos métodos index e array que também foram necessários nessa etapa;
   * Com um if, else if e else tradicional, busca-se entender inicialmente se o primeiro caracter
   * da string é um '?'. Caso seja, devemos realizar um push com while para repetir o número de vezes;
   * recebido pela variável 'times' da função.
   * Durante o while é realizado um push em um novo array que retornará a informação para o reduce
   * além de import o método 'join' que elimina as vígulas e únifica os itens de um array
   */

const replaceChar = (string, times) => {

  const repl = (string) => string.split("").reduce((accumulator, actual, index, array) => {
    if (index === 0 && actual === '?') {

      let rep = 0
      var arr = []

      while (rep < times) {
        arr.push(array[array.length - 2])
        rep++
      }

      return arr.join("")

    }

    /**No próximo teste lógico, caso a string não seja um '?' deve-se simplesmente retornar
     * o acumulador concatenado com o valor atual do reduce
     */

    else if (actual !== '?') {
      let acc = accumulator + actual
      return acc
    }

    /**
     *  Por fim, caso nenhuma das lógicas anteriores seja satisfeita, deve-se concluir que a
     * trata-se de um '?' o qual não é o primeiro caracter da string. Assim, repete-se o caracter
     * anterior a ele com o acumulator, através de um push em um novo array que irá continuar
     * o loop até que a várial 'rep', seja maior que a variável 'times' recebida na função
     * Por fim, retorna-se a concatenação do accumulator com o novo array.
     */

    else {
      let rep = 0
      var arr = []
      while (rep < times) {
        arr.push(accumulator[accumulator.length - 1])
        rep++

      }
      let acc = accumulator + arr.join("")

      return acc
    }
  }, "")


  return repl(string)
}

console.log(replaceChar("x?yzza?y?", 1))
console.log(replaceChar("x?yzza?y?", 2))
console.log(replaceChar("?x?yzza?y?", 2))


/* DESAFIO 03 */

const letterHandling = (text) => {
  var num = []; // Criamos um Array

  /**Em seguida transformamos o texto recebido em um array com o método split;
   * Organizamos alfabéticamente com o método sort;
   * Fazemos um map de cada item do array e um push no novo array criado acima;
   * O push será numérico, representando o charCodeAt pela unidade de Código UTF-16
   */
  text.split("").sort().map((letra) => (num.push((letra.charCodeAt(0) - 97) + 1)))

  var maior = 1
  var menor = 1000

  /** Pra cada número do novo array, checamos se ele é maior ou menor que as variáveis acima;
   * Caso seja maior, ele irá substituir o valor da variável, por isso a importância em usar var (ou let).
   */

  for (n of num) {
    if (n < menor) {
      menor = n
    } else if (n >= maior) {
      maior = n
    }
  }

  // Por fim, retorna-se o maior e o menor valor
  return {
    maior,
    menor
  }
}

const lettersSum = (string1, string2) => {

  /** Aqui chamos duas vezes a função criada (letterHandling) para somar os inputs de Strings */
  const str1 = letterHandling(string1)
  const str2 = letterHandling(string2)

  const total = (str1.maior * str2.menor) + (str2.maior * str1.menor)
  return total
}

console.log(lettersSum('dacb', 'gdab'))
console.log(lettersSum("dcb", "gdab"))