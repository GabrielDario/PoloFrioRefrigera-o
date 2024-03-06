let btnAbrir = document.getElementById('button-43');
let btnFechar = document.getElementById('fechar-popup-btn');
let conteudo = document.getElementById('popUpManuntencao');
let body = document.body;

let condicao = 0;


body.addEventListener('click', (e) => {
  condicao++;
  if (condicao == 1) {
    console.log('Está abrindo');
  } else if(condicao == 0){
    console.log('NADA');
  }else if(condicao >= 2){
    conteudo.style.display = 'none';
    condicao = 0;
  }
})


btnAbrir.addEventListener('click', (e) => {
  console.log("Abriu");
  conteudo.style.display = 'block';
  condicao++;

})

btnFechar.addEventListener('click', (e) => {
  console.log("Fechou");
  conteudo.style.display = 'none';

  condicao--;
})


