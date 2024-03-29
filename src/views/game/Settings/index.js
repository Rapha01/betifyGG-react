import React from 'react';
import AdvancedSettings from './AdvancedSettings';
import MainSettings from './MainSettings';
import DeleteGameDialog from './DeleteGameDialog';
import TopUpStartCurrencyDialog from './TopUpStartCurrencyDialog';
import { SNACKBAR_OPEN } from '../../../store/actions';
import { useDispatch } from 'react-redux';
import { Helmet } from "react-helmet";
import GameContext from '../../../contexts/GameContext';
import axios from '../../../utils/axios';
import config from '../../../config';
import { Button, CircularProgress } from '@material-ui/core';


//-----------------------|| PROFILE 1 - PROFILE ||-----------------------//

const GameSettings = () => {
    const { game, setGame } = React.useContext(GameContext);
    const dispatch = useDispatch();

    const [ startCurrency, setStartCurrency ] =  React.useState(game.startCurrency.$numberDecimal);
    const [ password, setPassword ] = React.useState('');
    const [ title, setTitle ] = React.useState(game.title);
    const [ currencyName, setCurrencyName ] = React.useState(game.currencyName);
    const [ desc, setDesc ] = React.useState(game.desc);
    const [ isPublic, setIsPublic ] = React.useState(game.isPublic);
    const [ isEnded, setIsEnded ] = React.useState(game.isEnded);
    const [ bannerUrl, setBannerUrl ] = React.useState(game.bannerUrl);
    const [ language, setLanguage ] = React.useState(game.language);

    const [ isLoading, setIsLoading ] = React.useState(false);

    const updateSettings = async () => {
        setIsLoading(true);

        try {
            const obj = { title, desc, isPublic, isEnded, startCurrency, currencyName, bannerUrl, language };
            const response = await axios.patch(config.gameHosts[game.serverId] + '/v1/games/' + game.id, obj);
            
            dispatch({ type: SNACKBAR_OPEN, open: true, message: 'Successfully changed settings', 
                variant: 'alert', alertSeverity: 'success', close: true });
            
            setGame(response.data);
            setIsLoading(false);
        } catch (e) { 
            setIsLoading(false);
            return dispatch({ type: SNACKBAR_OPEN, open: true, message:  e.response ? e.response.data.message : e.toString(),
                variant: 'alert', alertSeverity: 'error', close: true });
         }

    };
   
    return (
        <>
        <Helmet>
            <title>{game.title} - Settings</title>
        </Helmet>

        <MainSettings title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} bannerUrl={bannerUrl} setBannerUrl={setBannerUrl} language={language} setLanguage={setLanguage} />
        <br /><br />
        <AdvancedSettings currencyName={currencyName} setCurrencyName={setCurrencyName} startCurrency={startCurrency} setStartCurrency={setStartCurrency} password={password} setPassword={setPassword} isPublic={isPublic} setIsPublic={setIsPublic} isEnded={isEnded} setIsEnded={setIsEnded} />
        <br /><br />
        <Button style={{width:'100%'}} variant="contained" sx={{ boxShadow: 8 }} color="secondary" onClick={updateSettings}>
            { isLoading ? (<> <CircularProgress color="secondary"  size="1.7em" /></>) : ('Update') }
        </Button>
        <br /><br />
        <TopUpStartCurrencyDialog />
        <br />
        <DeleteGameDialog /> 
        </>
        
    );
};

export default GameSettings;
