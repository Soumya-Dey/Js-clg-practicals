const form = document.querySelector('.form');
const username = document.querySelector('#username');
const pass1 = document.querySelector('#pass1');
const pass2 = document.querySelector('#pass2');

form.onsubmit = (event) => {
  if (pass1.value.toString() !== pass2.value.toString()) {
    event.preventDefault();
    showErr("Passwords don't match", 20000);
  } else if (pass1.value.length < 6) {
    event.preventDefault();
    showErr('Password must be 6 or more characters', 20000);
  } else {
    username.value = '';
    pass1.value = '';
    pass2.value = '';
  }
};

const showErr = (errMsg, removalInterval) => {
  const errText = document.querySelector('.err-text');

  pass1.style.borderColor = '#e66767';
  pass2.style.borderColor = '#e66767';
  errText.innerHTML = errMsg;
  errText.classList.add('show');

  let interval = setInterval(() => {
    errText.classList.remove('show');
    clearInterval(interval);
  }, +removalInterval);
};
