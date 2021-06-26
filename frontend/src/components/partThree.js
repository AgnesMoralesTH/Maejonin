import React from 'react'
import GalleryThree from './GalleryThree'

function PartThree() {
    const page3 = 'images/Page3.png'
    return (
        <>
        <div className="pimg3" style={{ backgroundImage: `url('${page3}')` }}>
            
            <div className="middle3">
                <span>Gallery:</span>
                <GalleryThree />
            </div>
        </div>
        

        </>
    )
}

export default PartThree
