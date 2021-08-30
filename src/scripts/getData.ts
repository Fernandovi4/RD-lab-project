// import displayData from './displayData'

import sortByCreationData from "./sortByCreationData";


const getData = ():void  => {


    setTimeout(() => {
        try {
            fetch('src/static-data/cards.json')
                .then(response => response.json())
                .then(json => sortByCreationData(json))
                // .then(json => displayData(json))
        } catch (err){
            throw new Error(err.message)
        }
    }, 500)
}
export default getData