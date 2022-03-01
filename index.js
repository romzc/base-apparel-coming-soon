const button = document.getElementById('send');
const email = document.getElementById('email');
const text = document.getElementById('error-text');

button.addEventListener('click', (event) => {
    /* prevent auto refresh */
    event.preventDefault();

    const data = String(email.value);

    if( validEmail(data) ) {
        text.classList.remove('error-text');
        email.classList.remove('error');
    }
    else {
        email.classList.add('error');
        text.classList.add('error-text');
    }

    console.log(data);
});

const validEmail = (string) => {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return string.match(emailRegex);    
}