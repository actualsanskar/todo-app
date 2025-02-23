let parent = document.querySelector('#task-list');
let input = document.querySelector('#valueInput');

function addTask(){

    if(input.value == ''){
        alert('Enter something in task box');
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;

        parent.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00D7';
        li.appendChild(span);

    }
    input.value = "";
}

document.querySelector('#task-list > li').addEventListener('click', ()=>{
    
})