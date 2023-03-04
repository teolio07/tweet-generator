import React, {useEffect,useState} from 'react';
import './tweets.css';
import { TypeTweet } from '../../DTO/TweetDto';
import {Tweet} from '../../ui/tweet/Tweet'
import { UrlWithStringQuery } from 'url';
interface tweets_props{
    allTweets:{}[],
    delete: (index:string)=>void,
    archive: (index:string)=>void
}

export function Tweets(props:tweets_props):JSX.Element{
    const [tweets,setTweets] = useState<TypeTweet[]>([]);

    let tweetsCasting:TypeTweet[] = (props.allTweets as TypeTweet[])
    let id = 0;
    
    function deleteTweet(index:string){
        props.delete(index)
    }

    function archive(index:string){
        props.archive(index)
        console.log(index+"desde")
    }
    
    useEffect(()=>{
        setTweets(tweetsCasting)
    },[props.allTweets])
    return(
        <ul className='ul_container'>
            <h2>Tweets</h2>
            {tweets.map((item) => (
                <li key={item.id}>

                    <Tweet name={item.name} tweet={item.tweet}/>
                    <button onClick={()=>{deleteTweet(item.id)}}>Delete</button>
                    <button onClick={()=>{archive(item.id)}}>Archive</button>
                {id++}


                </li>
            ))}
        </ul>
    )
}