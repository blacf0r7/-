let main = document.querySelector('.main')
console.log(main);
const massCard = [
    {
    name:"Мышь Razer Viper",
    content:"высоко-точная, легкая, беспроводнвая мышь",
    button:"Купить",
    },
    {
    name:"Наушники Razer Barracuda X",
    content:"легкие, беспроводные наушники",
    button:"Купить",
    },
    {
    name:"Сет s1mple",
    content:"Те самые девайсы которыми играет величайший игрок",
    button:"Купить",
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

