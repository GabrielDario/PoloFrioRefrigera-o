
// // set index and transition delay
// let index = 0;
// let transitionDelay = 5000;
// let slides = document.querySelectorAll(".fundos");
// let radios = document.querySelectorAll(".radio");
// let radio1 = document.getElementById('radio1')
// let radio2 = document.getElementById('radio2')
// let radio3 = document.getElementById('radio3')

// crateCanvas();

// radio1.addEventListener("click", (e) => {
//     index = 0;
//     showSlide(index);
// });

// radio2.addEventListener("click", (e) => {
//     index = 1;
//     showSlide(index);
// });

// radio3.addEventListener("click", (e) => {
//     index = 2;
//     showSlide(index);
// });
// function crateCanvas() {
//     // var largura = window.innerWidth

//     // var altura = window.innerHeight
//     let footerMiddle = document.getElementById("meioFooter");
//     let footerUm = document.getElementById("footerUm");
//     let footerDois = document.getElementById("footerDois");

//     let body = document.body;

//     //Rodapé
//     let alturaFooter = footerMiddle.clientHeight;

//     let larguraBody = body.clientWidth;

//     if (larguraBody <= 700) {
//         footerDois.style.marginTop = '5px';
//         footerUm.style.marginTop = '5px';

//     } else {
//         footerDois.style.marginTop = alturaFooter / 3 + 'px';
//         footerUm.style.marginTop = alturaFooter / 4 + 'px';
//     }
// }

// //SLIDESS 
// for (let slide of slides) {
//     slide.style.transition = `all ${transitionDelay / 7000}s linear`;
// }

// showSlide(index);

// function showSlide(slideNumber) {
//     slides.forEach((slide, i) => {
//         slide.style.display = i == slideNumber ? "block" : "none";
       
//         if(index == 0) {
//             radios[0].checked = true;
//             radios[1].checked = false;
//             radios[2].checked = false;
//         }else if(index == 1) {
//             radios[0].checked = false;
//             radios[1].checked = true;
//             radios[2].checked = false;
//         }else {
//             radios[0].checked = false;
//             radios[1].checked = false;
//             radios[2].checked = true;
//         }
        
//     });
//     index++;
//     if (index >= slides.length) {
//         index = 0;
//     }
// }


// setInterval(() => showSlide(index), transitionDelay);

// Substitua pela sua chave de API
const apiKey = 'SUA_CHAVE_DE_API';

// Nome ou Place ID da empresa
const placeId = 'ChIJN1t_tDeuEmsRUsoyG83frY4'; // Exemplo de ID de lugar

// URL da API
const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data.result) {
      const numReviews = data.result.user_ratings_total; // Número total de avaliações
      console.log(`Número de avaliações: ${numReviews}`);
    } else {
      console.error('Erro ao obter os dados:', data);
    }
  })
  .catch(error => console.error('Erro na requisição:', error));
