import React from 'react';
import './css/App.css';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './components/ListItems';
import useStyles from './css/styles';
import user from './assets/user.svg'
import logo from './assets/logo.svg';
import PayoutTable from './components/PayoutTable';
import TotalBalance from './components/TotalBalance';

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const drawerWidth = 240;

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="#000" noWrap className={classes.title}>
            Balances
            <Typography variant='body2' className={classes.appBarSmall}>Today, 29th June 2021</Typography>
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar alt="Remy Sharp" id="user_img" src={user} />
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
        id="mainDrawer"
      >
        <div className="draw_bar">
          <img src={logo} alt="logo" />

          <div className={classes.toolbarIcon}>
            <IconButton  onClick={handleDrawerClose}>
              <ChevronLeftIcon  />
            </IconButton>
          </div>
        </div>    
        <List id="mainDrawer">{mainListItems}</List>
        <List id="mainDrawer" >{secondaryListItems}</List>
      </Drawer>

      <main className={classes.content} id="mainContainer">
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={12}>
              <TotalBalance/>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <PayoutTable />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            {/* <Copyright /> */}
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default App;
