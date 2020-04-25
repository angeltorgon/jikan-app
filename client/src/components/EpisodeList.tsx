import React from 'react';
import { Paper } from '@material-ui/core';

import './styles/trailer-video.css';

interface ITrailerVideoProps {
    episodes: Array<any>
}

const EpisodeList: React.FC<ITrailerVideoProps> = ({
    episodes,
}) => {
    return (
        <div className="trailer-video-container">
            <Paper className="paper">
                {episodes.map((episode) => <p>{episode.title}</p>)}
            </Paper>
        </div>
    )
}

export default EpisodeList;