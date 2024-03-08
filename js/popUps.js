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


