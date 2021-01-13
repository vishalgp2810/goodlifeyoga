import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LanguageIcon from '@material-ui/icons/Language';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import liveClassIntroDefaultData from './liveclassData';
import LiveClassCard from './liveCard';
import Logo from './images/images.png';
import './liveclass.css';
// import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: '20px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 60,
        textAlign: 'center',
        borderBottom: '3px solid red',
        padding: '30px'
    },
    pos: {
        marginBottom: 12,
    },
    leftimage: {
        float: 'left',
        width: '50%'
    },
    rightcontent: {
        float: 'right',
        textAlign: 'center'
    },
    content: {
        fontSize: 40,
        fontStyle: 'oblique'

    },
    icons: {
        size: 60,
        textAlign: 'right',
        bottom: '0px',
        cursor: 'pointer',
        marginTop: '220px',
        padding: '10px'
    },
    media_icons: {
        padding: '5px',
        margin: '3px',
        fontSize: '50px'
    },
    footer_icons: {
        padding: '5px',
        margin: '3px',
        fontSize: '50px',
    },
    footer_icon: {
        textAlign: 'right'
    },
    about_header: {
        fontSize: 30,
        fontWeight: '700',
        fontStyle: 'oblique',

    },
    fotter: {
        backgroundColor: 'black',
        color: 'white'
    },
    registerButton: {
        width: '200px',
        float: 'right',
        padding: '20px',
        margin: '20px'
    },
    liveclasscard: {
        marginLeft: '60px'
    }
});


const Homepage = (props) => {
    const classes = useStyles();
    const history = useHistory()

    const Copyright = () => {
        return (
            <Typography variant="body2" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    GoodLife Yoga
          </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    const handleOpenRegister = () => {
        history.push("/about");
    }


    return (
        <div>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <div className={classes.leftimage}>
                        <img
                            width='950px'
                            height='100%'
                            src={'https://images.pexels.com/photos/3049225/pexels-photo-3049225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
                        />
                    </div>
                    <div className={classes.rightcontent}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            <div>Welcome to
                            Goodlife Yoga
                        <div>with Puja Shah</div></div>
                        </Typography>
                        <Typography>
                            <div className={classes.content}>
                                Letting go is the hardest asana.
                        </div>
                        </Typography>
                        <div className={classes.icons}>
                            <FacebookIcon className={classes.media_icons} />
                            <InstagramIcon className={classes.media_icons} />
                            <YouTubeIcon className={classes.media_icons} />
                            <LanguageIcon className={classes.media_icons} />
                        </div>
                    </div>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <div className={classes.about_header}>
                        <Typography className={classes.about_header} gutterBottom>ABOUT</Typography>
                    </div>
                    <div>
                        <Typography gutterBottom>
                            From a personal inward yoga journey to our group yoga classes for fitness enthusiasts, the goal of every GoodLife Yoga instructor is to help all netizens live a fit and healthy good life. We are based out of Pune, MH in India. Please book our live classes from the schedule provided below.
                        </Typography>
                    </div>
                </CardContent>
            </Card>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <div className={classes.about_header}>
                        <Typography className={classes.about_header} gutterBottom>Live Classes</Typography>
                    </div>
                    <div className={classes.liveclasscard}>
                        <div className='recomendedVideo_video'>
                            {liveClassIntroDefaultData && liveClassIntroDefaultData.liveClassIntroDefaultData.map((record, index) => {
                                return <LiveClassCard
                                    handleChangeView={(data) => Copyright()}
                                    image={record.image_link}
                                    logo={Logo}
                                    amount={record.Amount}
                                />
                            })}
                        </div>
                    </div>
                    <div className={classes.registerButton}>
                        <Button onClick={() => handleOpenRegister()} variant="contained" color="secondary">
                            Show All
                        <Link to='/about'></Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
            <Card className={classes.fotter} variant="outlined">
                <CardContent>
                    <div className={classes.footer_icon} >
                        <FacebookIcon className={classes.media_icons} />
                        <InstagramIcon className={classes.media_icons} />
                        <YouTubeIcon className={classes.media_icons} />
                        <LanguageIcon className={classes.media_icons} />
                    </div>
                    <Copyright />
                </CardContent>
            </Card>
        </div>
    );
}


export default Homepage;