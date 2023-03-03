import  React, {useState} from 'react';
import { TweetInput } from '../../layout/InputTweet/TweetInput';
import { Tweets } from '../../layout/tweets/Tweets';
import { TweetModal } from '../../layout/tweetModal/TweetModal';
import { TypeTweet } from '../../DTO/TweetDto';
import './home.css'
interface home_props{

}

export function Home(props:home_props):JSX.Element{
    let tweetsLocalStoage = localStorage.getItem('tweets');
    let archivedTweetsLocalStoage = localStorage.getItem('archivedTweets');

    let localTweets:{}[] = [];
    let localarchivedTweets:{}[]=[];
    if(tweetsLocalStoage){
        localTweets = JSON.parse(tweetsLocalStoage);

    }else{
        localStorage.setItem('tweets',JSON.stringify([]))

    }

    if(archivedTweetsLocalStoage){
        localarchivedTweets = JSON.parse(archivedTweetsLocalStoage)
    }else{
        localStorage.setItem('archivedTweets',JSON.stringify([]))
    }

    function Filter (element:TypeTweet){
        return element
    }

    const deleteTweet = (indice:string)=>{
        if(tweetsLocalStoage){
            
            let dataTweets = localTweets.filter((function(currentValue, index, arr){
                let filters:TypeTweet[] = (currentValue as TypeTweet[])
            }))
            /* localTweets.splice(indice-1,1);
            setTweets(localTweets);
            localStorage.setItem('tweets', JSON.stringify(localTweets));  */
            /* let updateTweets = tweets.splice(indice,1);
            setTweets(updateTweets);
            localStorage.setItem('tweets', JSON.stringify(updateTweets)); */
            
        }
    }

    const archiveTweet = (index:string)=>{
        if(tweetsLocalStoage){
            let tweetArchivedSingle = localTweets.slice(index-1);
            let listTweetArchived = [...tweetArchived,tweetArchivedSingle];
            localStorage.setItem('archivedTweets',JSON.stringify(listTweetArchived))
            localTweets.splice(index-1,1);
            setTweets(localTweets);
            localStorage.setItem('tweets', JSON.stringify(localTweets)); 
        }
    }


    const [tweets,setTweets] = useState<{}[]>(localTweets);
    const [tweetArchived,setTweetArchived] = useState<{}[]>(localarchivedTweets);


    return(
        <div className="home_container">
                <TweetInput returnTweet={(tweet)=>{
                        let updateTweets:{}[] = [...tweets,tweet];
                        localStorage.setItem('tweets', JSON.stringify(updateTweets));
                        setTweets(updateTweets)
                       
                    }}/>
                <Tweets 
                    allTweets={tweets}
                    delete={(indice)=>{deleteTweet(indice)}}
                    archive={(index)=>{archiveTweet(index)}}
                
                />
                <TweetModal/>
        </div>
    )
}