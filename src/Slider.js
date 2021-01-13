import React from 'react';
import './Sidebar.css';
import SideBarRow from './SideBarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import VideoLibrayIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';

function Slider() {
    return (
        <div className='sidebar'>
            <SideBarRow selected Icon={HomeIcon} title='Home' />
            <SideBarRow Icon={WhatshotIcon} title='Trending' />
            <SideBarRow Icon={SubscriptionIcon} title='Subscription' />
            <hr />
            <SideBarRow Icon={VideoLibrayIcon} title='Library' />
            <SideBarRow Icon={HistoryIcon} title='History' />
            <SideBarRow Icon={OndemandVideoIcon} title='Your Videos' />
            <SideBarRow Icon={WatchLaterIcon} title='Watch Later' />
            <SideBarRow Icon={ThumbUpAltOutlined} title='Liked Videos' />
            <SideBarRow Icon={ExpandMoreOutlined} title='Show more' />
            <hr />
        </div>
    )
}

export default Slider
