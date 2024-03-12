let btnAbrir = document.getElementById('button-43');
let btnFechar = document.getElementById('fechar-popup-btn');
let conteudo = document.getElementById('popUpManuntencao');


btnAbrir.addEventListener('click', (e) => {
  conteudo.style.display = 'block';
  condicao++;
})
btnFechar.addEventListener('click', (e) => {
  conteudo.style.display = 'none';
  condicao--;
})
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

