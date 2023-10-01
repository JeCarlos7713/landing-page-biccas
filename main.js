
document.addEventListener('DOMContentLoaded', () => {
    const phrase = document.querySelector('.title');
    
    //typeWrite(phrase);
})

const typeWrite = (e) => {
    const textArray = e.innerHTML.split('');
    e.innerHTML = '';

    textArray.forEach(function (letter, i) {
        setTimeout(function () {
            e.innerHTML += letter;
        }, 120 * i)
    });
}