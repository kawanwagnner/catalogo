/* Menu Navegation; */

const btn = document.querySelector("#menu-hamb");

btn.addEventListener("click", () => {
    const navbar = document.querySelector("#navbar");
    const linksNavBar = document.querySelectorAll('li a[href^="#"]');

    navbar.classList.toggle("active");
    if (btn.innerHTML == '<i class="fa-solid fa-x"></i>') {
        btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        btn.style.top = "40px";
    } else {
        btn.innerHTML = '<i class="fa-solid fa-x"></i>';
        btn.style.top = "30px";
    }

    function removeMenu() {
        const navbarActive = document.querySelector("#navbar.active");
        navbarActive.classList.remove("active");
        btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

    linksNavBar[0].addEventListener("click", () => removeMenu());
    linksNavBar[1].addEventListener("click", () => removeMenu());
    linksNavBar[2].addEventListener("click", () => removeMenu());
});

/* Scroll Reveal; */

window.sr = ScrollReveal({ reset: true });

sr.reveal("#tile-menu", {
    rotate: { x: 5, y: 20, z: 0 },
    duration: 2000,
});

sr.reveal("#logo-img", { duration: 2000 });

sr.reveal(".container", { rotate: { x: 5, y: 20, z: 0 }, duration: 2000 });

sr.reveal("#bares", {
    rotate: { x: 5, y: 20, z: 0 },
    duration: 2000,
});

sr.reveal(".card", { rotate: { x: 5, y: 20, z: 0 }, duration: 1000 });

sr.reveal("#produtos", { duration: 2000 });

/* Pop-Up; */

// const btnBuy = document.querySelectorAll(".btn-buy");
// btnBuy.addEventListener("click", () => {
//     window.alert("kdnkds")
// })

