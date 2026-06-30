document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------
    1. Scroll Reveal Fade-Up Animation
    ----------------------------------- */
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const trigger = window.innerHeight * 0.85;

        reveals.forEach(el => {
            const top = el.getBoundingClientRect().top;

            if (top < trigger) {
                el.classList.add("active");
            }
        });
    };

    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);


    /* -----------------------------------
    2. Scale Reveal Animation
    ----------------------------------- */
    const scales = document.querySelectorAll(".scale-reveal");

    const scaleOnScroll = () => {
        const trigger = window.innerHeight * 0.8;

        scales.forEach(el => {
            const top = el.getBoundingClientRect().top;

            if (top < trigger) {
                el.classList.add("active");
            }
        });
    };

    scaleOnScroll();
    window.addEventListener("scroll", scaleOnScroll);


    /* -----------------------------------
    3. Parallax Scroll Effect
    ----------------------------------- */
    window.addEventListener("scroll", () => {
        document.querySelectorAll(".parallax").forEach(el => {
            const speed = Number(el.dataset.speed) || 0.25;
            el.style.transform = `translateY(${window.scrollY * speed}px)`;
        });
    });


    /* -----------------------------------
    4. Magnetic Button Effect
    ----------------------------------- */
    document.querySelectorAll(".magnetic").forEach(btn => {

        btn.addEventListener("mousemove", e => {
            const rect = btn.getBoundingClientRect();

            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "translate(0, 0)";
        });

    });


    /* -----------------------------------
    5. 3D Tilt Card Hover
    ----------------------------------- */
    document.querySelectorAll(".tilt").forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = (y - rect.height / 2) / 20;
            const rotateY = (rect.width / 2 - x) / 20;

            card.style.transform =
                `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "rotateX(0deg) rotateY(0deg)";
        });

    });

});