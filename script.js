const staggeredCont = document.querySelectorAll(".services-grid, .stats-grid, .testimonials")

const options = {
    threshold: 0.3,                    // сколько процентов элемента должно быть видно (0–1)
    rootMargin: "0px 0px -80px 0px"    // сдвиг границ области видимости
};

const recipeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // сюда: что делать с элементом, который появился
            const items = entry.target.querySelectorAll(".stagger-item");

            items.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add("animate");
                }, index * 300);
            });
        }
    });
}, options);

staggeredCont.forEach((card) => {
    recipeObserver.observe(card);
});

const scrollIndicator = document.querySelector(".scroll-progress");
window.addEventListener("scroll", () => {
    const percent = window.scrollY / ( document.documentElement.scrollHeight - window.innerHeight ) * 100 + "%"; 
    scrollIndicator.style.width = percent
});

const headerbgc = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        headerbgc.style.background = "rgba(10, 10, 10, 0.95)";
    } else {
        headerbgc.style.background = "rgba(10, 10, 10, 0.9)";
    }
});
