var swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        300: {
            slidesPerView: 1
        },
        420: {
            slidesPerView: 3
        },
        740: {
            slidesPerView: 5
        }
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

async function copyEmailToClipboard() {
    const email = "andresousa808@gmail.com";
    const clipboardInfoText = document.querySelector(".clipboard-info-text");

    await navigator.clipboard.writeText(email);

    clipboardInfoText.style.display = "inline-block";
    clipboardInfoText.style.animation = "speech-balloon-appear 1s normal forwards";
}