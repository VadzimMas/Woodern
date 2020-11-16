let forth_block = document.getElementsByClassName("forth-block")[0];
let btn = forth_block.getElementsByClassName("btn")[0];
let video = forth_block.getElementsByTagName("video")[0];



btn.addEventListener("click", watch_video);



function watch_video() {
    forth_block.classList.toggle("active");
    body.classList.toggle("active");


    if (forth_block.classList.contains("active")) {
        video.play();
        video.volume = 0;
        video.addEventListener("click", watch_video);
    } else {
        video.pause();
        video.removeEventListener("click", watch_video);

    }

}