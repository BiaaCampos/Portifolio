// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } //else {
//             //entry.target.classList.remove('show');
//         //}
//     });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('flipped');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('flipped');
        });
        // Para toque em mobile:
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll('.skill');
    function revealSkills() {
        const triggerBottom = window.innerHeight * 0.95;
        skills.forEach((skill, i) => {
            const skillTop = skill.getBoundingClientRect().top;
            if (skillTop < triggerBottom) {
                setTimeout(() => {
                    skill.classList.add('visible');
                }, i * 120); // efeito cascata
            }
        });
    }
    window.addEventListener('scroll', revealSkills);
    revealSkills();
});