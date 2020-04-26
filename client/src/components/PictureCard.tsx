import React from 'react';
import './styles/picture-card.css';

const PictureCard: React.FC<any> = (props) => {
    return (
        <div className="picture-card-container">
            <img className="image" src={props.picture.large}/> 
        </div>
    )
}

export default PictureCard;