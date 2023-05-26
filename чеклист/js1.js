let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
        let li = document.createElement('li');
        let spand = document.createElement('span');
        spand.textContent = input.value;
        spand.addEventListener('click', function func(){

            let input1 = document.createElement('input');
            input1.value = spand.textContent;
            spand.textContent = ''
            input1.addEventListener('blur', function(){
                spand.textContent = input1.value;
                spand.addEventListener('click', func);

            })
            spand.appendChild(input1);

            spand.removeEventListener('click', func);
        })
        li.appendChild(spand)

        let a1 = document.createElement('a');
        a1.textContent = ' Удалить ';
        a1.href = '';
        let span = li.querySelector('span');
        a1.addEventListener('click', function(event){
            li.remove();
            event.preventDefault();
        })
        let a2 = document.createElement('a');
        a2.textContent = 'зачеркнуть ';
        a2.href = '';
        a2.addEventListener('click', function(event){
            span.classList.toggle('line-through');
            event.preventDefault();
        })
        li.appendChild(a1)
        li.appendChild(a2)
        list.appendChild(li);
        input.value='';
    }

});