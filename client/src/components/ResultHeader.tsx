import React, { useEffect } from 'react'

interface IResultHeaderProps {
    title: string;
}

const ResultHeader: React.FC<IResultHeaderProps> = ({title}) => {
    return (
        <div>
            <h1>{ title }</h1>
            
        </div>
    )
};

export default ResultHeader;