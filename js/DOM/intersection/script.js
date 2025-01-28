const cards = document.querySelectorAll('.card');

// Add hidden class initially
cards.forEach(card => {
    card.classList.add('hidden');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
        } else {
            entry.target.classList.remove('visible');
            entry.target.classList.add('hidden');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '-50px'
});

cards.forEach(card => {
    observer.observe(card);
});
