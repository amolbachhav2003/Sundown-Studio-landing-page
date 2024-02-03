function Page3Animation(){
    var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");
var videoElement = document.querySelector("#fixed-image video"); // select the video element

elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
});

elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
});

var elems = document.querySelectorAll(".elem");

elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var videoUrl = e.getAttribute("video");
        videoElement.muted = true;
        videoElement.src = videoUrl; // set the src attribute for the video element
        videoElement.play(); // play the video
    });
});

// Pause the video when the mouse leaves the container
elemC.addEventListener("mouseleave", function () {
    videoElement.pause();
});
}

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
    });
}

function menuAnimation(){
    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    
    menu.addEventListener("click",function(){
        if(flag == 0){
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation(){
    var loader =document.querySelector("#loader")
    setTimeout(function(){
    loader.style.top = "-100%"
    }, 4000)
}

loaderAnimation()
Page3Animation()
swiperAnimation()
menuAnimation()