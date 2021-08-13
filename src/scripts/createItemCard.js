const createItemCard = (obj) => {

    const itemCard = document.createElement('li')
    itemCard.classList.add('itemCard')

    const itemCardHtml = `
        <p class="itemCard__id">Id: ${obj.id}</p>
        <h3 class="itemCard__title">Title: ${obj.title}</h3>
        <img src="${obj.thumbnailUrl}" alt="image" class="itemCard__image">
        <p class="itemCard__download">downloaded today at ${new Date().toLocaleTimeString()}</p>
    `
    itemCard.innerHTML=(itemCardHtml)
    return itemCard
}
export  default createItemCard