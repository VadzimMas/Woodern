$(document).ready(function () {
    $(".slider").slick({
        arrows: false,
        dots: false,
        // adaptiveHeight defalt folse need change alighn-item:
        //   flex- start for slick - track
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        //  speef of change slide
        speed: 1300,
        // animation of change slide
        easing: "ease-out",
        infinite: false,
        initialSlide: 0,
        // aytoplay optionce
        autoplay: false,
        autoplaySpeed: 500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        // disable swipe on pc
        draggable: true,
        // disable swipe on mobile
        swipe: true,
        // how far need to swipe for change slide on mobile
        touchThreshold: 5,
        // disable move animation when make swipe on mobile
        touchMove: true,
        // disable battons antil animate is finish
        waitForAnimate: true,
        // set central slide in center screen
        centerMode: false,
        // givs contant make own width when true
        wariableWidth: false,
        rows: 1,
        slidesPerRow: 1,
        // sets slider to vertical pozition important to set current slide track to block
        vertical: true,
        verticalSwiping: true,
        // change slaids instead swipe ande remove all navigations only swips working
        fade: false,
    });
});
