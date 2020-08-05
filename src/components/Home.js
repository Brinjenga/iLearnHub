import React,{ useContext,useState} from 'react'
import app from '../base'
import { AuthContext} from '../Auth'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import { AccountCircle, Menu} from '@material-ui/icons'
const useStyles =  makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title:{
    flexGrow:1
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
})); 

const Home = ()=> {
  const classes = useStyles();
  const { currentUser}  = useContext(AuthContext)
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton  onClick={handleDrawerOpen} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <Menu />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
            <div  className={classes.profile}>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <AccountCircle />
              </IconButton>
              <Button color="inherit"  onClick={() => app.auth().signOut()}>Sign Out</Button> 
            </div>
          </Toolbar> 
        </AppBar>
      </div>
    );
};

export default Home;

