import React from 'react'
import moment from 'moment';
import { IArticleCardProps } from '../types.d';
import './styles/episode-card.css';
import './styles/article-card.css';

const ArticleCard: React.FC<IArticleCardProps> = ({ article }) => {
    return (
        <div className="episode-card-container" >
            <div className="episode-wrapper">
                <h2>{article.title}</h2>
                <p>by <strong>{article.author_name}</strong> - {moment(article.date).format("LL")}</p>
                <div className="article-info-container">
                    <img alt="author" className="author-image" src={article.image_url} />
                    <p className="article-info">{article.intro} </p>
                    {/* <p className="episode-info">Aired: {moment(articles.aired).format("LL")}</p>
                    <a href={`${episode.forum_url}`}>Visit Forum</a> 
                    <a href={`${episode.video_url}`}>View Video</a>  */}
                </div>
                <a className="card-link" href={article.url}>View article</a>
            </div>
        </div>
    )
}

export default ArticleCard;