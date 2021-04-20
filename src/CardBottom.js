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
            <Grid item xs={12} style={{background: 'linear-gradient(104.66deg, #58FFEF -67.5%, #8B6CFF 103.46%)', borderRadius: '15px'}}>
              <div className='wrapper' >
                <div>
                  <h3 style={{margin: '0'}}>Wellness score</h3>
                  <h1  style={{margin: '0'}}>81%</h1>
                  <CardBottomG  />
                </div>
                <Button style={{background: 'linear-gradient(102.53deg, #9076F4 2.33%, #B19FF7 107.85%)',borderRadius: '10px', width: '129px', height: '38px', padding: '9px 20px', color: 'white'}}>button</Button>
              </div>
            </Grid>
    )
}

export default CardBottom
