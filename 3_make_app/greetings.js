const form = document.querySelector('.js-form'),
      input = form.querySelector('input');
      greetings = document.querySelector('.js-greetings');
// Local Storage : user의 브라우저에 작은 JS information을 저장하는 저장소.

const user_ls = 'currentUser';
const showClass = 'showing';

function saveName(text) {
    localStorage.setItem(user_ls, text);
};
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreetings(currentValue);
    saveName(currentValue);
};
function askForName() {
    form.classList.add(showClass);
    form.addEventListener('submit', handleSubmit);

};
function paintGreetings(text) {
    form.classList.remove(showClass);
    greetings.classList.add(showClass);
    greetings.innerText = `Hello, ${text}!`
};
function LoadName() {
    const currentUser = localStorage.getItem(user_ls);
    if (currentUser === null) {
        // she is not
        askForName();
    } else {
        // she is
        paintGreetings(currentUser); 
    }
};
function init() {
    LoadName();
};
init();