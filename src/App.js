import React from "react";
import ProfileCard from './ProfileCard'
import FusionChart from './FusionChart'
import BottomChart from './BottomChart'
import CardBottom from './CardBottom'
// import "./styles.css";
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
import GreenAvatar from './GreenAvatar';

// const YourCard = () => {
//   const classes = {};
//   return (
//     <Card
//       className={classes.root}
//       variant="outlined"
//       style={{ height: "100%" }}
//     >
//       <CardContent>
//         <Typography
//           className={classes.title}
//           color="textSecondary"
//           gutterBottom
//         >
//           Customer Profile
//         </Typography>
//         <Typography variant="h5" component="h2">
//           Sarah Doria
//         </Typography>
//         <Typography className={classes.pos} color="textSecondary">
//           Position
//         </Typography>
//         <Typography variant="body2" component="p">
//           Company
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// };

function App() {
  const classes = {};
  return (
    <Container>
      <Box>
        <GreenAvatar />
        <Typography>Test</Typography>
      </Box>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid> */}
        <Grid item xs={6}>
          <Grid container spacing={3}>
            <ProfileCard  />
            <CardBottom />
            {/* <Grid item xs={12}>
              <Grid container spacing={3} style={{ background: 'linear-gradient(104.66deg, #58FFEF -67.5%, #8B6CFF 103.46%)' }}>
                <Grid item xs={12}>
                  <Paper>2</Paper>
                  <Paper>2</Paper>
                  <Paper>2</Paper>
                </Grid>
                <Grid item xs={12}>
                </Grid>
              </Grid>
            </Grid> */}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid style={{ height: "100%" }}>
            <FusionChart  style={{ height: "100%" }}/>
          </Grid>
        </Grid>
        <Grid item xs={12} >
          <Paper className={classes.paper} >xs=12</Paper>
          <BottomChart />
        </Grid>
      </Grid>
    </Container>
  );
}


export default App;
