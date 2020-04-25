import React from 'react'
import { Paper } from '@material-ui/core';
import moment from 'moment';
import './styles/episode-card.css';

const EpisodeCard: React.FC<any> = ({episode}) => {
    return (
        <Paper className="episode-card-container" elevation={3}>
            <h2>{episode.title}</h2>
            <div className="episode-info">
                <p>Episode: {episode.episode_id}</p>
                <p>Aired: {moment(episode.aired).format("LL")}</p>
                <a href={`${episode.forum_url}`}>Visit Forum</a> 
                <a href={`${episode.video_url}`}>View Video</a> 
            </div>
        </Paper>
    )
}

export default EpisodeCard
