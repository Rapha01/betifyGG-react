import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@material-ui/core';
import { Divider, Grid, Typography, useMediaQuery } from '@material-ui/core';
import AuthWrapper1 from './AuthWrapper1';
import AuthCardWrapper from './AuthCardWrapper';
import Logo from './../../../ui-component/Logo';
import JWTForgotPassword from './jwt-forms/JWTForgotPassword';
import AuthFooter from './../../../ui-component/cards/AuthFooter';
import { Helmet } from "react-helmet";

const ForgotPassword = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
        <Helmet>
            <title>Forgot Password</title>
        </Helmet>
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item sx={{ mb: 3 }}>      
                                        <Logo />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" justifyContent="center" textAlign="center" spacing={2}>
                                            <Grid item xs={12}>
                                                <Typography
                                                    color={theme.palette.secondary.main}
                                                    gutterBottom
                                                    variant={matchDownSM ? 'h3' : 'h2'}
                                                >
                                                    Forgot password?
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="caption1" fontSize="1.2em" textAlign="center">
                                                    Enter your email address below and we'll send you a password reset. 
                                                </Typography><br /><br /><Typography variant="caption2" fontSize="1.5em" textAlign="center"> This may take a few minutes!</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <JWTForgotPassword />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                            <Typography
                                                component={RouterLink}
                                                to="/login/"
                                                variant="subtitle1"
                                                sx={{ textDecoration: 'none' }}
                                            >
                                                Have an account?
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid>
            </Grid>
        </AuthWrapper1>
        </>
    );
};

export default ForgotPassword;
