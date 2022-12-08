let gridbtn = document.createElement('button')
let body = document.querySelector('body')
let divcontainer = document.querySelector('.grid-container')
setSize(16)



function setSize(input){
    let gridarrays = document.querySelectorAll('.grid')
    gridarrays.forEach((grid) => grid.remove())
    input = prompt('Set size brudda')
    divcontainer.style.gridTemplateColumns = `repeat(${input}, 1fr)`
    divcontainer.style.gridTemplateRows = `repeat(${input}, 1fr)`
    let value = input * input
    if (input <= 100){
        for (let i = 1; i <= value; i++){
            let div = document.createElement('div');
            div.setAttribute('id', `${i}`);
            div.setAttribute('class', `grid`);
            divcontainer.appendChild(div);
        }
    }
    else{
        console.log('error')
    }
}

let button = document.querySelector('.sizebtn')
button.addEventListener('click', function(e){
    setSize()
})
