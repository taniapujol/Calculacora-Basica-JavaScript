// Empezamos nuestro jquerry externo
$(document).ready(function(){
  // declaracion de variables globales
  var testeo = true;
  $.getScript('js/funciones.js', function(){
    if (testeo) console.log ("funciones cargadas");
  });
  // Fin js
});
