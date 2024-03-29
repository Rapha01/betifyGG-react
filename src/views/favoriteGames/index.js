import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Typography, Grid, CircularProgress, Pagination } from '@material-ui/core';
import GameCard1 from '../../ui-component/cards/GameCard1';
import { gridSpacing } from '../../store/constant';
import { SNACKBAR_OPEN } from '../../store/actions';
import { useDispatch } from 'react-redux';
import useAuth from '../../hooks/useAuth';
import axios from '../../utils/axios';
import config from '../../config';

const BigGamesPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [games, setGames] = useState([]);
    const { user } = useAuth();
    const [page, setPage] = useState({index: 1, maxIndex: 1});

    const dispatch = useDispatch();

    const getGames = async () => {
        setIsLoading(true);

        try {
            const memberResponse = await axios.get(config.apiHost + '/v1/members/', {params: {userId: user.id, isFavoritedGame: true, sortBy: 'createdAt', limit: 9 , page: page.index } });
            if (memberResponse.data.results.length === 0) {
                setGames([]);
                setIsLoading(false);
                return 
            }

            const gameResponse = await axios.get(config.apiHost + '/v1/games/', {params: {ids: memberResponse.data.results.map(m => m.gameId), sortBy: '-memberCount', limit: 9 , page: page.index } });

            setGames(gameResponse.data.results);
            setPage({...page, maxIndex: gameResponse.data.totalPages});
            setIsLoading(false);
        } catch (e) {
            setIsLoading(false);
            console.log(e);
            return dispatch({ type: SNACKBAR_OPEN, open: true, message:  e.response ? e.response.data.message : e.toString(),
                variant: 'alert', alertSeverity: 'error', close: true });
        }
    }

    const handlePageChange = async (a,b,c) => {
        setPage({...page, index: b});
    }

    useEffect(() => {
        getGames();
    }, [page.index]);

    return (
        <>
        <Helmet>
            <title>Favorite Games</title>
            <meta name='description' content='Favorited Games.' />
            <meta name='keywords' content='favorite,favorite games,joined,games,joined games' />
        </Helmet>

        {isLoading ? (
            <><br /><br />
            <Grid item xs={12} lg={12} style={{ textAlign: 'center' }}>
                <CircularProgress color="secondary" size="10em"  />
            </Grid>
            </>
        ) : ''}    
        
        {!isLoading && games.length > 0 ? (
            <>
            <Grid container spacing={gridSpacing}>
                {games.map( (game) => {
                    return (
                        <Grid item xs={12} lg={4} key={game.id}>              
                            <GameCard1 game={game} />     
                        </Grid>
                    );
                })}
            </Grid>
            </>
        ) : ''}

        {!isLoading && page.maxIndex > 1 ? (
            <>
            <br />
            <Grid container direction="column" spacing={2} alignItems="center">
                <Grid item xs={12}>
                    <Pagination page={page.index} onChange={handlePageChange} count={page.maxIndex} color="primary" />
                </Grid>
            </Grid>
            </>
        ) : ''}

        {!isLoading && games.length === 0 ? (
            <><br />
            <Grid container direction="column" spacing={2} alignItems="center">
                <Grid item xs={12}>
                <Typography variant="h3">No games to show.</Typography>
                </Grid>
            </Grid>
            </>
        ) : ''}
        </>
    );
};

export default BigGamesPage;
