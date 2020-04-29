import React from 'react';
import { IPictureCardProps } from '../types.d';
import './styles/picture-card.css';

const PictureCard: React.FC<IPictureCardProps> = ({ picture }) => {
    return (
        <div className="picture-card-container">
            <img alt="cartoon poster" className="image" src={picture.large}/> 
        </div>
    )
}

export default PictureCard;