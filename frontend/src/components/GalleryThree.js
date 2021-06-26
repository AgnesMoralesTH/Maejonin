import React, {useState, useEffect } from 'react'
import axios from 'axios'
import Image from './Image'

function GalleryThree() {
    const [gallery, setGallery ] = useState([])

    useEffect(() => {
        async function fetchGallery(){
            const {data} = await axios.get('/api/images/')
            setGallery(data)
            console.log(data)
        }
        fetchGallery()
    },[])

    return (
        <div className="grid-container">
            {gallery.map((image) => (
                <Image image={image} key={image._id} className="grid-item" />
            ))}
        </div>
    )
}

export default GalleryThree
