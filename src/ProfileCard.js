import React from 'react';
import {
    Grid,
    Typography,
    Container,
    Box,
    Paper,
    Card,
    CardContent,
    CardHeader,
    CardActions,
    Button,
    IconButton,
    Avatar
  } from "@material-ui/core";
  import FavoriteIcon from "@material-ui/icons/Favorite";
  import Profile from './avatar-3637425_960_720.webp';
  import Calender from './CalendarBlank.png';
  import GreenAvatar from './GreenAvatar'

const ProfileCard = () => {
    const classes = {};
    return (
            <Grid item xs={12} >
              <Card className={classes.root}  style={{display: 'flex', justifyContent:'space-around', boxShadow: 'none'}} >
                {/* <CardHeader
                  avatar={
                    // <Avatar aria-label="recipe" className={classes.avatar}>
                    //   :)
                    // </Avatar>
                    <Avatar alt="Remy Sharp" src={Profile} className={classes.small} />
                  }
                  action={
                    <IconButton aria-label="settings">
                      <FavoriteIcon />
                    </IconButton>
                  }
                  title="CardHeader Example"
                  subheader="A flexbox with avatar, title, subtitle and action"
                  subheader="A flexbox with avatar, title, subtitle and action"
                /> */}
                <CardContent style={{display: 'flex', alignItems: 'center'}}>
                  {/* <Avatar alt="Remy Sharp" src={Profile} /> */}
                  <GreenAvatar />
                </CardContent>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Jane Cooper
                  </Typography>
                  <CardContent style={{display: 'flex', alignItems:'center', padding: '0'}}>
                    <Avatar alt="Remy Sharp" src={Calender} className={classes.small} />
                    <Typography variant="body2" color="textSecondary" component="p">
                      07/09/1970
                    </Typography>
                  </CardContent>
                  <CardContent style={{display: 'flex', alignItems:'center', padding: '0'}}>
                    <Avatar alt="Remy Sharp" src={Calender} className={classes.small} />
                    <Typography variant="body2" color="textSecondary" component="p">
                      Female
                    </Typography>
                  </CardContent>
                </CardContent>
                <CardActions disableSpacing style={{display: 'flex', alignItems: 'flex-end'}}>
                  {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton> */}
                  {/* <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton> */}
                  {/* <Button size="small" color="primary">
                    Primary
                  </Button> */}
                  <Button size="small" style={{background: 'linear-gradient(102.53deg, #9076F4 2.33%, #B19FF7 107.85%)',borderRadius: '10px', width: '129px', height: '38px', padding: '9px 20px', color: 'white'}}>
                    Secondary
                  </Button>
                </CardActions>
              </Card>
            </Grid>
    )
}

export default ProfileCard
