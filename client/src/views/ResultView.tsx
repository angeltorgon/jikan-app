import React, { useEffect, useState } from 'react';
import ResultHeader from '../components/ResultHeader';
import axios from 'axios';

const ResultView: React.FC<any> = (props) => {
    const [ details, setDetails ] = useState<any>({})
    useEffect(() => {
        const resultId = props.match.params.id;
        const rootURL = 'https://api.jikan.moe/v3/'
        const details = axios.get(`${rootURL}anime/${resultId}`)

        Promise.all([details]).then((res) => {
            console.log(res)
            setDetails(res[0].data)
        })
    },[]);

    return (
        <div>
            <ResultHeader 
                rank={details.rank}
                imageUrl={details.image_url} 
                title={details.title}
                episodes={details.episodes}
                background={details.background}
                status={details.status}
                rating={details.rating}/>

        </div>
    )
}

export default ResultView;