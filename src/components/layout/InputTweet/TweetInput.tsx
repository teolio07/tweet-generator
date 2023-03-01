import react, {useState} from 'react'
import './tweetInput.css'
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
                let fullTweet:{} = {name:name, tweet:tweet}
                sendTweet(fullTweet)
            }}>Enviar</button>
        </form>
    )
}