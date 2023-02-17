/* let dynamicSlidesPerView = 5;

const mediaQuery = window.matchMedia("(max-width: 960px)");

if (mediaQuery.matches) {
    dynamicSlidesPerView = 3;
} */

var swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
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