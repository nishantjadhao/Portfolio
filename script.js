// Simple scroll animation for skill boxes
const skillBoxes = document.querySelectorAll(".skill-box");

window.addEventListener("scroll", () => {
    skillBoxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (boxTop < triggerPoint) {
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
        }
    });
});

const menuIcon = document.getElementById("Menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");
};


// Footer fade-in animation
window.addEventListener("load", () => {
    const footer = document.querySelector(".footer");
    footer.style.opacity = "1";
    footer.style.transform = "translateY(0)";
});

