import React from 'react';
import './VideoRow.css';

function VideoRow({ views, subs, description, timestamp, channel, title, image }) {
    return (
        <div className='VideoRow'>
            <img className='img' src={image} />
            <div className='VideoRow_text'>
                <h3>{title}</h3>
                <p className='VideoRow_headline'>{channel} .
                <span className='videoRow_subs'>
                        <span className='subNum'>{subs}</span> Subsribers {views} . {timestamp}
                    </span>
                </p>
                <p className='VideoRow_description'>{description}</p>
            </div>
        </div>
    )
};

export default VideoRow
