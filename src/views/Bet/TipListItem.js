import React from 'react';
import GameContext from '../../contexts/GameContext';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import fct from '../../utils/fct.js';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import WatchLaterTwoToneIcon from '@material-ui/icons/WatchLaterTwoTone';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper
    },
    divider: {
        marginTop: '12px',
        marginBottom: '12px'
    },
    avatarSuccess: {
        width: '16px',
        height: '16px',
        borderRadius: '5px',
        backgroundColor: theme.palette.success.light,
        color: theme.palette.success.dark,
        marginLeft: '15px'
    },
    successDark: {
        color: theme.palette.success.dark
    },
    avatarError: {
        width: '16px',
        height: '16px',
        borderRadius: '5px',
        backgroundColor: theme.palette.orange.light,
        color: theme.palette.orange.dark,
        marginLeft: '15px'
    },
    errorDark: {
        color: theme.palette.orange.dark
    },
    textActive: {
        width: '10px',
        height: '10px',
        verticalAlign: 'center',
        color: theme.palette.success.main
    },
    timeIcon: {
        fontSize: '0.875rem',
        marginRight: '4px',
        verticalAlign: 'sub'
    },
}));

//================================|| UI LIST - CUSTOM ||================================//

export default function CustomList(props) {
    const classes = useStyles();
    const theme = useTheme();
    const { tip, bet } = props;
    const { game } = React.useContext(GameContext);
    const [currencyDiffString, setCurrencyDiffString] = React.useState('');

    React.useEffect(() => {
        if (bet.isPaid && tip.diff) {
            const str = (<Typography align="left" 
                style={{color: parseFloat(tip.diff.$numberDecimal) < 0 ? theme.palette.error.main : theme.palette.success.main, textAlign: 'center', fontSize:'0.7em'}} 
                variant="">({parseFloat(tip.diff.$numberDecimal).toFixed(2)})
            </Typography>);

            setCurrencyDiffString(str);
        }
    }, [tip,bet]);

    return (
        <>
        <Grid item xs={12}>
            <Grid container spacing={2}>
                <Grid xs={4} item style={{marginTop:'5px'}}>
                    <Typography align="left" component="div" variant="body1" style={{fontSize:'1.5em'}}>
                        {game.currencyName} 
                        {tip.currency.$numberDecimal} &nbsp;
                        {currencyDiffString}
                    </Typography>
                </Grid>
                <Grid xs={4} item>
                    <Typography align="left" component="div" variant="h5">
                        {tip.username}
                    </Typography>
                    <Typography align="left" component="div" variant="subtitle2">
                        <FiberManualRecordIcon className={classes.textActive} /> &nbsp;
                        {bet.betType === 'catalogue' ? bet.catalogue_answers[tip.answerId].title : ''}
                        {bet.betType === 'scale' ? tip.answerDecimal.$numberDecimal : ''}
                        <small>&nbsp;(x{+parseFloat(tip.odds.$numberDecimal).toFixed(2)})</small>
                    </Typography> 
                </Grid>
            
                <Grid xs={4} item>
                    <Typography align="center" component="div" variant="caption">
                        <WatchLaterTwoToneIcon className={classes.timeIcon} />{fct.timeAgoString(tip._createdAt)}      
                    </Typography>
                    <Typography align="center" component="div" variant="caption">
                        {fct.formatDateTime(tip._updatedAt)}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        </>
    );
}
