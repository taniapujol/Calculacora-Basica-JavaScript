// Empezamos nuestro jquerry externo
$(document).ready(function(){
  // declaracion de variables globales
  var testeo = true;
  if (testeo) console.log("cargado Jquery");
  var valor1; // es number
  var valor2; // es number
  var elevado;// es array
  var operacion; // es string
  var operador;
  var bacio = "";
  // funcion ampliar calculadora
  $("input[name=op]").click(function () {
    var anchura = parseInt($(".calculadora").width());
    if (testeo) console.log(anchura);
    if (anchura == 315) {
      if (testeo) console.log("ampliando calculadora");
      $(".calculadora").width(440);
      $(".masOp").css({'display':'inline'});
    };
    if (anchura == 440){
      if (testeo) console.log("resduciendo calculadora");
      $(".calculadora").width(315);
      $(".masOp").css({'display':'none'});
    }
  });
  // Funcion obtener numero (Boton (0)..(9))
  $("input[name=btn]").click(function () {
    $("#display").val($("#display").val()+$(this).val());
  });
  if (testeo) console.log(valor1,valor2,operacion);
  // Funcion suma (Boton (+))
  $("input[name=suma]").click(function (){
    if ($("#display").val() != bacio){
      valor1 = parseFloat($("#display").val());
      $("#display").val(bacio);
      operacion = "suma";
      operador = "suma";
      $(".op").text($(this).val());
    } else{
      alert("introduzca un valor para la operación");
    }
    if (testeo) console.log(valor1,valor2,operacion);
  });
  // Funcion resta (Boton (-))
  $("input[name=resta]").click(function (){
    if ($("#display").val() != bacio){
      valor1 = parseFloat($("#display").val());
      $("#display").val(bacio);
      operacion="resta";
      operador = "resta";
      $(".op").text($(this).val());
    } else{
      alert("introduzca un valor para la operación");
    }
    if (testeo) console.log(valor1,valor2,operacion);
  });
  // Funcion multiplicar (Boton (*))
  $("input[name=por]").click(function (){
    if ($("#display").val() != bacio){
      valor1 = parseFloat($("#display").val());
      $("#display").val(bacio);
      operacion="por";
      operador = "por";
      $(".op").text($(this).val());
    } else{
      alert("introduzca un valor para la operación");
    }
    if (testeo) console.log(valor1,valor2,operacion);
  });
  // Funcion dividir (Boton (/))
  $("input[name=divi]").click(function (){
    if ($("#display").val() != bacio){
      valor1 = parseFloat($("#display").val());
      $("#display").val(bacio);
      operacion="divi";
      operador = "divi";
      $(".op").text($(this).val());
    } else{
      alert("introduzca un valor");
    }
    if (testeo) console.log(valor1,valor2,operacion);
  });
  // Funcion raiz (Boton (raiz))
  $("input[name=raiz]").click(function(){
    if (($("#display").val() != bacio) && ($("#display").val() >= 0)){
      valor1 = parseFloat($("#display").val());
      operacion = "raiz";
      $(".op").text($(this).val());
    } else {
      alert("introduzca un valor no negativo");
      $("#display").val("NaN");
    }
  });
  // Funcion porCiento (Boton (%))
  $("input[name=porCiento]").click(function(){
    if ($("#display").val() != bacio){
      if (valor1 != undefined){
        valor2 = parseFloat($("#display").val());
      } else {
        valor1 = parseFloat($("#display").val());
      }
      operacion = "porCiento";
      $(".op").text($(this).val());
    } else {
      alert("introduzca un valor no negativo");
      $("#display").val("NaN");
    }
  });
  // Funcion elevado (Boton (x^y))
  $("input[name=elevado]").click(function (){
    if ($("#display").val() != bacio){
      // pintamos el simbolo (^) en el display y lo mostramos
      var valor = $("#display").val();
      valor = valor.replace(valor, valor + "^");
      $("#display").val(valor);
      operacion = "elevado";
    } else{
      alert("introduzca un valor para la operación");
    }
    if (testeo) console.log(valor1,valor2,operacion);
  });
  // Funcion fraccion (Booton (1/x))
  $("input[name=fraccion]").click(function (){
    if ($("#display").val() != bacio){
      // pintamos el simbolo (^) en el display y lo mostramos
      var valor = $("#display").val();
      valor = valor.replace(valor, valor + "¬");
      $("#display").val(valor);
      // operacion = "fraccion";
      valor = $("#display").val().split("¬");
      if (testeo) console.log(valor);
      // elevado[0] = parseFloat(elevado[0]);
      // elevado[1] = parseFloat(elevado[1]);
      // if (testeo) console.log("estraidos los numeros: " + elevado[0],elevado[1]);
      // valor = elevado[0] / elevado[1];
      // $("#display").val(valor);
    } else{
      alert("introduzca un valor para la operación");
    }
    if (testeo) console.log(valor1,valor2,operacion);
  });
  // Funcion AND (Boton (AND))

  // Funcion OR (Boton (OR))

  // Funcion XOR (Boton (XOR))

  // Funcion NOT (Boton (NOT))

  // Funcion Borrar (Boton (CE))
  $("input[name=CE]").click(function () {
    $("#display").val(bacio);
    valor1, valor2, operacion,elevado = bacio;
    $(".op").text(bacio);
    if (testeo) console.log(valor1,valor2,operacion,elevado);
  });
  // Funcion Borrar un numero (Boton (<-))
  $("input[name=C]").click(function(){
    // obtengo el numero de caracteres introducidos en el display
    var len = $("#display").val().length;
    // guardo el valor del display
    var valor = $("#display").val();
    if (testeo) console.log(len,valor);
    // replazo el valor por su valor menos un caracter
    valor = valor.replace(valor.charAt(len -1),"");
    $("#display").val(valor);
    if (testeo) console.log(len,valor);
  });
  // Funcion resultado (Boton (=))
  $("input[name=igual]").click( function(){
    if (testeo) console.log(valor1,valor2,operacion);
    if ($("#display").val() != bacio){
      $(".op").text($(this).val());
      switch (valor1 != bacio) {
        case operacion == "suma" :
          valor2 = parseFloat($("#display").val());
          var r = valor1 + valor2;
          $("#display").val(r);
          if (testeo) console.log(valor1,valor2,operacion);
          break;
        case operacion == "resta" :
          valor2 = parseFloat($("#display").val());
          $("#display").val(valor1 - valor2);
          if (testeo) console.log(valor1,valor2,operacion);
          break;
        case operacion == "por" :
          valor2 = parseFloat($("#display").val());
          $("#display").val(valor1 * valor2);
          if (testeo) console.log(valor1,valor2,operacion);
          break;
        case operacion == "divi" :
          valor2 = parseFloat($("#display").val());
          $("#display").val(valor1 / valor2);
          if (testeo) console.log(valor1,valor2,operacion);
          break;
        case operacion == "raiz" :
          var r = Math.sqrt(valor1);
          r = (r).toFixed(4);
          $("#display").val(r);
          if (testeo) console.log(valor1,valor2,operacion);
          break;
        case operacion == "porCiento" :
          if (valor1 !=0) {
            valor2 = parseFloat($("#display").val());
            valor2 = valor2 * 0.03;
            switch (true) {
              case operador == "suma":
                $("#display").val(valor1 + valor2);
                break;
              case operador == "resta" :
                $("#display").val(valor1 - valor2);
                break;
              case operador == "por" :
                $("#display").val(valor1 * valor2);
                break;
              case operador == "divi" :
                $("#display").val(valor1 / valor2);
                break;
              default:
              $("#display").val(valor1 * 0.01);
            }
          }
          if (testeo) console.log(valor1,valor2,operacion);
          break;
        case operacion == "elevado" :
          elevado = $("#display").val().split("^");
          elevado[0] = parseFloat(elevado[0]);
          elevado[1] = parseFloat(elevado[1]);
          if (testeo) console.log("estraidos los numeros"+elevado[0],elevado[1]);
          if ( elevado[1] == 1){
            elevado[0] = elevado[0]
          } else if ( elevado[1]>1){
            var num = elevado[0];
            for (i=1; i < elevado[1] ; i++){
              elevado[0] = elevado[0] * num;
              if (testeo) console.log("indice"+i,"numeros " + elevado[0]);
            };
          } else {
            elevado[0]=0;
          }
          $("#display").val(elevado[0]);
          break;
        case operacion == "fraccion" :

      }
    } else {
      alert("introduzca un valor");
    };
    if (testeo) console.log(valor1,valor2);
  });

  // Fin js
});
