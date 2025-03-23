let first = {
    "0": "Crazy",
    "1": "Amazing",
    "2": "Fantastic",
    "3": "Awesome",
    "4": "The Boys"

}

let second = {
    "0": "Engines",
    "1": "Tech",
    "2": "Woodens",
    "3": "Food",
    "4": "Garments"

}

let third = {
    "0": "Corp.",
    "1": "Limited",
    "2": "Hub"
}

let r1 = parseInt(5 * Math.random())
let r2 = parseInt(5 * Math.random())
let r3 = parseInt(3 * Math.random())

// this is a way to get random numbers between 0 to n-1, here 0 to 2 ; for n = 3

function give(r1, r2, r3) {
    let name = first[r1] + " " + second[r2] + " " + third[r3];
    document.querySelector(".Result").innerHTML = `<h1>${name}</h1>`;
}

give(r1,r2,r3)

let btn = document.querySelector(".btn");

btn.addEventListener('click', function (e) {
    let r1 = parseInt(5 * Math.random())
    let r2 = parseInt(5 * Math.random())
    let r3 = parseInt(3 * Math.random())
    give(r1, r2, r3)
})