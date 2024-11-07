
const button = document.querySelector('.form-button');
const email = document.querySelector('input');
const error = document.querySelector('.error');

button.addEventListener('click', (e) => {
  let emailValue = email.value;
  if (validateEmail(emailValue)) {
    error.classList.remove('display');
    email.style.borderColor="currentColor";
   
  } else {
    error.classList.add('display');
    email.style.borderColor="red";
    e.preventDefault();
  }
});

function validateEmail (email) {
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(String(email).toLowerCase());
}
