import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './tweetInput.css';
interface tweet_props{
    returnTweet:(tweet:{})=>void
}

export function TweetInput(props:tweet_props):JSX.Element{
    const [name,setName] = useState<string>("");
    const [tweet,setTweet] = useState<string>("");

    const sendTweet = (tweetFull:{})=>{
        props.returnTweet(tweetFull)
    }

    return(
        <form className='form'>
            <label>Nombre </label>
            <input type="text" onChange={(e)=>{
                setName(e.target.value)
            }}/>

            <label>Tweet</label>
            <input type="text" onChange={(e)=>{
                setTweet(e.target.value)
            }}/>

            <button onClick={(e)=>{
                e.preventDefault();
                let fullTweet:{} = {id:uuidv4(),name:name, tweet:tweet}
                sendTweet(fullTweet)
            }}>Enviar</button>
        </form>
    )
}