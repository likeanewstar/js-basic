const clockContainer = document.querySelector('.js-clock'),
      clockTitle = clockContainer.querySelector('h1');


function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    // 숫자가 한 자리수일 때 앞에 0을 붙여 주기 위해 삼항연산자(mini if)를 사용
}

function init() {
    getTime();
    setInterval(getTime, 1000);
};
init();