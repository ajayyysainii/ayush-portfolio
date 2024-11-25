gsap.from(".yet",{
    scale:1,
    x:300,
    opacity:0,
    duration:0.6,
    delay:0.8
})

gsap.to(".developer",{
    y:-500,
    delay:2,
    duration:2,
    opacity:0
})

gsap.from(".but",{
    y:500,
    delay:2.1,
    duration:2,
    opacity:0
})

gsap.to(".a",{
    y:-500,
    delay:2,
    duration:2,
    opacity:0
})

gsap.from(".designer",{
    y:500,
    delay:2.1,
    duration:2,
    opacity:0
})


gsap.to(".yet",{
    y:500,
    delay:4,
    duration:2,
    opacity:0
})

gsap.from(".sure",{
    y:500,
    delay:4,
    duration:2,
    opacity:0
})

function lasteffect(effectclass){
    gsap.to(effectclass,{
        y:-100,
        delay:6.6,
        duration:1.5
    })
}
[".but",".designer",".aa",".sure",].forEach(effectclass=>lasteffect(effectclass))


// gsap.to(".button-57",{
//     opacity:1,
//     duration:10
// })

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('.button-57');

    // Set a timeout to make the button visible after 10 seconds
    setTimeout(() => {
        button.style.opacity = "1";
        button.style.transition="0.3s"
    }, 9000); // 10 seconds
});
