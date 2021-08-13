import createItemCard from './createItemCard'

function displayData(data) {

    const loader = document.querySelector('.loader')
    const itemsList = document.createElement('ul')

    itemsList.classList.add('card__list')

    data.forEach(el => {
        itemsList.insertAdjacentElement('beforeend', createItemCard(el))
    })

    try {
        document.getElementById('content').appendChild(itemsList)
    } catch (err){
        console.log(new Error(err.message))
        return
    }

    loader.classList.toggle('displayNone')
}

export default displayData