let main = document.querySelector('.main')
console.log(main);
const massCard = [
    {
    name:"В CS2 вышел новый кейс!",
    content:"Valve выпустили новый ящик с новым типом ножей",
    button:"Подробнее",
    },
    {
    name:"Шок контент",
    content:"В мобильном пабге можно теперь пить на рулем",
    button:"Подробнее",
    },
    {
    name:"Overwatch 2 мнение от про",
    content:"Хотите узнать мнение про игрока?",
    button:"Подробности здесь",
    }
]



for (let i = 0; i < massCard.length; i++){
    main.insertAdjacentHTML("afterbegin",` <article class="art-list">
                <img class="Превью" alt="">
                <h1>${massCard[i].name}</h1>
                <h1>${massCard[i].content}</h1>
                <button>${massCard[i].button}</button>
              </article>`)
}

let hours = document.getElementById("hours");
let min = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let h = 1;
let m = 20;
let s = 40;

// setTimeout(() => {
//     console.log("Привет, пользователь!")
// }, 10000);

const timer = setInterval(() => {
    seconds.innerText = s;
    min.innerText = m;
    hours.innerText = h;
    s = s - 1;
    if (s == 0) {
        m--;
        s = 60;
    }
    if (m == 0) {
        h--;
        m = 60;
    }
    if (h < 0) {
        clearInterval(timer);
        seconds.innerText = 0;
        min.innerText = 0;
        hours.innerText = 0;
    }
}, 1000);