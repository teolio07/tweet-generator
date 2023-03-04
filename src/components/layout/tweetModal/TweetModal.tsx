import React,{useState,useRef, useEffect} from "react";
import { TypeTweet } from "../../DTO/TweetDto";
import { Tweet } from "../../ui/tweet/Tweet";
import './tweetModa.css'
interface modal_props {
    allTweets:{}[],
    deleteTweet:(id:string)=>void,
    unArchiveTweet:(id:string)=>void
}

export function TweetModal(props:modal_props):JSX.Element{
    let tweetsCasting:TypeTweet[] = (props.allTweets as TypeTweet[])
    
    const modalRef = useRef<HTMLDivElement>(null);
    const [tweets,setTweet] = useState<TypeTweet[]>((props.allTweets as TypeTweet[]));

    let idLi = 0;

    const showModal = ()=>{
        if(modalRef.current !== null){
            modalRef.current.classList.toggle('hide-modal')
        }
    }

    const deleteTweet =(id:string)=>{
        props.deleteTweet(id)
    }

    const unArchive =(id:string)=>{
        props.unArchiveTweet(id)
    }

    useEffect(()=>{
        setTweet(tweetsCasting)
    },[props.allTweets])

    return (
        <div className="tweet-container-modal">
            <div className="modal hide-modal" ref={modalRef}>
                <ul className='ul_container' >
                    <h2>Tweets archive</h2>    <button onClick={()=>{showModal()}} style={{width:"5vw"}}>Close</button>
                    {tweets.map((item) => (
                
                        <li key={item.id}>

                            <Tweet name={item.name} tweet={item.tweet}/>
                            <button onClick={()=>{deleteTweet(item.id)}}>Delete</button>
                            <button onClick={()=>{unArchive(item.id)}}>Unarchive</button>
                            {idLi}


                        </li>
            ))}
        </ul>
            </div>
            <button onClick={()=>{
                showModal();
            }}>Archived tweets</button>
        </div>
    )
}