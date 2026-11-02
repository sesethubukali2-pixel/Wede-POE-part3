// JavaScript source code
const revealElements = document.querySelectorAll(
    "section, .contact-card"
);

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
});

revealElements.forEach(function(element) {
    element.classList.add("reveal");
    observer.observe(element);
});