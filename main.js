const input = document.getElementById('pass');
const password = "user";
const message = "Masz zupe w lodowce"
const div = document.querySelector('div');

input.addEventListener('input', (e) => {
    if (password === e.target.value)  {
        div.textContent = message;
        e.target.value = "";
    }
    else {
        div.textContent = "";
    }
})

input.addEventListener('focus', (e)=> {
e.target.classList.add('active');
})
input.addEventListener('blur', (e)=> {
    e.target.classList.remove('active');
    })
    