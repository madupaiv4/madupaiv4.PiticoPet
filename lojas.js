document.addEventListener('DOMContentLoaded', () => {
    const ratings = document.querySelectorAll('.rating');

    ratings.forEach(rating => {
        const stars = rating.querySelector('.stars');
        const ratingValue = parseFloat(rating.getAttribute('data-rating'));
        const percent = (ratingValue / 5) * 100;
        stars.style.setProperty('--percent', `${percent}%`);
    });
});
