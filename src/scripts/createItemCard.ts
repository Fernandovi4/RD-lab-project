import {Card} from "./cardType";

const createItemCard = (obj: Card): HTMLElement => {

    const itemCard = document.createElement('li')
    itemCard.classList.add('itemCard')

    const itemCardHtml:string =
        `<div class="card__info">
            <span>
                <span class="itemCard__id">Id: ${obj.id} / </span>
                <span>Created: ${obj.creationData}</span>
            </span>
            <span class="newCardMarker displayNone" data-new=${obj.isNew} >NEW !!!</span>
        </div>
        <h3 class="itemCard__title">Title: ${obj.title}</h3>
        <img src="${obj.thumbnailUrl}" alt="image" class="itemCard__image">
        <p class="itemCard__download">downloaded today at ${new Date().toLocaleTimeString()}</p>
    `

    itemCard.innerHTML=(itemCardHtml)
    return itemCard
}
export  default createItemCard