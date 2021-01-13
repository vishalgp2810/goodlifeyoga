import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { shadows } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import RegisterModal from './RegisterModal';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    boxShadow: '2px 2px 2px 2px #888888',
    margin: '20px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  registerButton: {
    width: '100%'
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [shadow, setShadow] = useState(1);
  const [open, setOpen] = useState(false);
  const [isClassesView, setIsClassesView] = useState(props.handleChangeView());

  let history = useHistory();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChangeView = () => {
    setOpen(true);
    setIsClassesView(false)
    props.handleChangeView(false)

    history.push({
      pathname: '/register',
      data: { detail: 'data' }
    })
  }


  return (
    <>
      {open ? <RegisterModal
        open={open}
      /> : null}
      {<Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={props.logo} className={classes.avatar}>

            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
            <span style={{marginLeft : '180px', color : 'red'}}>{props.amount}</span>
        </CardActions>
        <Button onClick={() => handleChangeView()} className={classes.registerButton} variant="contained" color="secondary">
          Register Now
    </Button>
      </Card>}
    </>
  );
}