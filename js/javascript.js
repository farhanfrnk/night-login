// $(document).ready(function () {
//     var silder = $(".owl-carousel");
//     silder.owlCarousel({
//         autoplay: true,
//         autoplayTimeout: 3000,
//         autoplayHoverPause: false,
//         items: 1,
//         stagePadding: 20,
//         center: true,
//         nav: false,
//         margin: 50,
//         dots: true,
//         loop: true,
//         responsive: {
//             0: { items: 1 },
//             480: { items: 2 },
//             575: { items: 2 },
//             768: { items: 2 },
//             991: { items: 3 },
//             1200: { items: 4 }
//         }
//     });
// });

const cardsRight = document.querySelectorAll('.card-right');

const observer = new IntersectionObserver( entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
},
    {
        threshold: 0.5,
    }
)

cardsRight.forEach(card => {
    observer.observe(card)
})

const cardsLeft = document.querySelectorAll('.card-left');

const observer2 = new IntersectionObserver( entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
},
    {
        threshold: 0.5,
    }
)

cardsLeft.forEach(card => {
    observer2.observe(card)
})

const cardsBig = document.querySelectorAll('.card-big');

const observer3 = new IntersectionObserver( entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
},
    {
        threshold: 0.5,
    }
)

cardsBig.forEach(card => {
    observer3.observe(card)
})

const toTop = document.querySelector(".back-button");

window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 100){
        toTop.classList.add("aktif");
    } else{
        toTop.classList.remove("aktif");
    }
})
