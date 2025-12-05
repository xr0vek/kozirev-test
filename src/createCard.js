export function createCard({avatar, title, cource, price, author}) {
    const li = document.createElement('li')
    li.classList.add('hero__item')
    const img = document.createElement('img')
    img.src = avatar
    const content = document.createElement('div')
    content.classList.add('hero__item-content')
    const courceEl = document.createElement('span')
    courceEl.textContent = cource
    switch (cource) {
        case 'Marketing': courceEl.classList.add('hero__color-success') 
        break
        case "Management": courceEl.classList.add('hero__color-info')
        break
        case 'HR & Recruting': courceEl.classList.add('hero__color-warning')
        break
        case 'Design': courceEl.classList.add('hero__color-design')
        break
        case 'Development': courceEl.classList.add('hero__color-development')
        break
    }
    const titleEl = document.createElement('h2')
    titleEl.textContent = title
    const box = document.createElement('div')
    box.classList.add('hero__item-price')
    const priceEl = document.createElement('span')
    priceEl.textContent = price
    const authoreEl = document.createElement('span')
    authoreEl.textContent = "| " + author
    box.append(priceEl, authoreEl)
    content.append(courceEl, titleEl, box)
    li.append(img, content)

    return li
}