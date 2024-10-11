// Get the circular cursor element
const cursorCircle = document.querySelector('.cursor-circle');

// Listen for mouse movement on the page
document.addEventListener('mousemove', (event) => {
    // Get the mouse's X and Y coordinates
    const mouseX = event.pageX;
    const mouseY = event.pageY;

    // Set the position of the circular object to follow the mouse
    cursorCircle.style.transform = `translate3d(${mouseX - 15}px, ${mouseY - 15}px, 0)`;
});
