import React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { CardContent, Chip, ClickAwayListener, Divider, Grid,
    List, ListItem, ListItemIcon, ListItemText,Paper, Popper,
    Typography } from '@material-ui/core';
import MainCard from '../../../../ui-component/cards/MainCard';
import Transitions from '../../../../ui-component/extended/Transitions';
import useAuth from '../../../../hooks/useAuth';
import { IconLogout, IconSettings } from '@tabler/icons';

const useStyles = makeStyles((theme) => ({
    navContainer: {
        width: '100%',
        maxWidth: '350px',
        minWidth: '300px',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '10px',
        [theme.breakpoints.down('sm')]: {
            minWidth: '100%'
        }
    },
    headerAvatar: {
        cursor: 'pointer',
        ...theme.typography.mediumAvatar,
        margin: '8px 0 8px 8px !important'
    },
    profileChip: {
        marginLeft: '1em',
        height: '48px',
        alignItems: 'center',
        borderRadius: '27px',
        transition: 'all .2s ease-in-out',
        '& svg': {
            stroke: theme.palette.secondary.dark
        },
        borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.secondary.light,
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.secondary.light,
        '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: theme.palette.secondary.main,
            background: theme.palette.secondary.main + '!important',
            color: theme.palette.primary.light,
            '& svg': {
                stroke: theme.palette.primary.light
            }
        }
    },
    profileLabel: {
        lineHeight: 0,
        padding: '12px'
    },
    listItem: {
        marginTop: '5px'
    },
    cardContent: {
        padding: '16px !important'
    },
    card: {
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark[800] : theme.palette.primary.light,
        marginBottom: '16px',
        marginTop: '16px'
    },
    searchControl: {
        width: '100%',
        paddingRight: '8px',
        paddingLeft: '16px',
        marginBottom: '16px',
        marginTop: '16px'
    },
    startAdornment: {
        fontSize: '1rem',
        color: theme.palette.grey[500]
    },
    flex: {
        display: 'flex'
    },
    name: {
        marginLeft: '2px',
        fontWeight: 400
    },
    ScrollHeight: {
        height: '100%',
        maxHeight: 'calc(100vh - 250px)',
        overflowX: 'hidden'
    },
    badgeWarning: {
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.warning.dark,
        color: '#fff'
    }
}));

//-----------------------|| PROFILE MENU ||-----------------------//

const ProfileSection = () => {
    const history = useHistory();
    const classes = useStyles();
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);

    //const [notification, setNotification] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const { logout, user } = useAuth();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const handleLogout = async () => {
        try {
            await logout();
            history.push('/');
        } catch (err) {
            console.error(err);
        }
    };
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        handleClose(event);
    };
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);
    return (
        <React.Fragment>
           
            <Chip
                classes={{ label: classes.profileLabel }}
                className={classes.profileChip}
                icon={ <></> /*
                     <Avatar
                        src={User1}
                        className={classes.headerAvatar}
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        color="inherit"
                    */
                }
                label={<IconSettings stroke={1.5} size="1.5rem" color={theme.palette.secondary.main} />}
                variant="outlined"
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                color="primary"
            />
           
            <Popper
                placement="bottom-end"
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 14]
                            }
                        }
                    ]
                }}
            >
                {({ TransitionProps }) => (
                    <Transitions in={open} {...TransitionProps}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                                    <CardContent className={classes.cardContent}>
                                        <Grid container direction="column" spacing={1}>
                                            <Grid item className={classes.flex}>
                                                <Typography variant="h4">Logged in as: </Typography>
                                                <Typography component="span" variant="h4" className={classes.name}>
                                                    {user ? user.username : ''}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                {/*}<Typography variant="subtitle2">Logged in as: {user ? user.username : ''}</Typography>{*/}
                                            </Grid>
                                        </Grid>
                                        { /* }
                                        <OutlinedInput
                                            className={classes.searchControl}
                                            id="input-search-profile"
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                            placeholder="Search profile options"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <IconSearch stroke={1.5} size="1.3rem" className={classes.startAdornment} />
                                                </InputAdornment>
                                            }
                                            aria-describedby="search-helper-text"
                                            inputProps={{
                                                'aria-label': 'weight'
                                            }}
                                        />
                                        { */ } 
                                        <Divider />
                                        { /* }<PerfectScrollbar className={classes.ScrollHeight}>{ */ } 
                                            { /* }
                                            <UpgradePlanCard />
                                            <Divider />
                                            <Card className={classes.card}>
                                                <CardContent>
                                                    <Grid container spacing={3} direction="column">
                                                        <Grid item>
                                                            <Grid item container alignItems="center" justifyContent="space-between">
                                                                <Grid item>
                                                                    <Typography variant="subtitle1">Start DND Mode</Typography>
                                                                </Grid>
                                                                <Grid item>
                                                                    <Switch
                                                                        color="primary"
                                                                        checked={sdm}
                                                                        onChange={(e) => setSdm(e.target.checked)}
                                                                        name="sdm"
                                                                        size="small"
                                                                    />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item>
                                                            <Grid item container alignItems="center" justifyContent="space-between">
                                                                <Grid item>
                                                                    <Typography variant="subtitle1">Allow Notifications</Typography>
                                                                </Grid>
                                                                <Grid item>
                                                                    <Switch
                                                                        checked={notification}
                                                                        onChange={(e) => setNotification(e.target.checked)}
                                                                        name="sdm"
                                                                        size="small"
                                                                    />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                            { */ }
                                            <Divider />
                                            <List component="nav" className={classes.navContainer}>
                                                <ListItem
                                                    className={classes.listItem}
                                                    sx={{ borderRadius: customization.borderRadius + 'px' }}
                                                    button
                                                    selected={selectedIndex === 0}
                                                    onClick={(event) => handleListItemClick(event, 0)}
                                                    component={React.forwardRef((props, ref) => (
                                                        <RouterLink {...props} to="/user/settings" />
                                                    ))}
                                                >
                                                    <ListItemIcon>
                                                        <IconSettings stroke={1.5} size="1.3rem" />
                                                    </ListItemIcon>
                                                    <ListItemText primary={<Typography variant="body2">Account Settings</Typography>} />
                                                </ListItem>
                                                <ListItem
                                                    className={classes.listItem}
                                                    sx={{ borderRadius: customization.borderRadius + 'px' }}
                                                    button
                                                    selected={selectedIndex === 4}
                                                    onClick={handleLogout}
                                                >
                                                    <ListItemIcon>
                                                        <IconLogout stroke={1.5} size="1.3rem" />
                                                    </ListItemIcon>
                                                    <ListItemText primary={<Typography variant="body2">Logout</Typography>} />
                                                </ListItem>
                                            </List>
                                        { /* }</PerfectScrollbar>{ */ }
                                    </CardContent>
                                </MainCard>
                            </ClickAwayListener>
                        </Paper>
                    </Transitions>
                )}
            </Popper>
        </React.Fragment>
    );
};

export default ProfileSection;
