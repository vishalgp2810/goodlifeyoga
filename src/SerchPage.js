import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import image from './images/12.jpeg';

function SerchPage() {
    return (
        <div className='searchPage' >
            <div className='searchPage_filter'>
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image=''
                channel='Dev Education'
                verified={true}
                sub=''
                noOfVideos={384}
                description='You can find awsom videos and programin sklis here'
            />
            <hr />
            <VideoRow
                views={'1.4M'}
                channel={'676K'}
                description={'This tutorial based on Mearn stack development from scratch'}
                timestamp={'2 Minits ago'}
                title={'Lets Build youtub clone with react js'}
                image={image}
            />
            <VideoRow
                views={'1.4M'}
                channel={'676K'}
                description={'This tutorial based on Mearn stack development from scratch'}
                timestamp={'2 Minits ago'}
                title={'Lets Build youtub clone with react js'}
                image={image}
            />
            <VideoRow
                views={'1.4M'}
                channel={'676K'}
                description={'This tutorial based on Mearn stack development from scratch'}
                timestamp={'2 Minits ago'}
                title={'Lets Build youtub clone with react js'}
                image={image}
            />
            <VideoRow
                views={'1.4M'}
                channel={'676K'}
                description={'This tutorial based on Mearn stack development from scratch'}
                timestamp={'2 Minits ago'}
                title={'Lets Build youtub clone with react js'}
                image={image}
            />
            <VideoRow
                views={'1.4M'}
                channel={'676K'}
                description={'This tutorial based on Mearn stack development from scratch'}
                timestamp={'2 Minits ago'}
                title={'Lets Build youtub clone with react js'}
                image={image}
            />
        </div>
    )
}

export default SerchPage
