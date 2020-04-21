import React from 'react'
import Result from './Result';
import { Link } from 'react-router-dom';
import './styles/results.css';

interface IResultsProps {
    results: []
}

const Results: React.FC<IResultsProps> = (props) => {
    return (
        <div className="results">
            {
                props.results.map((result: any) => (
                    <Link to={`anime/${result.mal_id}`}>
                        <Result result={result} key={result.mal_id} />
                    </Link>
                ))
            }
        </div>
    )
}

export default Results;