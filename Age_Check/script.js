let btn = document.querySelector('#yes');
let final = document.querySelector('#response');
let s2 = document.querySelector('#s2'); 

function display(message) {
    s2.classList.remove('dno');
    final.innerHTML = `${message}`;
}

btn.addEventListener('click', (e) => {
    let input = document.querySelector('#age');
    let age = parseInt(input.value)

    if (age != '' && !isNaN(age)) {

        if (age < 1)
            display(`Don't Mess, This System Bites`)

        else if (age < 5)
            display(`Do Something else Kid`)

        else if (age < 18)
            display(`Don't Come Here Till 18`)

        else if (age <= 20)
            display(`Classified Adult, Welcome TO GTA 6`)

        else if (age > 80)
            display(`Welcome to (Virtual) Heaven`);

        else if (age > 40)
            display(`Have Fun`)

        else if (age > 30)
            display(`Only if Today is Friday`)

        else if (age > 20)
            display(`Have Fun, But Focus on Goals, A Lil Bit`)

        else
            display(`Get Outta Here`)

    }
    else {
        display(`!!! Enter A Valid Number !!!`)
    }
})
