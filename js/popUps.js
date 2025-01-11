let btnAbrir = document.getElementById('button-43');
let btnFechar = document.getElementById('fechar-popup-btn');
let btnFechar2 = document.getElementById('fechar-popup-btn2');
let conteudo = document.getElementById('popUpManuntencao');


btnAbrir.addEventListener('click', (e) => {
  conteudo.style.display = 'block';
})
btnFechar.addEventListener('click', (e) => {
  conteudo.style.display = 'none';
})
btnFechar2.addEventListener('click', (e) => {
  conteudo.style.display = 'none';
})


