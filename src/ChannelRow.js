import React from 'react';
import './ChannelRow.css';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleOutlineOutlined from '@material-ui/icons/CheckCircleOutlineOutlined';

function ChannelRow({ image, channel, verified, subs, noOfVideos, description }) {
    return (
        <div className='ChannelRow'>
            <Avatar className='ChannelRow_logo' alt={channel} src={image} />
            <div className='ChannelRow_text'>
                <h4>{channel} {verified && <CheckCircleOutlineOutlined />}</h4>
                <p>{subs} subscribers . {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
