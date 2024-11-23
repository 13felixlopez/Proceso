// script.js
document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');

    window.addEventListener('scroll', () => {
        steps.forEach(step => {
            const rect = step.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                step.style.boxShadow = '0px 8px 20px rgba(0, 0, 0, 0.2)';
            } else {
                step.style.boxShadow = 'none';
            }
        });
    });
});
