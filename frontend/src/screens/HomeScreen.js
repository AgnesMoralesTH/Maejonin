import React from 'react'
import PartTwo from '../components/partTwo'
import PartThree from '../components/partThree'

function HomeScreen() {
    const imagePath = 'cloudsmain.png'
    const midMount = 'images/midMount.png'
    const clouds = 'images/cloudsbottom.png'
    const ForGround = 'images/Forground2.png'
    const rightMount = 'images/rightMount.png'
    const rightbird = 'images/blackbird.png'
    return (
        <>
        <div className="backClouds1" style={{ backgroundImage: `url('${clouds}')` }}>
            
            
         <div className="part1" style={{ backgroundImage: `url('${imagePath}')` }}>
             <div className="midMount1" style={{ backgroundImage: `url('${midMount}')` }}></div>
             <div className="rightMount1" style={{ backgroundImage: `url('${rightMount}')` }}></div>
             <div className="rightbird1" style={{ backgroundImage: `url('${rightbird}')` }}></div>
             <div className="forGround1" style={{ backgroundImage: `url('${ForGround}')` }}></div>
             <div className="middleText">
                 <h1>Carissa Fei</h1>
                 <img src="./images/logopoo.png" className="logo" alt="broken"/>
             </div>
         </div>
         


         </div>
    
        <PartTwo />
        <PartThree />
        </>


      
    )
}

export default HomeScreen
