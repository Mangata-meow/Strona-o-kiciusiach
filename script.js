
document.getElementById("current-date").textContent = "Bieżąca data: " + new Date().toLocaleDateString('pl-PL');
window.onload = function() {
    document.body.classList.add("loaded"); // Po załadowaniu strony, uruchom animację
};
