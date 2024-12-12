// Pobranie bieżącej daty
const CurrentDate = new Date();
const formattedDate = CurrentDate.toLocaleDateString('pl-PL');

// Ustalenie godziny i w zależności od niej wyświetlanie odpowiedniego powitania
const hours = CurrentDate.getHours();
let greetingMessage = 'Miłego dnia! 🐱';

if (hours < 12) {
    greetingMessage = 'Dzień dobry! 🐱';
} else if (hours < 18) {
    greetingMessage = 'Dzień w połowie minął! 🐱';
} else {
    greetingMessage = 'Dobry wieczór! 🐱';
}

// Wyświetlanie powitania oraz daty
document.getElementById("greeting-message").textContent = greetingMessage;
document.getElementById("current-date").textContent = "Bieżąca data: " + formattedDate;

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

// Kalkulator wieku kota
function calculateAge() {
    const catAge = document.getElementById("cat-age").value;
    const result = document.getElementById("cat-age-result");
    
    if (catAge < 0) {
        result.textContent = "Proszę wprowadzić poprawny wiek.";
        return;
    }

    let humanYears;
    if (catAge === 1) {
        humanYears = 15;
    } else if (catAge === 2) {
        humanYears = 24;
    } else {
        humanYears = 24 + (catAge - 2) * 4;
    }

    result.textContent = `Twój kot ma około ${humanYears} ludzkich lat.`;
}

// Wyszukiwarka ras kotów
function searchRaces() {
    const query = document.getElementById("search").value.toLowerCase();
    const races = document.querySelectorAll("#race-list li");
    
    races.forEach(race => {
        const raceName = race.textContent.toLowerCase();
        if (raceName.includes(query)) {
            race.style.display = "block";
        } else {
            race.style.display = "none";
        }
    });
}

// Galeria zdjęć kotów
function openModal(imgElement) {
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.cursor = "pointer";
    modal.innerHTML = `<img src="${imgElement.src}" style="max-width: 80%; max-height: 80%; border-radius: 10px;">`;
    
    document.body.appendChild(modal);
    modal.addEventListener("click", () => {
        modal.remove();
    });
}

// Animowany kot reagujący na ruchy kursora
const cat = document.getElementById("cat");

document.body.addEventListener("mousemove", (e) => {
    cat.style.left = e.pageX - 50 + "px";
    cat.style.top = e.pageY - 50 + "px";
    cat.style.transform = "rotate(" + e.pageX / 5 + "deg)";
});

// Koty miauczące przy interakcji
const button = document.getElementById("play-sound");

button.addEventListener("click", function() {
    const audio = new Audio('meow-sound.mp3');
    audio.play();
});

// Kalendarz
let currentDate = new Date();

function generateCalendar(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    
    const monthNames = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    document.getElementById("month-name").textContent = `${monthNames[month]} ${year}`;

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();

    const tableBody = document.querySelector("#calendar-table tbody");
    tableBody.innerHTML = '';
    
    let row = tableBody.insertRow();
    let cell;
    let dayCount = 1;

    for (let i = 0; i < firstDayOfWeek; i++) {
        row.insertCell();
    }

    for (let i = firstDayOfWeek; dayCount <= daysInMonth; i++) {
        if (i === 7) {
            row = tableBody.insertRow();
            i = 0;
        }
        cell = row.insertCell();
        cell.textContent = dayCount;
        cell.addEventListener("click", () => {
            alert(`Kliknąłeś na dzień: ${dayCount}`);
        });
        dayCount++;
    }
}

function changeMonth(offset) {
    currentDate.setMonth(currentDate.getMonth() + offset);
    generateCalendar(currentDate);
}

document.getElementById("prev-month").addEventListener("click", () => changeMonth(-1));
document.getElementById("next-month").addEventListener("click", () => changeMonth(1));

generateCalendar(currentDate);

// Scroll to top button
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { 
        scrollToTopBtn.style.display = "block"; 
    } else {
        scrollToTopBtn.style.display = "none"; 
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
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

// Typowanie tytułu
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
