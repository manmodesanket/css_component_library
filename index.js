


const toggleNav = () => {
    const nav = document.querySelector('.component-list');
    nav.classList.toggle('show');
}


const toggler = document.querySelector('.toggler');

toggler.addEventListener('click', toggleNav)