import React from 'react'
import { Paper } from '@material-ui/core';

import './styles/result.css';

interface IResultProps {
    result: any;
}

const Result: React.FC<IResultProps> = ({result}) => {
    return (
        <Paper className="paper" elevation={3}>
            <img src={result.image_url} alt=""/>
            <h3>{result.title}</h3>
            <div>
                <a href={result.url}>View</a>
            </div>
        </Paper>
    )
}

export default  Result;