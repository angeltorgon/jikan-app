import React from 'react'
import Result from './Result';

interface IResultsProps {
    results: []
}

const Results: React.FC<IResultsProps> = (props) => {
    return (
        <div>
            {
                props.results.map((result: any) => <Result result={result} key={result.mal_id} />)
            }
        </div>
    )
}

export default Results;