import React from 'react'
import Result from './Result';

interface IResultsProps {
    results: []
}

const Results: React.FC<IResultsProps> = (props) => {
    return (
        <div>
            {
                props.results.map(() => <Result />)
            }
        </div>
    )
}

export default Results;