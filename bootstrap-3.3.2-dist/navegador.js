function navegador(){
  document.write("<p id=\"par\">Navegador: ");
  document.write(navigator.appCodeName + "<br>");
  document.write("Versión del navegador: ");
  document.write(navigator.appVersion + "<br>");
  document.write(" APP Nom: ");
  document.write(navigator.appName + "<br>");
  document.write("Cockies: ");
  document.write(navigator.cookieEnabled + "<br>");
  document.write("Llenguatge: ");
  document.write(navigator.language + "<br>");
  document.write("Product: ");
  document.write(navigator.product + "<br>");
  document.write("Navigator User: ");
  document.write(navigator.userAgent + "<br>");
  document.body.style.backgroundColor = "grey";
}