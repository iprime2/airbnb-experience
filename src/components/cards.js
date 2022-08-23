import React from 'react'
import star from './star.png'

export default function card(props){
    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.location === "Online"){
        badgeText = "ONLINE"
    }
    
    return(
        <div className='cards-main'>
            {badgeText && <div className='card-badge'>{badgeText}</div> }
            <img src={`/images/${props.coverImg}`} className="cards-img" />
            <div className='cards-stats'>
                <img src={star} className='star-logo' />
                <span> {props.stats.rating}</span>
                <span> ({props.stats.reviewCount}) ~ </span>
                <span className='gray'>{props.location}</span>
            </div>
            <p className='cards-title'> {props.title}</p>
            <p>
                <span className='bold'>From ${props.price} </span> / person
            </p>
        </div>
    )
}