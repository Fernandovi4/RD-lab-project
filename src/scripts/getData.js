import displayData from './displayData'

const getData = () => {

    setTimeout(() => {
        try {
            fetch('https://jsonplaceholder.typicode.com/albums/1/photos?/_limit=5')
                .then(response => response.json())
                .then(json => displayData(json))
        } catch (err){
            throw new Error(err.message)
        }
    }, 500)
}
export default getData


