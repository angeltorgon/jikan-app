import React from 'react';
import EpisodeCard from './EpisodeCard';

import './styles/episode-list.css';

interface ITrailerVideoProps {
    episodes: Array<any>
}

const EpisodeList: React.FC<ITrailerVideoProps> = ({
    episodes,
}) => {
    return (
        <div className="episode-list-container">
            <div className="paper">
                {episodes.map((episode) => <EpisodeCard episode={episode} />)}
            </div>
        </div>
    )
}

export default EpisodeList;