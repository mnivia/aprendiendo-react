import { useEffect, useState } from "react"
import './App.css'

//Constante de las APIS
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact' 
const CATS_PREFIX_IMAGE_URL="https://cataas.com"


export function App(){
    //Generar dos estados cada vez que se renderice la pagina
    //Estados
    const [fact,setFact] = useState()
    const [imageURL,setImageURL] = useState()

    useEffect(() =>{
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const {fact} = data
            setFact(fact)
        })

    },[])

    useEffect(()=>{
        if(!fact) return
        const words = fact.split(' ',3).join('')
        console.log(words)
        const api = `https://cataas.com/cat/says/${words}?size=50&color=red&json=true`
        console.log(api)
        fetch(api)
        .then(res => res.json())
        .then(data => {
            const {url} = data
            setImageURL(url)
        })
        
    },[fact])

    return(
        <main>
            <h1>Mejor App de Gatos</h1>
            { fact &&  <p> {fact}</p>}
            { imageURL && <img src={`${CATS_PREFIX_IMAGE_URL}${imageURL}`} alt="Imagen relacionada al hecho"></img>}

        </main>
        
    )
}