import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    '@global': {
        a: {
            textDecoration: 'none',
            color: 'grey'
        }
    },
    root: {
        display: 'flex',
        // backgroundColor: '#f5f5f5'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,

        }),

    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),

    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',

    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: '#f5f5f5'
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
        backgroundColor: '#f5f5f5'
    },

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    logo: {
        padding: '20px 2px',
        fontSize: '9px',
        // textAlign: 'center',
        '&>div': {
            textAlign: 'center'
        }
    },
    india: {
        color: 'blue'
    },
    tab: {
        // margin: '10px 0',
        padding: '20px 5px',
        width: '100%',
        '&:hover': {
            backgroundColor: '#dbdbdb'
        }

    }
}));

function MiniDrawer() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
            </AppBar>
            <Drawer
                onMouseOver={handleDrawerOpen}
                onMouseOut={handleDrawerClose}
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >

                <Divider />

                <List>
                    <div className={classes.logo}>
                        <div>COVID19<br /><span className={classes.india}>INDIA</span></div>
                    </div>
                    <a href='/'><ListItem button>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText className={classes.tab} primary={'Home'} />
                    </ListItem></a>
                    <a href='/demographics'><ListItem button >
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText className={classes.tab} primary={'Demographics'} />
                    </ListItem></a>
                    <a href='/deepdive'><ListItem button >
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText className={classes.tab} primary='Deep Dive' />
                    </ListItem></a>
                    <a href='/essentials'><ListItem button >
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText className={classes.tab} primary='Essentials' />
                    </ListItem></a>
                    <a href='/faq'><ListItem button >
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText className={classes.tab} primary='FAQ' />
                    </ListItem></a>
                </List>


            </Drawer>
        </div>
    );
}


export default MiniDrawer;