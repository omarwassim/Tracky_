
function handleHoverEffect(element) {
    element.classList.add('hovered');
}
function removeHoverEffect(element) {
    element.classList.remove('hovered');
}
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.main-btn, .More-details');
    window.addEventListener('scroll', () => {
        cards.forEach(card => {
            if (isElementInViewport(card)) {
                handleHoverEffect(card);
            } else {
                removeHoverEffect(card);
            }
        });
    });
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            cards.forEach(card => {
                handleHoverEffect(card);
            });
        });
    });
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});