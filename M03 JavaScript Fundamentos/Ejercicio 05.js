/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
      if(num > 0) {
               return("Es positivo");
      } else if(num < 0) {
               return("Es negativo");
      } else {
      return("false");''}
}


function agregarSimboloExclamacion(hola) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   Return ("hola" + "!");
}

function combinarNombres(Soy, Ivan) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   return pascalcase("Soy", "Ivan");
}

function obtenerSaludo(Ivan) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   return ("Ivan" + "Hola");
}

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   var altura = 5;
   var ancho = 8;
   var area = (altura * ancho);
   return ("El area del Rectangulo es:", area);
}

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   var altura = 5;
   var ancho = 5;
   var perimetro = 2 * (altura + ancho);
   return ("El perimetro del cuadrado es:", perimetro);
}

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   var base = 7;
   var altura = 7;
   var area = (base * altura);
   return ("El area del triangulo es:", area); 
}

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   let euro = 25;
   let tasa_usd = 1.20;
   let valor_usd = euro / tasa_usd;
   return ("El valor en dolares es:" , valor_usd);

}

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   letra = letra.toLowerCase();
   // verificar si la letra es una vocal 
       if (letra === "a") (letra === "e") (letra === "i") 
             (letra === "o") (letra === "u")
            {
           return ("Es una vocal"); }
       if (letra === "a,e,i,o,u")
       { 
         return ("Dato incorrecto");}
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
