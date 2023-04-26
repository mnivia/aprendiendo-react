import React from 'react'
import './App.css'
import { TwitterFollowCad } from './TwitterFollowCard.jsx'

export function App (){
    //SE PODRIA PASAR ESA FUNCIÓN COMO PROP
    //const formatUserName=(userName)=> `@${userName}`

    return(
        <section className='App'>
        <TwitterFollowCad initialIsFollowing userName="midudev"> 
        Midudev
        </TwitterFollowCad>
        <TwitterFollowCad initialIsFollowing={false} userName="Feid">
         Ferxxo   
         </TwitterFollowCad>
        <TwitterFollowCad initialIsFollowing={false} userName="KarolGMusic">
         KG   
         </TwitterFollowCad>
        <TwitterFollowCad initialIsFollowing userName="MrBeast">
        Elbe
         </TwitterFollowCad>
        <TwitterFollowCad initialIsFollowing userName="Blessd">
        Blecho
        </TwitterFollowCad>
        </section>
    )
}