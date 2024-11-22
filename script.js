
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
