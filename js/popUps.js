let btnAbrir = document.getElementById('button-43');
let btnFechar = document.getElementById('fechar-popup-btn');
let conteudo =  document.getElementById('popUpManuntencao');


btnAbrir.addEventListener('click', (e) =>{
  console.log("Abriu");
//   btnAbrir.style.display = 'none';
//   btnFechar.style.display = 'block';

  conteudo.style.display = 'block';
})
// btnFechar.addEventListener('click', (e) => {
//   console.log("Fechou");
//   btnAbrir.style.display = 'block';
//   btnFechar.style.display = 'none';
//   conteudo.style.display = 'none';
// })