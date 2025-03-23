let a = parseInt(document.querySelector('#a').value);
let _ = document.querySelector('#_').value;
let b = parseInt(document.querySelector('#b').value);

let btn = document.querySelector('.btn');
let result = document.querySelector('.result');
let final = document.querySelector('.final');

let replace = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
};

btn.addEventListener('click', (e) => {

    a = parseInt(document.querySelector('#a').value) || 0;
    _ = document.querySelector('#_').value;
    b = parseInt(document.querySelector('#b').value) || 0;

    final.style.gap = '100px';

    let random = Math.floor(Math.random() * 10);
    
    if (random < 5) {
        let ans = eval(`${a} ${_} ${b}`);
        
        console.log(`${a} ${_} ${b} = ${ans} is Correct if ${random} < 5`)
        result.innerHTML = `<h2>${ans}</h2>`;
    } 
    else {
        console.log(`${a} ${_} ${b} = `)

        _ = replace[_] || _;
        
        let ans = eval(`${a} ${_} ${b}`);

        console.log(`${ans} is Correct if ${random} < 5`)
        result.innerHTML = `<h2>${ans}</h2>`;
    }
});