import React, { useEffect, useState } from 'react';
import PictureCard from './PictureCard';
import { Picture } from '../types.d';
import axios from 'axios';
import Loader from "react-loader-spinner";
import './styles/picture-card.css';

const PictureList: React.FC<any> = ({resultId}) => {
    const rootURL = 'https://api.jikan.moe/v3/'
    const [ pictures, setPictures ] = useState<Array<Picture>>([])
    const [ isLoading, setIsLoading ] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        const fetchedPictures = axios.get(`${rootURL}anime/${resultId}/pictures`)

        Promise.all([ fetchedPictures ]).then((res) => {
            setIsLoading(false)
            setPictures(res[0].data.pictures)
            console.log(res[0].data.pictures)
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

    if (pictures.length === 0) {
        return (
            <div className="picture-list-container">
                <h2 className="no-results-message">No pictures found...</h2>
            </div>
        )
    }

    return (
        <div className="picture-list-container">
            {pictures.map((picture: Picture) => <PictureCard picture={picture} />)}
        </div>
    )
}

export default PictureList;
