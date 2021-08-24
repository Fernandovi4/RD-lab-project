document.addEventListener("DOMContentLoaded", function() {

    const path = window.location.pathname.split('/').pop();
    const activeNav = document.querySelectorAll(`[href="${path}"]`)[0];

    activeNav.classList.toggle('nav__link--active')
});