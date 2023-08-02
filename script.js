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

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

async function copyEmailToClipboard() {
    const email = "andresousa808@gmail.com";
    const clipboardInfoText = document.querySelector(".clipboard-info-text");

    await navigator.clipboard.writeText(email);

    clipboardInfoText.style.display = "inline-block";
    clipboardInfoText.style.animation = "speech-balloon-appear 1s normal forwards";

    window.setTimeout(hideClipboardNotification, 3000);
}

function hideClipboardNotification() {
    const clipboardInfoText = document.querySelector(".clipboard-info-text");

    clipboardInfoText.style.animation = "speech-balloon-disappear 1s normal forwards";
}

function handleMenuClick(menuIcon) {
    if (menuIcon.dataset.menu == "closed") {
        menuIcon.style.backgroundImage = 'url("./assets/icons/menu_close.svg")';
        menuIcon.dataset.menu = "opened"
        showMenu();
    }
    else {
        menuIcon.style.backgroundImage = 'url("./assets/icons/menu_open.svg")';
        menuIcon.dataset.menu = "closed";
        closeMenu();
    }
}

function showMenu() {
    let menu = document.querySelector("header");
    menu.classList.add("menu-show");
}

function closeMenu() {
    let menu = document.querySelector("header");
    menu.classList.remove("menu-show");
}