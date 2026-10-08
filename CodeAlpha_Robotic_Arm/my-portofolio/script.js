/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* =====================================================
   PARTICLES
===================================================== */

const particleContainer =
    document.getElementById("particles");

const particleCount = 80;


for (let i = 0; i < particleCount; i++) {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (Math.random() * 10 + 8) + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particle.style.opacity =
        Math.random();

    particleContainer.appendChild(particle);
}


/* =====================================================
   3D PROFILE MOUSE MOVEMENT
===================================================== */

const profileScene =
    document.querySelector(".profile-scene");


document.addEventListener("mousemove", (event) => {

    const x =
        (window.innerWidth / 2 - event.clientX) / 35;

    const y =
        (window.innerHeight / 2 - event.clientY) / 35;


    profileScene.style.transform =
        `rotateY(${x}deg) rotateX(${y}deg)`;

});


/* =====================================================
   RESET PROFILE POSITION
===================================================== */

document.addEventListener("mouseleave", () => {

    profileScene.style.transform =
        "rotateY(0deg) rotateX(0deg)";

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const cards =
    document.querySelectorAll(
        ".about-card, .skill-card, .project-card"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.15
        }

    );


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(40px)";

    card.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(card);

});


/* =====================================================
   CONTACT FORM
===================================================== */

function sendMessage(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    const subject =
        encodeURIComponent(
            "Portfolio Contact from " + name
        );


    const body =
        encodeURIComponent(

            "Name: " +
            name +

            "\nEmail: " +
            email +

            "\n\nMessage:\n" +
            message

        );


    window.location.href =
        `mailto:ramachandravarma2006@gmail.com?subject=${subject}&body=${body}`;

}


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section");

const navigationLinks =
    document.querySelectorAll(".navbar nav a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   3D CUBE MOUSE EFFECT
===================================================== */

const cube =
    document.querySelector(".cube");


document.addEventListener("mousemove", event => {

    const mouseX =
        (event.clientX / window.innerWidth - 0.5) * 20;

    const mouseY =
        (event.clientY / window.innerHeight - 0.5) * 20;


    cube.style.marginLeft =
        mouseX + "px";

    cube.style.marginTop =
        mouseY + "px";

});
const canvas = document.getElementById("particles");

if (canvas) {
    const ctx = canvas.getContext("2d");

    let particles = [];
    const particleCount = 120;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function createParticles() {
        particles = [];

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.7,
                speedY: (Math.random() - 0.5) * 0.7
            });
        }
    }

    createParticles();

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.x < 0 || particle.x > canvas.width) {
                particle.speedX *= -1;
            }

            if (particle.y < 0 || particle.y > canvas.height) {
                particle.speedY *= -1;
            }

            ctx.beginPath();
            ctx.arc(
                particle.x,
                particle.y,
                particle.radius,
                0,
                Math.PI * 2
            );

            ctx.fillStyle = "#00ffff";
            ctx.shadowBlur = 10;
            ctx.shadowColor = "#00ffff";
            ctx.fill();
        });

        requestAnimationFrame(animateParticles);
    }

    animateParticles();
}