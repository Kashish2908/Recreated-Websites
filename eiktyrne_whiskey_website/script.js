gsap.from(".coming-animation", {
    y: 900,
    duration: 2,
    ease: "power4",
    stagger: 0.1
})

gsap.from(".scroll-coming-animation", {
    scrollTrigger: {
        trigger: "#right-content",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "bottom 10%",
    },
    y: 900,
    duration: 2,
    ease: "power4",
    stagger: 0.1
})

gsap.from(".scroll-coming-animation2", {
    scrollTrigger: {
        trigger: "#third-page",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "bottom 10%",
    },
    y: 900,
    duration: 2,
    ease: "power4",
    stagger: 0.2
})

gsap.from(".scroll-coming-animation3", {
    scrollTrigger: {
        trigger: "#last-page",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "bottom 10%",
    },
    y: 900,
    duration: 1.5,
    ease: "power4",
    stagger: 0.1
})


// var slideIndex = 1;
// showDivs(slideIndex);
// function plusDivs(n) {
//     console.log(n)
//     showDivs(slideIndex += n);
// }

// function showDivs(n) {
//     var i;
//     var x = document.getElementById("box");
//     if (n > x.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = x.length }
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     x[slideIndex - 1].style.display = "flex";
// }







