import React, { useEffect, useState } from 'react';
import ResultHeader from '../components/ResultHeader';
import TrailerVideo from '../components/TrailerVideo';
import axios from 'axios';
import Loader from "react-loader-spinner";

import "./styles/result-view.css";

const ResultView: React.FC<any> = (props) => {
    const [ details, setDetails ] = useState<any>(null)
    useEffect(() => {
        const resultId = props.match.params.id;
        const rootURL = 'https://api.jikan.moe/v3/'
        const details = axios.get(`${rootURL}anime/${resultId}`)
        const espisodes = axios.get(`${rootURL}anime/${resultId}/episodes`)

        Promise.all([details, espisodes]).then((res) => {
            console.log(res)
            setDetails(res[0].data)
        })
    },[]);

    if (details === null) {
        return (
            <div className="home-container">
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
        <div className="result-view-container">
            <div className="result-wrapper">
                <ResultHeader 
                    rank={details.rank}
                    imageUrl={details.image_url} 
                    title={details.title}
                    episodes={details.episodes}
                    background={details.synopsis}
                    status={details.status}
                    rating={details.rating}/>
                <TrailerVideo videoURL={details.trailer_url} synopsis={details.synopsis}/>
            </div>
        </div>
    )
}

export default ResultView;