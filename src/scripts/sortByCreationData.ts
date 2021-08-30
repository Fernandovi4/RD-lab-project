import {Card} from "./cardType";
import displayData from "./displayData";

const sortByCreationData = (data: Card[]): void => {

    data.sort((a:Card, b:Card) => dateToTimeStamp(b.creationData)- dateToTimeStamp(a.creationData))

    markNewCards(data)

}

const markNewCards = (data: Card[]) => {


    const newestId = Math.max.apply(Math, data.map(function(o:Card) { return o.id; }))
    data.forEach((el:Card) => {
        el.isNew = el.id === newestId;
    })
    displayData(data)
}

const dateToTimeStamp = (date: string) : number =>{

    const dateArr = date.split(',')
    const years = Number(dateArr[0])
    const day = Number(dateArr[1])
    const month = Number(dateArr[2])

    return (new Date(years,day,month).getTime())/1000
}

export default sortByCreationData