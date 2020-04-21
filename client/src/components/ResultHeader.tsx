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
        <Paper>
            <div className="result-info-container">
                <img className="result-header-image" src={imageUrl} alt="anime cover"/>
                <div className="result-info">
                    <h2>{title}</h2>
                    <p>Status: {status}</p>
                    <p>Rank: {rank}</p>
                    <p>Rating: {rating}</p>
                    {episodes ? <p>Episodes: {episodes}</p> : null}
                    <p>Background: {background}</p>
                </div>
            </div> 
        </Paper>
    )
};

export default ResultHeader;