import React, { useEffect, useState } from 'react';
import PictureCard from './PictureCard';
import axios from 'axios';
import Loader from "react-loader-spinner";

const PictureList: React.FC<any> = ({resultId}) => {
    const rootURL = 'https://api.jikan.moe/v3/'
    const [ pictures, setPictures ] = useState<any>([])

    useEffect(() => {
        const fetchedPictures = axios.get(`${rootURL}anime/${resultId}/pictures`)

        Promise.all([ fetchedPictures ]).then((res) => {
            console.log(res)
            setPictures(res[0].data.pictures)
        })

    },[])

    if (pictures.length === 0) {
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
                {pictures.map((picture:any) => <PictureCard picture={picture} />)}
            </div> 
        </div>
    )
}

export default PictureList;
