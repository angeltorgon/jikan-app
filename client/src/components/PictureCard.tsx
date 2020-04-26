import React from 'react'

const PictureCard: React.FC<any> = (props) => {
    return (
        <div>
            <img src={props.picture.large}/> 
        </div>
    )
}

export default PictureCard;