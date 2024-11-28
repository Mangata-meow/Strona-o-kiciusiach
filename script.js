
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

// Pobierz przycisk
const scrollToTopBtn = document.getElementById("scrollToTop");

// Funkcja do pokazania/ukrycia przycisku na podstawie scrolla
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { // Jeśli przewiniemy 300px
        scrollToTopBtn.style.display = "block"; // Pokaż przycisk
    } else {
        scrollToTopBtn.style.display = "none"; // Ukryj przycisk
    }
});

// Funkcja do przewijania na górę
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Płynne przewijanie
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeToggle.textContent =
        document.body.classList.contains("dark-mode")
            ? "☀️ Tryb jasny"
            : "🌙 Tryb ciemny";
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
