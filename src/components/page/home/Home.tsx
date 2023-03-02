import  React, {useState} from 'react';
import { TweetInput } from '../../layout/InputTweet/TweetInput';
import { Tweets } from '../../layout/tweets/Tweets';
import { Tweet } from '../../ui/tweet/Tweet';
import { TypeTweet } from '../../DTO/TweetDto';

import './home.css'
interface home_props{

}

export function Home(props:home_props):JSX.Element{
    let tweetsLocalStoage = localStorage.getItem('tweets');

    let localTweets:{}[] = [];
    if(tweetsLocalStoage){
        localTweets = JSON.parse(tweetsLocalStoage);

    }else{
        localStorage.setItem('tweets',JSON.stringify([]))

    }

    const deleteTweet = (indice:number)=>{
        if(tweetsLocalStoage){
            localTweets.splice(indice-1,1);
            setTweets(localTweets);
            localStorage.setItem('tweets', JSON.stringify(localTweets)); 
            /* let updateTweets = tweets.splice(indice,1);
            setTweets(updateTweets);
            localStorage.setItem('tweets', JSON.stringify(updateTweets)); */
            
        }
    }


    const [tweets,setTweets] = useState<{}[]>(localTweets)


    return(
        <div className="home_container">
                <TweetInput returnTweet={(tweet)=>{
                        let updateTweets:{}[] = [...tweets,tweet];
                        localStorage.setItem('tweets', JSON.stringify(updateTweets));
                        setTweets(updateTweets)
                       
                    }}/>
                <Tweets allTweets={tweets} delete={(indice)=>{deleteTweet(indice)}}/>
        </div>
    )
}