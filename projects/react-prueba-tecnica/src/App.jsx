import { useState,useEffect } from "react"
import './App.css'

const CATS_PREFIX_IMAGE_URL="https://cataas.com"
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact' 

export function App (){
    
    //const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${fistword}?size=50&color=red&json=true`  
    const [fact,setFact]=useState()
    const [image,setImage]=useState()

    useEffect(()=>{
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json() )
            .then(data => {
                const {fact} = data
                setFact(fact)                
                
            })
            
    },[])

    useEffect(() => {
        if (!fact) return

        const firstWord= fact.split(' ',3).join('')//.slice(0,3).join(' ')                         

                fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)                
                .then(res => res.json())
                .then(response =>  {                    
                    const {url} = response                  
                    setImage(url)
                })
    },[fact])

    return(
        <main>
        <h1> App de gatos </h1>
        {/* <section > */}
            
            {fact && <p> {fact} </p>}
            {image && <img src= {`${CATS_PREFIX_IMAGE_URL}${image}`} alt="Image from API using the first three words" />}
        {/* </section> */}
        </main>
    )
}