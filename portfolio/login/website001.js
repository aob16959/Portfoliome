
const openRegisterRight = document.querySelector('.h1-register')
const openLoginRight = document.querySelector('.h1-login')
const loginWrapper = document.querySelector('.login-wrapper')

openRegisterRight.addEventListener('click', () =>
{
    loginWrapper.classList.toggle('open');

});
openLoginRight.addEventListener('click', () =>
{
    loginWrapper.classList.toggle('open1');

});

