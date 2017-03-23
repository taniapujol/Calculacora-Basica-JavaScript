// Empezamos nuestro jquerry externo
$(document).ready(function(){
  // Testeando si Jquery esta funcionando
  var testeo = true;
  if (testeo) console.log("cargado Jquery");
  // declaracion de variables
  var valor1, valor2; // es number
  var array1, array2;// es array
  var operacion; // es string
  var bacio = "";
  if (testeo) console.log("Cargando variables -> valor1: "+valor1+","+"valor2: "+valor2+","+"operacion: "+operacion+","+"array1: "+array1+","+"array2: "+array2);
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
  // Funcion suma (Boton (+))
  $("input[name=suma]").click(function (){
  // Obtenemos el valor1 y preparamos para recibir el valor2.
    if ($("#display").val() != bacio){
      // Miramos si tenemos previamente una fraccion que realizar
      if (testeo) console.log("operacion: "+operacion);
      array1 = $("#display").val().split("¬");
      if (testeo) console.log("Testeando que la array1[1] no se encuentre bacia ->"+array1[1]);
      if ((operacion === "fraccion") && (array1[1]!= bacio)) {
        switch (true) {
          case (valor1!= bacio):
            array2 = $("#display").val().split("¬");
            if (testeo) console.log("Testeando que la array2[1] no se encuentre bacia ->"+array2[1]);
            array2[0] = parseFloat(array2[0]);
            array2[1] = parseFloat(array2[0]);
            valor2 = array2[0] / array2 [1];
            operacion="suma";
            if (testeo) console.log("valor1: "+valor1+", valor2: "+valor2+", operacion: "+operacion);
            break;
          case (valor1 = bacio):
            array1[0] = parseFloat(array1[0]);
            array1[1] = parseFloat(array1[0]);
            valor1 = array1[0] / array1 [1];
            operacion="suma";
            $("#display").val(bacio);
            $(".op").text($(this).val());
            if (testeo) console.log("valor1: "+valor1+", valor2: "+valor2+", operacion: "+operacion);
            break;
          };
      } else {
        valor1 = parseFloat($("#display").val());
        if (testeo) console.log("testeando valor1 = " + valor1);
        $("#display").val(bacio);
        operacion="suma";
        $(".op").text($(this).val());
      }
    } else {
      alert("introduzca un valor para la operación");
    }
  });
  // Funcion resta (Boton (-))
  $("input[name=resta]").click(function (){
    // Obtenemos el valor1 y preparamos para recibir el valor2.
    if ($("#display").val() != bacio){
      valor1 = parseFloat($("#display").val());
      $("#display").val(bacio);
      operacion="resta";
      $(".op").text($(this).val());
    } else{
      alert("introduzca un valor para la operación");
    }
  });
  // Funcion multiplicar (Boton (*))
  $("input[name=por]").click(function (){
    // Obtenemos el valor1 y preparamos para recibir el valor2.
    if ($("#display").val() != bacio){
      valor1 = parseFloat($("#display").val());
      $("#display").val(bacio);
      operacion="por";
      $(".op").text($(this).val());
    } else{
      alert("introduzca un valor para la operación");
    }
    if (testeo) console.log(valor1,valor2,operacion);
  });
  // Funcion dividir (Boton (/))
  $("input[name=divi]").click(function (){
    // Obtenemos el valor1 y preparamos para recibir el valor2.
    if ($("#display").val() != bacio){
      valor1 = parseFloat($("#display").val());
      $("#display").val(bacio);
      operacion="divi";
      $(".op").text($(this).val());
    } else{
      alert("introduzca un valor");
    }
    if (testeo) console.log(valor1,valor2,operacion);
  });
  // Funcion raiz (Boton (raiz))
  $("input[name=raiz]").click(function(){
    // Obtendremos el valor de la raiz siempre que no se encuentre bacio y sea mayor de 0
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
      // pintamos el simbolo (¬) en el display y lo mostramos
      var valor = $("#display").val();
      valor = valor.replace(valor, valor + "¬");
      $("#display").val(valor);
      operacion = "fraccion";
      if (testeo) console.warn("Este numero es parte de una funcion");
    } else{
      alert("introduzca un valor para la operación");
    }
  });
  // Funcion SIN (Boton (SIN))

  // Funcion COS (Boton (COS))

  // Funcion TAG (Boton (TAG))

  // Funcion masMenos (Boton (±))

  // Funcion Borrar (Boton (CE))
  $("input[name=CE]").click(function () {
    //  Inicializamos todas las variables a bacio ("")
    $("#display").val(bacio);
    valor1, valor2, operacion, array = bacio;
    $(".op").text(bacio);
    if (testeo) console.log(valor1,valor2,operacion,array);
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
      // Mientras el campo de valor1 no se encuentre bacio aplicaremos la operacion previamente especificada
      switch (valor1 != bacio) {
        case operacion == "suma" :
          //  La operacion suma nos suma los dos numeors obtenidos
          // if (valor2 != bacio) $("#display").val(valor1 + valor2);
          valor2 = parseFloat($("#display").val());
          if (testeo) console.log("testeando valor1: "+valor1+" valor2: "+valor2);
          $("#display").val(valor1 + valor2);
          break;
        case operacion == "resta" :
          //  La operacion resta nos resta los dos numeors obtenidos
          valor2 = parseFloat($("#display").val());
          $("#display").val(valor1 - valor2);
          if (testeo) console.log(valor1,valor2,operacion);
          break;
        case operacion == "por" :
          //  La operacion por nos hace el producto los dos numeors obtenidos
          valor2 = parseFloat($("#display").val());
          $("#display").val(valor1 * valor2);
          if (testeo) console.log(valor1,valor2,operacion);
          break;
        case operacion == "divi" :
          //  La operacion divi nos divide los dos numeors obtenidos
          valor2 = parseFloat($("#display").val());
          $("#display").val(valor1 / valor2);
          if (testeo) console.log(valor1,valor2,operacion);
          break;
        case operacion == "raiz" :
          // La operacion raiz hace la raiz cuadrada de numero introducido mediante la funcion match.sqrt()
          var r = Math.sqrt(valor1);
          r = (r).toFixed(4);
          $("#display").val(r);
          if (testeo) console.log(valor1,valor2,operacion);
          break;
        case operacion == "porCiento" :
          console.warn("Falta terminar aun esta funcion");
          break;
        case operacion == "elevado" :
          // La operacion elevado realiza los siguientes pasos:
          // Obtenemos el numero y su elevado
          array = $("#display").val().split("^");
          if (testeo) console.log(array);
          array[0] = parseFloat(array[0]);
          array[1] = parseFloat(array[1]);
          if (testeo) console.log("estraidos los numeros" + array[0],array[1]);
          // verificamos que si el numero = 1 su valor sera el mismo, si el numero es = 0 su valora es 0 y si es mayor que 1 lo multiplicamos tantas veces como su esponente -1 indique.
          if ( array[1] == 1){
            array[0] = array[0]
          } else if ( array[1]>1){
            var num = array[0];
            for (i=1; i < array[1] ; i++){
              array[0] = elevado[0] * num;
              if (testeo) console.log("indice"+i,"numeros " + array[0]);
            };
          } else {
            array[0]=0;
          }
          $("#display").val(array[0]);
          break;
        case operacion == "fraccion" :
          array = $("#display").val().split("¬");
          if (testeo) console.log(array);
          array[0] = parseFloat(array[0]);
          array[1] = parseFloat(array[1]);
          var r = array[0] / array[1];
          if (testeo) console.log("estraidos los numeros" + r);
          $("#display").val(r);
      };
    } else {
      alert("introduzca un valor");
    };
  });

  // Fin js
});
