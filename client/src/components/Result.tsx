import React from 'react'
import { Paper } from '@material-ui/core';

import './styles/result.css';

interface IResultProps {
    result: any;
}

const Result: React.FC<IResultProps> = ({result}) => {
    return (
        <Paper className="result-paper" elevation={3}>
            <img src={result.image_url} alt=""/>
            <div className="info-container">
                <h2>{result.title}</h2>
                <div>
                    <p>Rating: {result.score}</p>
                    {result.volumes ? <p>Volumes: {result.volumes}</p> : null}
                    {result.chapters ? <p>Chapters: {result.chapters}</p> : null}
                    {result.episodes ? <p>Episodes: {result.episodes}</p> : null}
                    <p>{result.synopsis}</p>
                    <p>Started: {result.start_date}</p>
                    <p>Ended: {result.end_date}</p>
                    <a href={result.url}>View</a>
                </div>
            </div>
        </Paper>
    )
}

export default  Result;