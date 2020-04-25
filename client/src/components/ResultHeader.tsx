import React from 'react';
import { Paper } from '@material-ui/core';

import './styles/result-header.css'

interface IResultHeaderProps {
    title: string;
    imageUrl: string;
    rank: number;
    episodes: number;
    rating: string;
    status: string;
    background: string;
}

const ResultHeader: React.FC<IResultHeaderProps> = ({
    title,
    imageUrl,
    rank,
    rating,
    episodes,
    status,
    background
}) => {
    return (
        <div className="result-info-container">
            <div className="result-header-paper">
                <img className="result-header-image" src={imageUrl} alt="anime cover"/>
                <div className="result-info">
                    <h2>{title}</h2>
                    <p className="info-item"><strong>Status:</strong>  {status}</p>
                    <p className="info-item"><strong>Rank:</strong>  {rank}</p>
                    <p className="info-item"><strong>Rating:</strong>  {rating}</p>
                    {episodes ? <p className="info-item"><strong>Episodes: </strong>  {episodes}</p> : null}
                    <div>
                        <p className="info-item-background"><strong>Background: </strong><br/> {background}</p>
                    </div>
                </div>
            </div>
        </div> 
    )
};

export default ResultHeader;