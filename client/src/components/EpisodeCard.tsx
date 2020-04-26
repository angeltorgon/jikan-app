import React from 'react'
import moment from 'moment';
import './styles/episode-card.css';

const EpisodeCard: React.FC<any> = ({episode}) => {
    return (
        <div className="episode-card-container" >
            <div className="episode-wrapper">
                <h2>{episode.title}</h2>
                <div className="episode-info-continer">
                    <p className="episode-info">Episode: {episode.episode_id}</p>
                    <p className="episode-info">Aired: {moment(episode.aired).format("LL")}</p>
                    <div className="episode-link-container">
                        <a className="card-link" href={`${episode.forum_url}`}>Visit Forum</a> 
                        <a className="card-link" href={`${episode.video_url}`}>View Video</a> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EpisodeCard
