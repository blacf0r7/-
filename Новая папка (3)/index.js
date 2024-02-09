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