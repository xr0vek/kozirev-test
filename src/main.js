import { cardsArray } from './cardsArray'
import { createCard } from './createCard.js'
import './styles/normilize.scss'
import './styles/style.scss'


const cardList = document.getElementById('cardList')

const choiceCourses = {
    all: document.getElementById('all'),
    marketing: document.getElementById('marketing'),
    recruting: document.getElementById('recruting'),
    design: document.getElementById('design'),
    development: document.getElementById('development'),
}
choiceCourses.all.parentElement.classList.add('hero__choice-item--active')

const choiceList = document.getElementById('choiceList')

choiceList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const id = event.target.id
        for (const key in choiceCourses) {
            if (!Object.hasOwn(choiceCourses, key)) continue;
            const element = choiceCourses[key];
            element.parentElement.classList.remove('hero__choice-item--active')
        }
        choiceCourses[id].parentElement.classList.add('hero__choice-item--active')
        if (id === 'all') {
            renderList(cardsArray)
        } else {
            renderList(cardsArray.filter(card => card.cource.toLocaleLowerCase().slice(-7) === id.slice(-7)))
        }
    }
})

const searchInput = document.getElementById('search')
searchInput.addEventListener('input', (event) => {
    if (event.target.value == '') {
        renderList(cardsArray)
    } else {
        renderList(cardsArray.filter(card => card.title.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())))
    }
})

function renderList(arr) {
    cardList.innerHTML = ""
    const elementArr = arr.map((card) => createCard(card))
    elementArr.forEach(item => cardList.append(item))
}

renderList(cardsArray)

