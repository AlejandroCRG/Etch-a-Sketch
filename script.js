let divcontainer = document.querySelector('.grid-container')


let i = 1;
while (i <= 16){
    let div = document.createElement('div');
    div.setAttribute('id', `${i}`);
    div.setAttribute('class', `grid`);
    divcontainer.appendChild(div);
    i++;
}

let gridarrays = document.querySelectorAll('.grid')

console.log(gridarrays)