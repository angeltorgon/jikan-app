import React, { useEffect, useState } from 'react';
import ResultHeader from '../components/ResultHeader';
import EpisodeList from '../components/EpisodeList';
import ArticleList from '../components/ArticleList';
import PictureList from '../components/PictureList';
import VideoList from '../components/VideoList';
import AnimeTabs from '../components/AnimeTabs';
import axios from 'axios';
import Loader from "react-loader-spinner";

import "./styles/result-view.css";

const ResultView: React.FC<any> = (props) => {
    const [ details, setDetails ] = useState<any>(null)
    const [ currentTab, setCurrentTab ] = useState<string>("episodes")
    const resultId = props.match.params.id;

    useEffect(() => {
        const rootURL = 'https://api.jikan.moe/v3/'
        const details = axios.get(`${rootURL}anime/${resultId}`)

        Promise.all([details]).then((res) => {
            setDetails(res[0].data)
        })
    },[resultId]);

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
                <div>
                    <ResultHeader 
                        rank={details.rank}
                        imageUrl={details.image_url} 
                        title={details.title}
                        episodes={details.episodes}
                        background={details.synopsis}
                        status={details.status}
                        rating={details.rating}/>
                </div>
                <div>
                    <AnimeTabs setCurrentTab={setCurrentTab} />
                    { currentTab === "episodes" && <EpisodeList resultId={resultId}/>}
                    { currentTab === "news" && <ArticleList resultId={resultId}/>}
                    { currentTab === "pictures" && <PictureList resultId={resultId}/>}
                    { currentTab === "videos" && <VideoList resultId={resultId}/>}
                </div>
            </div>
        </div>
    )
}

export default ResultView;