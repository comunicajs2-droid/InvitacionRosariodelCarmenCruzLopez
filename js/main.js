const targetDate = new Date("2026-06-20T12:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) return;

    document.getElementById("days").textContent =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").textContent =
        Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

    document.getElementById("minutes").textContent =
        Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );

    document.getElementById("seconds").textContent =
        Math.floor(
            (distance % (1000 * 60))
            / 1000
        );
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ANIMACIÓN SCROLL */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(item => {

        if (
            item.getBoundingClientRect().top <
            trigger
        ) {

            item.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

/* PÉTALOS */

const petalsContainer =
document.querySelector(".petals");

function createPetal() {

    if (!petalsContainer) return;

    const petal =
    document.createElement("span");

    petal.innerHTML = "🌸";

    petal.style.position = "absolute";
    petal.style.left =
        Math.random() * 100 + "%";

    petal.style.top = "-50px";

    petal.style.fontSize =
        (15 + Math.random() * 20) + "px";

    petalsContainer.appendChild(
        petal
    );

    let y = -50;

    const x =
    Math.random() *
    window.innerWidth;

    const interval =
    setInterval(() => {

        y += 2;

        petal.style.transform =
            `translate(${x}px, ${y}px) rotate(${y}deg)`;

        if (
            y >
            window.innerHeight + 100
        ) {

            clearInterval(interval);

            petal.remove();

        }

    }, 20);

}

setInterval(
    createPetal,
    1000
);