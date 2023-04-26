import React from 'react'
import './App.css'
import { TwitterFollowCad } from './TwitterFollowCard.jsx'

export function App (){
    //SE PODRIA PASAR ESA FUNCIÓN COMO PROP
    //const formatUserName=(userName)=> `@${userName}`

    const users = [
        {
            userName:"midudev",
            name:"Midudev",
            initialIsFollowing:true
        },
        {
            userName:"Feid",
            name:"Ferxxo",
            initialIsFollowing:false
        },
        {
            userName:"KarolGMusic",
            name:"KG",
            initialIsFollowing:false
        },
        {
            userName:"MrBeast",
            name:"Elbe",
            initialIsFollowing:true
        },
        {
            userName:"MrBeast",
            name:"Elbe",
            initialIsFollowing:true
        },
        {
            userName:"Blessd",
            name:"Blecho",
            initialIsFollowing:true
        },
    ]

    return(
        <section className='App'>
        {
            users.map(user =>{
                const {userName,name,initialIsFollowing}=user
                return(
                    <TwitterFollowCad
                        key={userName}
                        userName={userName}
                        initialIsFollowing={initialIsFollowing}
                    >
                        {name}
                    </TwitterFollowCad>    
                )
            })
        }
        </section>
    )
}