import React, { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';
import { Article } from '../types.d';
import axios from 'axios';
import Loader from "react-loader-spinner";

const NewsList: React.FC<any> = ({resultId}) => {
    const rootURL = 'https://api.jikan.moe/v3/'
    const [ articles, setArticles ] = useState<Array<Article>>([])
    const [ isLoading, setIsLoading ] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        const fetchedArticles = axios.get(`${rootURL}anime/${resultId}/news`)

        Promise.all([ fetchedArticles ]).then((res) => {
            setIsLoading(false)
            setArticles(res[0].data.articles)
        })

    },[resultId])

    if (isLoading) {
        return (
            <div className="loader-container">
                <Loader
                    type="TailSpin"
                    color="red"
                    height={100}
                    width={100}
                    timeout={5000} //3 secs
                />
            </div>
        );
    }

    if (articles.length === 0) {
        return (
            <div className="video-list-container">
                <h2 className="no-results-message">No articles found...</h2>
            </div>
        )
    }

    return (
        <div>
            <div>
                {articles.map((article:Article) => <ArticleCard key={article.date} article={article} />)}
            </div> 
        </div>
    )
}

export default NewsList;
