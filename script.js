
document.getElementById("current-date").textContent = "Bieżąca data: " + new Date().toLocaleDateString('pl-PL');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.5 }); 
document.querySelectorAll('.content-box').forEach((box) => {
    observer.observe(box);
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeToggle.textContent =
        document.body.classList.contains("dark-mode")
            ? "☀️ Light Mode"
            : "🌙 Dark Mode";
});
const title = document.querySelector("h1");
const titleText = title.textContent;
title.textContent = "";
let index = 0;

function typeTitle() {
    if (index < titleText.length) {
        title.textContent += titleText[index];
        index++;
        setTimeout(typeTitle, 100);
    }
}

typeTitle();
// Random Cat Fact
const catFacts = [
    "Koty przesypiają około 75% swojego życia.",
    "Koty mają 5 palców w przednich łapkach, ale tylko 4 w tylnich.",
    "Koty nie czują słodkiego.",
    "Najstarszy kot na świecie dożył 38 lat."
];

document.getElementById("catFactBtn").addEventListener("click", () => {
    const randomFact = catFacts[Math.floor(Math.random() * catFacts.length)];
    document.getElementById("catFact").textContent = randomFact;
});
