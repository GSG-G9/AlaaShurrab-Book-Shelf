import React from 'react';

const Card = (props) =>{
    const { rating, name, des, image_url,url } = props;
    return(
        <div className="single-anime-container">
            <a href={url}>
                <img alt='tester' src={image_url}/>
                <div className='info'>
                    <p>Rating:{rating}</p>
                    <p>Description:{des}</p>
                </div>
            </a>
            <p>{name}</p>
        </div>
    )
}

export default Card;