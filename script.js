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

const animatedCont = document.querySelectorAll(".animate-on-scroll, .slide-left, .slide-right, .scale-up")

const animateObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate')
        }
    });
}, options);

animatedCont.forEach((card) => {
    animateObserver.observe(card);
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

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();                 // браузер не прыгает сам
        const id = link.getAttribute("href");   // например, "#chapter-2"
        document.querySelector(id).scrollIntoView({ behavior: "smooth", block: "center" });
    });
}); 

for (let i = 0; i < 50; i++) {
    const flake = document.createElement("div");
    flake.classList.add("particle");
    flake.style.left = Math.random() * 100 + "%";
    // ...ещё два случайных свойства
    flake.style.animationDelay = Math.random() * 100 + "ms";
    flake.style.animationDuration = Math.random() * 10000 + "ms";
    document.querySelector('.hero').appendChild(flake);
}

function countUp(element, target, index, duration = 2000) {
    let current = 0;
    const step = target / (duration / 16);
    setInterval(() => {
        if (current + step < target) {
            current += step
            element.innerHTML = Math.round(current) 
        } else {
            switch (index) {
                case 0:
                    element.innerHTML = "1M+"
                    break;

                case 1:
                    element.innerHTML = "99.9%"
                    break;
            
                default:
                    element.innerHTML = target
                    break;
            }
            
        }
    }, duration/16)
    

}

const statNum = document.querySelectorAll(".stat-number");

countUp(statNum[0], 1000000, 0, 500)
countUp(statNum[1], 99.9, 1, 500)