import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import axios from 'axios';
import Loader from "react-loader-spinner";
import { Video } from '../types.d';
import './styles/video-list.css';

const VideoList: React.FC<any> = ({resultId}) => {
    const rootURL = 'https://api.jikan.moe/v3/'
    const [ videos, setvideos ] = useState<Array<Video>>([])
    const [ isLoading, setIsLoading ] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        const fetchedVideos = axios.get(`${rootURL}anime/${resultId}/videos`)

        Promise.all([ fetchedVideos ]).then((res) => {
            setIsLoading(false)
            setvideos(res[0].data.episodes)
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

    if (videos.length === 0) {
        return (
            <div className="video-list-container">
                <h2 className="no-results-message">No videos found...</h2>
            </div>
        )
    }

    return (
        <div className="video-list-container">
            <div>
                {videos.map((video: Video) => <VideoCard key={video.image_url} video={video} />)}
            </div>
        </div>
    )
}

export default VideoList;
