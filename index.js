const toggleNav = () => {
    const nav = document.querySelector('.component-list');
    nav.classList.toggle('show');
}


const toggler = document.querySelector('.toggler');

toggler.addEventListener('click', toggleNav);

const toasts = document.querySelectorAll('.toasts');
const successToast = document.querySelectorAll('.toast-btn');

const handleSucessToast = (toastMessage) => {

    const toastNotification = document.createElement('div');
    toastNotification.classList.add('toast-success');
    toastNotification.innerText = `${toastMessage}`
    toasts[0].appendChild(toastNotification);

    setTimeout(() => {
        toastNotification.remove();
    }, 2000);

}


successToast[0].addEventListener('click', () => handleSucessToast('This is success toast.'))