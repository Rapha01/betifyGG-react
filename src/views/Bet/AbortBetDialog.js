
// material-ui
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slider, TextField, Typography, Grid, List, ListItem, ListItemIcon, ListItemText, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import React, {useState, useEffect, useRef, useContext} from 'react';
import GameContext from '../../contexts/GameContext';
import fct from '../../utils/fct.js';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { useDispatch, useSelector } from 'react-redux';
// project imports
import { useTheme } from '@material-ui/core/styles';

import { gridSpacing } from '../../store/constant';
import { SNACKBAR_OPEN } from '../../store/actions';
import useAuth from '../../hooks/useAuth';
import axios from '../../utils/axios';
import config from '../../config';
import SubCard from '../../ui-component/cards/SubCard';
import { IconCirclePlus } from '@tabler/icons';

import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone';


const useStyles = makeStyles((theme) => ({
    toggleButton: {
        backgroundColor: theme.palette.error.main
    }
}));

const valueText = (value) => {
    return `${value}°C`;
}

//===============================|| UI DIALOG - FORMS ||===============================//

export default function AddTipDialog(props) {
    const theme = useTheme();
    const classes = useStyles(theme);
    const { game, refreshMember } = useContext(GameContext);
    const [open, setOpen] = React.useState(false);
    const [isLoadingAddTip, setIsLoadingAddTip] = useState(false);
    const dispatch = useDispatch();
    const { getBet, bet } = props;
    const [amount, setAmount] = React.useState(0);
    const [answerId, setAnswerId] = React.useState(-1);
    const customization = useSelector((state) => state.customization);
    const { user } = useAuth();
    const [ answerDecimal, setAnswerDecimal ] = useState(bet.betType == 'scale' ? bet.scale_options.min : 0);
   

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAmountChange = (event,) => {
        setAmount(event.target.value);
    };

    const createTip = async () => {  
        setIsLoadingAddTip(true);
        let err = null;

        await fct.sleep(1000);

        if (!user) {
            setIsLoadingAddTip(false);
            return dispatch({ type: SNACKBAR_OPEN, open: true, message: 'Please log in to send a tip!',
                variant: 'alert', alertSeverity: 'error', close: true });
        }
        
        try {
            const req = { betId: bet.id, userId: user.id, gameId: bet.gameId, currency: amount};
            if (bet.betType == 'catalogue') req.answerId = answerId;
            if (bet.betType == 'scale') req.answerDecimal = answerDecimal;

            const response = await axios.post(config.apiHost + '/v1/tips/', req);
            
        } catch (e) {
            setIsLoadingAddTip(false);

            return dispatch({ type: SNACKBAR_OPEN, open: true, message:  e.response ? e.response.data.message : e.toString(),
                variant: 'alert', alertSeverity: 'error', close: true });
         }

        setIsLoadingAddTip(false);
        refreshMember();
        getBet();
        dispatch({ type: SNACKBAR_OPEN, open: true, message: 'Successfully added Tip', 
                variant: 'alert', alertSeverity: 'success', close: true });
    };

    return (
        <Grid container justifyContent="center">
            <Button style={{width:'100%'}} variant="outlined" color="error" onClick={handleClickOpen}>
                Abort bet
            </Button>

            <Dialog fullWidth={true} open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
                <DialogTitle id="form-dialog-title">
                    <Typography variant="h3">Abort bet</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography variant="body2">
                            Are you sure you want to abort the bet? This will <br />
                            - Pay all tips back.

                        </Typography>
                    </DialogContentText>
                
      
                </DialogContent>
                <DialogActions sx={{ pr: 2.5 }}>
                    <Button onClick={handleClose} color="error">
                        Cancel
                    </Button>
                    <Button variant="contained" size="small" onClick={createTip} color="primary">
                        {isLoadingAddTip ? (<> <CircularProgress color="secondary"  size="1.7em" /></>) : ('Abort') }  
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}
