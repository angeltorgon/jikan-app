import React, { useEffect, useState } from 'react';
import EpisodeCard from './EpisodeCard';
import axios from 'axios';
import Loader from "react-loader-spinner";

import './styles/episode-list.css';

interface ITrailerVideoProps {
    resultId: number;
}

const EpisodeList: React.FC<ITrailerVideoProps> = ({ resultId }) => {
    const rootURL = 'https://api.jikan.moe/v3/'
    const [ episodes, setEpisodes ] = useState<any>([])
    const [ isLoading, setIsLoading ] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        const fetchedEpisodes = axios.get(`${rootURL}anime/${resultId}/episodes`)

        Promise.all([ fetchedEpisodes  ]).then((res) => {
            console.log(res)
            setIsLoading(false)
            setEpisodes(res[0].data.episodes)
        })

    },[])

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

    if (episodes.length === 0) {
        return (
            <div className="episode-list-container">
                <h2 className="no-results-message">No episodes found...</h2>
            </div>
        )
    }

    return (
        <div className="episode-list-container">
            <div className="paper">
                {episodes.map((episode:any) => <EpisodeCard episode={episode} />)}
            </div>
        </div>
    )
}

export default EpisodeList;