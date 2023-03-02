import React, {useEffect,useState} from 'react';
import './tweets.css';
import { TypeTweet } from '../../DTO/TweetDto';
import {Tweet} from '../../ui/tweet/Tweet'
interface tweets_props{
    allTweets:{}[],
    delete: (indice:number)=>void
}

export function Tweets(props:tweets_props):JSX.Element{
    const [tweets,setTweets] = useState<TypeTweet[]>([]);

    let tweetsCasting:TypeTweet[] = (props.allTweets as TypeTweet[])
    let id = 0;
    
    function deleteTweet(indice:number){
        props.delete(indice)
        console.log(indice+"desde")
    }
    
    useEffect(()=>{
        setTweets(tweetsCasting)
    },[props.allTweets])
    return(
        <ul className='ul_container'>
            <h2>Tweets</h2>
        {tweets.map((item) => (
            <li key={id}>

                <Tweet name={item.name} tweet={item.tweet}/>
                <button onClick={()=>{let indi = id; deleteTweet(indi)}}>Eliminar</button>
                <button >Archivar</button>
                {id++}


            </li>
        ))}
        </ul>
    )
}