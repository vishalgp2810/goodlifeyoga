import React from 'react';
import './recomendedVideo.css';
import VideoCard from './VideoCard';
import img1 from './images/unnamed.jpg';

function RecomendedVideo() {
    return (
        <div className='recomendedVideo'>
            <h1>Recomended</h1>
            <div className='recomendedVideo_video'>
                <VideoCard
                    title={'become a web developer | 2019/2020'}
                    views={'2.3M Views'}
                    timestamp={'3 days ago'}
                    channelImage={img1}
                    channel='Sony sanga'
                    image={img1}
                />
                <VideoCard
                    title={'become a web developer | 2019/2020'}
                    views={'2.3M Views'}
                    timestamp={'3 days ago'}
                    channelImage={img1}
                    channel='Sony sanga'
                    image={img1}
                />
                <VideoCard
                    title={'become a web developer | 2019/2020'}
                    views={'2.3M Views'}
                    timestamp={'3 days ago'}
                    channelImage={img1}
                    channel='Sony sanga'
                    image={img1}
                />
                <VideoCard
                    title={'become a web developer | 2019/2020'}
                    views={'2.3M Views'}
                    timestamp={'3 days ago'}
                    channelImage={img1}
                    channel='Sony sanga'
                    image={img1}
                />
                <VideoCard
                    title={'become a web developer | 2019/2020'}
                    views={'2.3M Views'}
                    timestamp={'3 days ago'}
                    channelImage={img1}
                    channel='Sony sanga'
                    image={img1}
                />
                <VideoCard
                    title={'become a web developer | 2019/2020'}
                    views={'2.3M Views'}
                    timestamp={'3 days ago'}
                    channelImage={img1}
                    channel='Sony sanga'
                    image={img1}
                />
            </div>
        </div>
    )
}

export default RecomendedVideo
