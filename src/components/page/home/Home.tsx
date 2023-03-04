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

 
    function deleteTweet(id:string){
        let newTweetsList = localTweets.filter((tweet,index)=>{
            let tweetCasting = (tweet as TypeTweet); 
            if(tweetCasting.id !== id){
                return tweet
            }

            
        });
        localStorage.setItem('tweets', JSON.stringify(newTweetsList));
        setTweets(newTweetsList);

    }

    function archiveTweet(id:string){
        let newTweetArchive = localTweets.filter((tweet,index)=>{
            let tweetCasting = (tweet as TypeTweet); 
            if(tweetCasting.id == id){
                return tweet
            }
        });
        let newArchivedTweets = [...localarchivedTweets,...newTweetArchive]
        localStorage.setItem('archivedTweets',JSON.stringify(newArchivedTweets))
        setTweetArchived(newArchivedTweets)
        deleteTweet(id);
    }

  

    function deleteTweetArchived(id:string){
            let newTweetsList = localarchivedTweets.filter((tweet,index)=>{
                let tweetCasting = (tweet as TypeTweet); 
                if(tweetCasting.id !== id){
                return tweet
                }
            });
            console.log(newTweetsList)
            localStorage.setItem('archivedTweets', JSON.stringify(newTweetsList));
            setTweetArchived(newTweetsList);
    }


    function unarchiveTweet(id:string){
        let unarchive_tweet = localarchivedTweets.filter((tweet,index)=>{
                let tweetCasting = (tweet as TypeTweet); 

                if(tweetCasting.id == id){
                    return tweet;
                }
        })
        deleteTweetArchived(id);

        let newTweetsList = [...localTweets,...unarchive_tweet]; // localtweet
        localStorage.setItem('tweets', JSON.stringify(newTweetsList));
        setTweets(newTweetsList);
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
                    delete={(id)=>{deleteTweet(id)}}
                    archive={(id)=>{archiveTweet(id)}}
                
                />

                <TweetModal
                    allTweets={tweetArchived}
                    deleteTweet={(id)=>{deleteTweetArchived(id)}}
                    unArchiveTweet={(id)=>{unarchiveTweet(id)}}     
                    />
                
        </div>
    )
}