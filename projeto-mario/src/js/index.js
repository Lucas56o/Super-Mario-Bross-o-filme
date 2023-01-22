const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("videoDMario");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
console.log(linkDoVideo);
const botaoTrailer = document.querySelector('.botao-trailer');

console.log('mostrar o document',document);


console.log(botaoTrailer);



botaoTrailer.addEventListener("click",() => {
    modal.classList.add("aberto")
    video.setAttribute("src", linkDoVideo);
});


botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src","");
});


