const loginForm = document.querySelector('.loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log('..........................', event.target.login.value);
    console.log('..........................', event.target.password.value);
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: event.target.login.value,
        password: event.target.password.value,
      }),
    });
    const result = await response.json();
    console.log('----------------------->', result);
    const msg = document.querySelector('.logMsg');
    if (result.err) {
      msg.innerText = result.err;
      msg.style.color = 'red';
    } else {
      window.location.href = '/';
    }
  });
}
