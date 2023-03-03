import React,{useState,useRef} from "react";
import { Tweet } from "../../ui/tweet/Tweet";
import './tweetModa.css'
interface modal_props {

}

export function TweetModal(props:modal_props):JSX.Element{
    const modalRef = useRef<HTMLDivElement>(null)
    const showModal = ()=>{
        if(modalRef.current !== null){
            modalRef.current.classList.toggle('hide-modal')
        }
    }
    return (
        <div className="tweet-container-modal">
            <div className="modal hide-modal" ref={modalRef}></div>
            <button onClick={()=>{
                showModal();
            }}>Archived tweets</button>
        </div>
    )
}