/* ==========================================================
   HERO INTERACTIONS
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".hero");
    const mouseGlow = document.querySelector(".mouse-glow");
    const dashboard = document.querySelector(".dashboard");
    const floatingCards = document.querySelectorAll(".floating-card");
    const heroButtons = document.querySelectorAll(".btn");

    /* ======================================================
       Mouse Glow
    ====================================================== */

    hero.addEventListener("mousemove", (e) => {

        const rect = hero.getBoundingClientRect();

        mouseGlow.style.left = `${e.clientX - rect.left}px`;
        mouseGlow.style.top = `${e.clientY - rect.top}px`;

    });

    /* ======================================================
       Dashboard Tilt
    ====================================================== */

    hero.addEventListener("mousemove", (e) => {

        const rect = dashboard.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = (y - rect.height / 2) / 30;
        const rotateY = (rect.width / 2 - x) / 30;

        dashboard.style.transform =
            `perspective(1200px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });

    hero.addEventListener("mouseleave", () => {

        dashboard.style.transform =
            "perspective(1200px) rotateX(0deg) rotateY(0deg)";

    });

    /* ======================================================
       Floating Cards
    ====================================================== */

    hero.addEventListener("mousemove", (e) => {

        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        floatingCards.forEach((card, index) => {

            const speed = (index + 1) * 12;

            const moveX = (x - 0.5) * speed;
            const moveY = (y - 0.5) * speed;

            card.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

        });

    });

    /* ======================================================
       Magnetic Buttons
    ====================================================== */

    heroButtons.forEach(button => {

        button.addEventListener("mousemove", (e) => {

            const rect = button.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const moveX = (x - rect.width / 2) / 8;
            const moveY = (y - rect.height / 2) / 8;

            button.style.transform =
                `translate(${moveX}px,${moveY}px)`;

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform =
                "translate(0,0)";

        });

    });

    /* ======================================================
       Scroll Reveal
    ====================================================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.2

    });

    document.querySelectorAll(
        ".hero-badge,.hero-title,.hero-description,.hero-buttons,.dashboard,.floating-card"
    ).forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });

    /* ======================================================
       Progress Bars
    ====================================================== */

    const fills = document.querySelectorAll(".fill");

    setTimeout(() => {

        fills.forEach(fill => {

            fill.style.width =
                fill.classList.contains("seo") ? "88%" :
                fill.classList.contains("ads") ? "95%" :
                fill.classList.contains("branding") ? "76%" :
                "83%";

        });

    }, 800);

    /* ======================================================
       SVG Line Animation
    ====================================================== */

    const chartLine = document.querySelector(".chart-line");

    setTimeout(() => {

        chartLine.style.transition =
            "stroke-dashoffset 2.5s ease";

        chartLine.style.strokeDashoffset = "0";

    }, 1200);

});