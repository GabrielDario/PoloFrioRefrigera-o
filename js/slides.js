
// set index and transition delay
let index = 0;
let transitionDelay = 5000;
let slides = document.querySelectorAll(".fundos");
let radios = document.querySelectorAll(".radio");


crateCanvas();

function crateCanvas() {
    // var largura = window.innerWidth

    // var altura = window.innerHeight
    let footerMiddle = document.getElementById("meioFooter");
    let footerUm = document.getElementById("footerUm");
    let footerDois = document.getElementById("footerDois");

    let body = document.body;

    //Rodapé
    let alturaFooter = footerMiddle.clientHeight;

    let larguraBody = body.clientWidth;

    console.log(larguraBody)

    if (larguraBody <= 700) {
        footerDois.style.marginTop = '5px';
        footerUm.style.marginTop = '5px';

    } else {
        footerDois.style.marginTop = alturaFooter / 3 + 'px';
        footerUm.style.marginTop = alturaFooter / 4 + 'px';
    }
}

//SLIDESS 
for (let slide of slides) {
    slide.style.transition = `all ${transitionDelay / 7000}s linear`;
}

showSlide(index);

function showSlide(slideNumber) {
    slides.forEach((slide, i) => {
        slide.style.display = i == slideNumber ? "block" : "none";
        // console.log(radios[index].checked);
        // console.log(radios[index]);
        console.log(index);
       
        if(index == 0) {
            radios[0].checked = true;
            radios[1].checked = false;
            radios[2].checked = false;
        }else if(index == 1) {
            radios[0].checked = false;
            radios[1].checked = true;
            radios[2].checked = false;
        }else {
            radios[0].checked = false;
            radios[1].checked = false;
            radios[2].checked = true;
        }
        
    });
    index++;
    if (index >= slides.length) {
        index = 0;
    }
}
setInterval(() => showSlide(index), transitionDelay);