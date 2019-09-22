const input = document.getElementById('pass');
const password = "user";
const message = "Hello, Magda here";

const div = document.querySelector('div');
input.addEventListener('input', (e) => {
    if (password === e.target.value)  {
        div.textContent = message;
    }
    else {
        div.textContent = "You have typed wrong password!"
    }
})
