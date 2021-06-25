import React from 'react'

function PartTwo() {
    const imagePath2 = 'images/Page2.png'

    return (
        <>
            <div className="pimg2" style={{ backgroundImage: `url('${imagePath2}')` }}>
        <div className="aboutMe">
            <div className="border"><span>About Me:<br/></span>
                <p>Carissa Fei is an artist currently enrolled at the Academy of Art University
                 majoring illustration. She also does other hobbies such as, film making, prop 
                 construction, costuming, photography and sculpting that can potentially become a 
                 career along side her major. 

                Her interests are Anime, Manga, Video Games, Pop Culture, Christianity, and  well, Art.</p>

            </div>
            <img src="images/Coins.png" className="coins" />

        </div>
    </div>
        </>
    )
}

export default PartTwo
