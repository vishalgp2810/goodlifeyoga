import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import './liveclass.css';
import ClassDetalsCard from './liveCard';
import liveClassDefaultData from './liveclassData';
import Logo from './images/images.png';

const Liveclasse = () => {
    const [liveClasstData, setLiveClassData] = useState(liveClassDefaultData.liveClassDefaultData);
    console.log(liveClasstData)
    const [isLiveClassView, setIsLiveClassView] = useState(true)

    const handleChangeView = (data) => {
        setIsLiveClassView(data)
    }

    return (
        <>
            <div>
                <div className='liveclass_heade'><Typography color='inherit' variant='h6'> LIVE CLASSES</Typography></div>
                <div className='recomendedVideo'>
                    <div className='recomendedVideo_video'>
                        {liveClasstData && liveClasstData.map((record, index) => {
                            return <ClassDetalsCard
                                handleChangeView={(data) => handleChangeView(data)}
                                image={record.image_link}
                                logo={Logo}
                                amount={record.Amount}


                            />
                            
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Liveclasse
