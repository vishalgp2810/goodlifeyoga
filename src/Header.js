import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SerchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NotificationIcon from '@material-ui/icons/NotificationImportant';
import Avatar from '@material-ui/core/Avatar'
import AppsIcon from '@material-ui/icons/Apps';
import youtubIcon from './images/youtublogo.svg.png';
import Logo from './images/images.png';
import './Heders.css';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

function Header() {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className='header'>
            <div className='header_left'>
                <MenuIcon />
                <Link to='/'>
                    <img className='header_logo' src={Logo} alt='' />
                </Link>
                <span className='site_name' >Goodlife Yoga</span>
            </div>
            {/* <div className='header_input'>
                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder='Search' type='text'></input>
                <Link to={`/search/${inputSearch}`}>
                    <SerchIcon className='header_input_button' />
                </Link>
            </div> */}
            <div className='header_icons'>
                {/* <VideoCallIcon className='header_icon' />
                <AppsIcon className='header_icon' />
                <NotificationIcon className='header_icon' />
                <Avatar /> */}
                <div className='header_link'><Link style={{ textDecoration: 'none' }} to='/'>
                    Home
                </Link>
                </div>
                <div className='header_link'>
                    <Link style={{ textDecoration: 'none' }} to='/about'>
                        Live classes
                </Link>
                </div>
                <div className='header_link'>
                    <Link style={{ textDecoration: 'none' }} to='/about'>
                        About
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
