function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector('.hamburger-icon')
    menu.classList.toggle("open")
    PictureInPictureWindow.classList.toggle("open")
}