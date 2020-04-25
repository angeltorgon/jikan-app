import React from 'react';
import './styles/anime-tabs.css';

const AnimeTabs: React.FC<any> = (props) => {
    return (
        <div className="tab-container">
            <h4 className="tab">Episodes</h4>
            <h4 className="tab">News</h4>
            <h4 className="tab">Pictures</h4>
            <h4 className="tab">Videos</h4>
        </div>
    )
}

export default AnimeTabs;
