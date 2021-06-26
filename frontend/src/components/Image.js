import React from 'react'
import { Link } from 'react-router-dom';

function Image({image}){
    return (
        <Link to={`/gallery/${image._id}`} className="grid-item">
            <img className='galleryImage' src={image.image} alt="" />
        </Link>
    )
}

export default Image