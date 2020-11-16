let third_block = document.getElementsByClassName("third-block")[0];
let card = third_block.getElementsByClassName("card");

for (let i = 0; i < card.length; i++) {
    const element = card[i];
    const link = element.getElementsByClassName("link")[0];
    link.addEventListener("click", playOrPauseVideo);
}

function playOrPauseVideo() {
    let card = this.parentElement;
    let bg = this.getElementsByClassName("bg")[0];

    card.classList.toggle("active");
    body.classList.toggle("active");

    if (card.classList.contains("active")) {
        bg.play();
        bg.volume = 0;
    } else {
        bg.pause();

    }
}
