const input = document.getElementById('pass');
const passwords = ["user", "sPring", "John"];
const messages = ["I've prepared sandwitches for you", "Spring is the best time of the year", "John has got a nice car"]
const div = document.querySelector('div');

input.addEventListener('input', (e) => {
    const text = e.target.value;
    div.textContent = "";

passwords.forEach((password, index) => {
if (password.toLocaleLowerCase() === text.toLocaleLowerCase()) {
    div.textContent = messages[index]
}
})
})
// input.addEventListener('input', (e) => {
//     if (password === e.target.value)  {
//         div.textContent = message;
//         e.target.value = "";
//     }
//     else {
//         div.textContent = "";
//     }
// })

input.addEventListener('focus', (e)=> {
e.target.classList.add('active');
})
input.addEventListener('blur', (e)=> {
    e.target.classList.remove('active');
    })
    