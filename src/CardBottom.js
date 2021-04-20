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
  import './CardBottom.css'
  import CardBottomG from './CardBottomG'

  

const CardBottom = () => {
    const classes = {};
    return (
            <Grid item xs={12}>
              <div className='wrapper' style={{backgroundColor: 'pink'}}>
                <div>
                  <h3>Wellness score</h3>
                  <h1>81%</h1>
                  <CardBottomG />
                </div>
                <button>button</button>
              </div>
            </Grid>
    )
}

export default CardBottom
