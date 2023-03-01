import  React, {useState} from 'react';
import { TweetInput } from '../../layout/InputTweet/TweetInput';
import { Tweets } from '../../layout/tweets/Tweets';
import { Tweet } from '../../ui/tweet/Tweet';
import './home.css'
interface home_props{

}

export function Home(props:home_props):JSX.Element{
    const [tweets,setTweets] = useState<{}[]>([])


    return(
        <div className="home_container">
                <TweetInput returnTweet={(tweet)=>{
                        let updateTweets:{}[] = [...tweets,tweet]
                        setTweets(updateTweets)
                       
                    }}/>
                <Tweets allTweets={tweets}/>
        </div>
    )
}