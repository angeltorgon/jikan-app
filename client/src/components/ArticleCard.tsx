import React from 'react'
import moment from 'moment';
import './styles/episode-card.css';

const ArticleCard: React.FC<any> = ({article}) => {
    return (
        <div className="episode-card-container" >
            <div className="episode-wrapper">
                <h2>{article.title}</h2>
                <div className="episode-info">
                    {/* <p className="episode-info">Episode: {article.episode_id}</p>
                    <p className="episode-info">Aired: {moment(articles.aired).format("LL")}</p>
                    <a href={`${episode.forum_url}`}>Visit Forum</a> 
                    <a href={`${episode.video_url}`}>View Video</a>  */}
                </div>
            </div>
        </div>
    )
}

export default ArticleCard;