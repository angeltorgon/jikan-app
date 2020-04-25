import React from 'react';
import './styles/anime-tabs.css';

const AnimeTabs: React.FC<any> = ({ setCurrentTab }) => {
    return (
        <div className="tab-container">
            <h4 
                className="tab" 
                onClick={() => setCurrentTab("episodes")}>Episodes</h4>
            <h4 className="tab" onClick={() => setCurrentTab("news")}>News</h4>
            <h4 className="tab" onClick={() => setCurrentTab("pictures")}>Pictures</h4>
            <h4 className="tab" onClick={() => setCurrentTab("videos")}>Videos</h4>
        </div>
    )
}

export default AnimeTabs;
