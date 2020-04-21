import React from 'react'

interface ITrailerVideoProps {
    videoURL: string;
    synopsis: string;
}

const TrailerVideo: React.FC<ITrailerVideoProps> = ({
    videoURL,
    synopsis
}) => {
    return (
        <div>
            <iframe width="520" height="415"
                src={`${videoURL}`}>
            </iframe>
            <p>{synopsis}</p>
        </div>
    )
}

export default TrailerVideo;