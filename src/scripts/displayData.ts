import createItemCard from './createItemCard'
import {Card} from "./cardType";

function displayData(data: Card[]):void {

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
    showNewMarker()
}

const showNewMarker = () => {

    const cardsMarkers = document.getElementsByClassName('newCardMarker')

    for( let i = 0; i < cardsMarkers.length; i++){
        const isNew = cardsMarkers[i].getAttribute('data-new')

        if(isNew === 'true'){
            cardsMarkers[i].classList.remove('displayNone')
            cardsMarkers[i].classList.add('displayInline')

        } else {
            cardsMarkers[i].classList.remove('displayInline')
            cardsMarkers[i].classList.add('displayNone')
        }
    }
    console.log(cardsMarkers)
}

export default displayData