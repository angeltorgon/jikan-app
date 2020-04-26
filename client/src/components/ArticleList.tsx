import React, { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';
import axios from 'axios';
import Loader from "react-loader-spinner";

const NewsList: React.FC<any> = ({resultId}) => {
    const rootURL = 'https://api.jikan.moe/v3/'
    const [ articles, setArticles ] = useState<any>([])

    useEffect(() => {
        const fetchedArticles = axios.get(`${rootURL}anime/${resultId}/news`)

        Promise.all([ fetchedArticles ]).then((res) => {
            console.log(res)
            setArticles(res[0].data.articles)
        })

    },[])

    if (articles.length === 0) {
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

    return (
        <div>
            <div>
                {articles.map((article:any) => <ArticleCard article={article} />)}
            </div> 
        </div>
    )
}

export default NewsList;
