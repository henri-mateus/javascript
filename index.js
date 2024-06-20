// Responder qual a diferença de undefined e null?
/* 
 null -> é um literal, não propiedade do escopo global, representa um valor nulo ou vazio, aponta para um objeto inexistente.
 ex:
  var x = null; x
  " x "

  X é conhecido e existente, mas não aponta pra nenhum tipo ou valor.

  undefined -> uma variável global, com valor indefinido, é propiedade não configurável e somente leitura. retorna undefined se: 1_ se um metodo ou sentença não tem uma variável com valor atribuído; 2_ em uma função se o valor não for retornado
  undefined não é uma palavra reservada, logo pode ser usada como identificador ( em qualquer escopo que não seja o global).
  
  ex's:
   1) em igualdade restrita:
   vax x;
   if (x=== undefined){ aqui executa
   }else { aqui não }
   2) operador typeof -> não lança erro caso a variável não tenha sido inicializada.
   va x
   if (typeof x=== undefined){aqui executa}
   3) operador void -> pode ser usado para retornar undefined, fala o tipo primitivo também ( no nodejs)
   sem a declaração da variável retorna ReferenceError
   var x 
   if( x===void 0){aqui executa}
*/

// Algoritmo de Fibonacci

function fibonacci(a, b) {
  return a + b;
}

console.log(fibonacci(1, 2));
// varios valores

// bash
// git add .
// git commit -m "feat: answers"
// git push
