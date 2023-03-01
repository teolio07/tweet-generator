import React from 'react';
import './tweet.css'
interface tweet_props{
    name:string,
    tweet:string
}

export function Tweet(props:tweet_props):JSX.Element{
    return(
        <div className='tweet'>
            <h2>{props.name}</h2>
            <h3>Tweet: {props.tweet}</h3>
        </div>
    )
}