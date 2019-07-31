const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const todo_ls = 'toDos';

let toDos = [];

function saveToDos() {
    localStorage.setItem(todo_ls, JSON.stringify(toDos));
    // localStroage에는 javascript의 data를 저장할 수 없고, 오직 string 형태만 저장 가능
    // 우선 JSON.stringify를 사용해 객체를 string 형태로 저장 
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li); 
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
        // parseInt : string을 넣으면 특정 진수의 정수를 반환하는 메서드. 옵션을 주지 않으면 10진수가 기본.
    });
    toDos = cleanToDos;
    saveToDos();
    // array.filter() : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환하는 메서드. forEach와 마찬가지고 array 요소 각각에게 실행됨.
}

function paintToDo(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.innerText = '😣';
    delBtn.addEventListener('click', deleteToDo);
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    span.innerText = text;
    li.id = newId;
    toDoList.appendChild(li);
    li.appendChild(delBtn);
    li.appendChild(span);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = '';
}

function loadTodos() {
    const loadedToDos = localStorage.getItem(todo_ls);
    if(loadedToDos !== null) {
        const parseToDos = JSON.parse(loadedToDos);
        // JSON.parse를 이용해 string으로 바꾸어 저장했던 localStorage의 정보를 다시 원 data 형태로 가져 옴.
        // JSON : Javascript Object Notation
        parseToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
        // forEach : 주어진 함수를 array 요소 각각에 실행하는 메서드
    }
}

function init() {
    loadTodos();
    toDoForm.addEventListener('submit', handleSubmit);
}
init();