export  default function ApiServices (element){
    this.getData = () => fetch(`https://jsonplaceholder.typicode.com/${element}`)
        .then(value => value.json())

}