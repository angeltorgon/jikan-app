import React, { useEffect, useState } from 'react';
import EpisodeCard from './EpisodeCard';
import axios from 'axios';
import Loader from "react-loader-spinner";

const NewsList: React.FC<any> = ({resultId}) => {
    const rootURL = 'https://api.jikan.moe/v3/'
    const [ news, setNews ] = useState<any>([])

    useEffect(() => {
        const fetchedEpisodes = axios.get(`${rootURL}anime/${resultId}/news`)

        Promise.all([ fetchedEpisodes  ]).then((res) => {
            console.log(res)
            setNews(res[0].data.articles)
        })

    },[])

    if (news.length === 0) {
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
            
        </div>
    )
}

export default NewsList;
