import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(setLocalStorageInput, 500));
formEl.addEventListener('submit', resetFormSubmit);

checksLocalStorage();

function setLocalStorageInput(evt) {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: `${formEl.elements.email.value}`,
      message: `${formEl.elements.message.value}`,
    }),
  );
  console.log(evt.target.value);
}

function checksLocalStorage() {
  const localStorageValue = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (localStorageValue) {
    formEl.elements.email.value = localStorageValue.email || '';
    formEl.elements.message.value = localStorageValue.message || '';
  }
}

function resetFormSubmit(evt) {
  evt.preventDefault();

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  formEl.reset();

  localStorage.removeItem('feedback-form-state');
}
