const submit = document.querySelector('.get-in-button');
const error = document.getElementById('emailerror');
const regex = /[A-Z]/;
const email = document.getElementById('email');

email.addEventListener('input', () => {
  if (regex.test(email.value) === true) {
    error.innerHTML = 'Please enter the email without caps';
    error.classList.add('activerror');
    submit.classList.add('inactive');
    submit.disabled = true;
  } else {
    error.innerHTML = '';
    submit.disabled = false;
    submit.classList.remove('inactive');
    error.classList.remove('activerror');
  }
});