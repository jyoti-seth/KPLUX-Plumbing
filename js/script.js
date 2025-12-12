document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 10% visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove the initial opacity: 0 and let CSS animation take over
                entry.target.style.opacity = 1; 
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target all elements with the animation class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});


// for faq
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".faq-item");

    items.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });
});

// rivew
// document.addEventListener("DOMContentLoaded", () => {

//     const track = document.getElementById("testimonialTrack");
//     const slides = document.querySelectorAll(".slide");

//     const next = document.getElementById("nextBtn");
//     const prev = document.getElementById("prevBtn");

//     let index = 0;

//     function moveSlider() {
//         const width = slides[0].clientWidth;
//         track.style.transform = `translateX(-${index * width}px)`;
//     }

//     next.addEventListener("click", () => {
//         index = (index + 1) % slides.length;
//         moveSlider();
//     });

//     prev.addEventListener("click", () => {
//         index = (index - 1 + slides.length) % slides.length;
//         moveSlider();
//     });

//     // Adjust when resizing
//     window.addEventListener("resize", moveSlider);
// });


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 }
    }
});


document.getElementById("menuBtn").addEventListener("click", function () {
    document.getElementById("mobileMenu").classList.toggle("hidden");
});
