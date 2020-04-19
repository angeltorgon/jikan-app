import React from 'react'

interface IResultProps {
    result: any;
}

const Result: React.FC<IResultProps> = ({result}) => {
    return (
        <div>
            <img src={result.image_url} alt=""/>
            <h3>{result.title}</h3>
            <div>
                <a href={result.url}>View</a>
            </div>
        </div>
    )
}

export default  Result;