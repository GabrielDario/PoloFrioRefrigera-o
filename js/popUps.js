let btnAbrir = document.getElementById('button-43');
let btnFechar = document.getElementById('fechar-popup-btn');
let conteudo = document.getElementById('popUpManuntencao');


btnAbrir.addEventListener('click', (e) => {
  conteudo.style.display = 'block';
})
btnFechar.addEventListener('click', (e) => {
  conteudo.style.display = 'none';
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

function myFunctionMove(y) {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  let body = document.body;
  let contentMenu = document.querySelector('.content');

  let content1 = document.getElementById('content1');
  let content2 = document.getElementById('content2');
  let content3 = document.getElementById('content3');
  let content4 = document.getElementById('content4');
  let content5 = document.getElementById('content5');


  let larguraBody = body.clientWidth;
  let listaAlturas = [];

  listaAlturas.push(contentMenu.clientHeight);
  listaAlturas.push(content1.clientHeight);
  listaAlturas.push(content2.clientHeight);
  listaAlturas.push(content3.clientHeight);
  listaAlturas.push(content4.clientHeight);
  listaAlturas.push(content5.clientHeight);

  let somaAltura = 0;
  for(i = 0; i <= y; i++) {
    somaAltura += listaAlturas[i];
  }
  window.scrollTo(0, 150);


}

