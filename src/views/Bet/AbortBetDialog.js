
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, Grid, CircularProgress } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SNACKBAR_OPEN } from '../../store/actions';
import useAuth from '../../hooks/useAuth';
import axios from '../../utils/axios';
import config from '../../config';

export default function AbortBetDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [isLoadingAddTip, setIsLoadingAddTip] = useState(false);
    const dispatch = useDispatch();
    const { bet } = props;
    const { user } = useAuth();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const abortBet = async () => {  
        setIsLoadingAddTip(true);

        if (!user) {
            setIsLoadingAddTip(false);
            return dispatch({ type: SNACKBAR_OPEN, open: true, message: 'Please log in to abort the bet!',
                variant: 'alert', alertSeverity: 'error', close: true });
        }
        
        try {
            await axios.patch(config.apiHost + '/v1/bets/' + bet.id + '/abort', {});
            
        } catch (e) {
            setIsLoadingAddTip(false);

            return dispatch({ type: SNACKBAR_OPEN, open: true, message:  e.response ? e.response.data.message : e.toString(),
                variant: 'alert', alertSeverity: 'error', close: true });
         }

        setIsLoadingAddTip(false);
        dispatch({ type: SNACKBAR_OPEN, open: true, message: 'Successfully aborted bet.', 
                variant: 'alert', alertSeverity: 'success', close: true });
    };

    return (
        <Grid container justifyContent="center">
            <Button style={{width:'100%'}} sx={{ boxShadow: 4 }} variant="contained" color="secondary" onClick={handleClickOpen}>
                Abort bet
            </Button>

            <Dialog fullWidth={true} open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
                <DialogTitle id="form-dialog-title">
                    <Typography style={{fontSize:'1.7em',fontWeight: 'bold'}}>Abort bet</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to abort the bet? This will <br />
                        - Pay all tips back.
                    </DialogContentText>
                
      
                </DialogContent>
                <DialogActions sx={{ pr: 2.5 }}>
                    <Button onClick={handleClose} color="error">
                        Cancel
                    </Button>
                    <Button variant="contained" size="small" onClick={abortBet} color="primary">
                        {isLoadingAddTip ? (<> <CircularProgress color="secondary"  size="1.7em" /></>) : ('Accept') }  
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}
