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
