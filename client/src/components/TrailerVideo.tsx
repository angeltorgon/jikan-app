import React from 'react';
import { Paper } from '@material-ui/core';

import './styles/trailer-video.css';

interface ITrailerVideoProps {
    videoURL: string;
    synopsis: string;
}

const TrailerVideo: React.FC<ITrailerVideoProps> = ({
    videoURL,
    synopsis
}) => {
    return (
        <div className="trailer-video-container">
            <Paper className="paper">
                    <iframe className="video" height="415" src={`${videoURL}`}/>
                    <p>{synopsis}</p>
            </Paper>
        </div>
    )
}

export default TrailerVideo;