const slots = ['first', 'second', 'third'];

const users = [
    {id:1, name: 'moe', slot: 'first', selected: false},
    {id:2, name: 'larry', slot: 'second', selected: false},
    {id:3, name: 'curly', slot: 'third', selected: false},
    {id:4, name: 'lucy', slot: 'third', selected: false},            
];

const firstUserList = document.querySelector('#user-list-first');
const secondUserList = document.querySelector('#user-list-second');
const thirdUserList = document.querySelector('#user-list-third');

const render = (arr) =>{
    firstUserList.innerHTML = '';
    secondUserList.innerHTML = '';
    thirdUserList.innerHTML = '';

    arr.forEach(item => {
        const nameButton = document.createElement('button');
        nameButton.setAttribute('id', item.id);
        nameButton.innerText = item.name;
        nameButton.style.display = 'block';
        nameButton.style.margin = '1px 0';
        nameButton.style['border-style'] = 'hidden';
        nameButton.style.width = '100%';
        nameButton.style.height = '30px';
        nameButton.style.textAlign = 'left';
        nameButton.style['font-size'] = '15px';

        //make the selected nameBox(s) in color
        if(item.selected){
            nameButton.classList.add('selected');
        }

        if(item.slot === 'first'){
            firstUserList.appendChild(nameButton);
        }else if(item.slot === 'second'){
            secondUserList.appendChild(nameButton);
        }else{
            thirdUserList.appendChild(nameButton);
        }

        nameButton.addEventListener('click', ev => {
            const thisEl = ev.target;
            thisEl.classList.toggle('selected');
            if(!item.selected){
                item.selected = true;
            }else{
                item.selected = false;
            }
            
        });

    });
}

//create click event for the right button on the FIRST container
const firstRightButton = document.getElementById('first-right');
firstRightButton.addEventListener('click', ev => {

    users.forEach(currentItem => {
        if(currentItem.slot === 'first' && currentItem.selected){
            currentItem.slot = 'second';
        }
    })
    render(users);
})

const secondLeftButton = document.getElementById('second-left');
secondLeftButton.addEventListener('click', ev => {

    users.forEach(currentItem => {
        if(currentItem.slot === 'second' && currentItem.selected){
            currentItem.slot = 'first';
        }
    })
    render(users);
})

const secondRightButton = document.getElementById('second-right');
secondRightButton.addEventListener('click', ev => {

    users.forEach(currentItem => {
        if(currentItem.slot === 'second' && currentItem.selected){
            currentItem.slot = 'third';
        }
    })
    render(users);
})

const thirdLeftButton = document.getElementById('third-left');
thirdLeftButton.addEventListener('click', ev => {

    users.forEach(currentItem => {
        if(currentItem.slot === 'third' && currentItem.selected){
            currentItem.slot = 'second';
        }
    })
    render(users);
})

render(users);