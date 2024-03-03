
let index = 0;
displayImages();
crateCanvas();
function displayImages() {
    let i;
    const images = document.getElementsByName("image");

    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";

    }
    index++;

    if (index > images.length) {
        index = 1;
    }

    images[index - 1].style.display = "block";
    setTimeout(displayImages, 4000);

}
function crateCanvas() {
    var largura = window.innerWidth

    var altura = window.innerHeight
    console.log(largura);
    console.log(altura);

}