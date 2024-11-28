
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
// Tablica ciekawostek
const facts = [
    "Kot ma 230 kości, podczas gdy człowiek ma tylko 206.",
    "Koty spędzają około 70% swojego życia na spaniu.",
    "Nos kota jest tak unikalny jak odcisk palca człowieka.",
    "Kot może biec z prędkością do 48 km/h na krótkich dystansach.",
    "W starożytnym Egipcie koty były czczone jako święte zwierzęta.",
    "Koty nie mają obojczyków, co pozwala im przecisnąć się przez każdą przestrzeń, przez którą przejdzie ich głowa."
];

// Funkcja losująca ciekawostkę
function showRandomFact() {
    const factElement = document.getElementById("randomFact");
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.textContent = facts[randomIndex];
    
    // Losowanie kolorów tła przycisku
    changeButtonColor();
}

// Funkcja zmieniająca kolor przycisku
function changeButtonColor() {
    const button = document.getElementById("factButton");
    const randomColor = getRandomColor();
    button.style.backgroundColor = randomColor;
}

// Funkcja generująca losowy kolor
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Nasłuchiwanie na kliknięcie przycisku
const factButton = document.getElementById("factButton");
factButton.addEventListener("click", showRandomFact);
