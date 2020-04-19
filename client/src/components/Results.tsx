import React from 'react'
import Result from './Result';
import './styles/results.css';

interface IResultsProps {
    results: []
}

const Results: React.FC<IResultsProps> = (props) => {
    return (
        <div className="results">
            {
                props.results.map((result: any) => <Result result={result} key={result.mal_id} />)
            }
        </div>
    )
}

export default Results;