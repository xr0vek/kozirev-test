import { cardsList } from './cardsList.js'
import { createCard } from './createCard.js'
import './styles/normilize.scss'
import './styles/style.scss'


const cardListEl = document.getElementById('cardList')

const choiceCourses = {
    all: document.getElementById('all'),
    marketing: document.getElementById('marketing'),
    recruting: document.getElementById('recruting'),
    design: document.getElementById('design'),
    development: document.getElementById('development'),
    management: document.getElementById('management')
}
choiceCourses.all.parentElement.classList.add('hero__choice-item--active')

const choiceList = document.getElementById('choiceList')

let searchInputValue = ''
let searchCourceValue = ''

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
            searchCourceValue = ''
            renderList()
        } else {
            searchCourceValue = id
            renderList()
        }
    }
})
const searchInput = document.getElementById('search')
let timeOut = null

searchInput.addEventListener('input', (event) => {
    if (timeOut !== null) {
        clearInterval(timeOut)
    }
        timeOut = setTimeout(() => {
            searchInputValue = event.target.value
            renderList()
    }, 500);
})

function renderList() {
    let filtredCardsList
    if (searchCourceValue == '') {
        filtredCardsList = cardsList.filter(card => card.title.toLowerCase().includes(searchInputValue.toLocaleLowerCase()))
    } else {
        filtredCardsList = cardsList.filter(card => card.cource.toLowerCase().slice(-7) === searchCourceValue.slice(-7) & card.title.toLowerCase().includes(searchInputValue.toLowerCase()))
    }
    cardListEl.classList.add('hero__hide-list')
    setTimeout(() => {
        cardListEl.innerHTML = ""
        cardListEl.classList.remove("hero__hide-list")
        cardListEl.classList.add('hero__show-list')
        const elementArr = filtredCardsList.map((card) => createCard(card))
        elementArr.forEach(item => cardListEl.append(item))
    }, 200);
    cardListEl.classList.remove('hero__show-list')
}

renderList()

