// Simple script for carrousel (swiping)
document.querySelector('.carousel').addEventListener('wheel', (event) => {
    event.preventDefault();
    document.querySelector('.carousel').scrollLeft += event.deltaY;
});
