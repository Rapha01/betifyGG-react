// project imports
import config from './../config';

import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import MainLayout from './../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import AuthGuard from './../utils/route-guard/AuthGuard';
import GuestGuard from './../utils/route-guard/GuestGuard';
import MinimalLayout from './../layout/MinimalLayout';
import NavMotion from './../layout/NavMotion';


// sample page routing
const SamplePage = Loadable(lazy(() => import('../views/sample-page')));
const botIndexPage = Loadable(lazy(() => import('../views/botIndexPage')));
const botSinglePage = Loadable(lazy(() => import('../views/botSinglePage')));
const ErrorPage = Loadable(lazy(() => import('../views/pages/maintenance/Error.js')));
const AuthLogin = Loadable(lazy(() => import('../views/pages/authentication/login')));

//-----------------------|| ROUTING RENDER ||-----------------------//

const Routes = () => {
    const location = useLocation();
    return (
        <Switch>
            {/* MainLayout routes */}

            <Route exact path={['/'].concat(config.platforms.map(platform => {return '/' + platform + '/'}))
                                    .concat(config.platforms.map(platform => {return '/' + platform + '/:id'}))
                                    .concat(config.platforms.map(platform => {return '/' + platform + '/:id/edit'}))}>
                <MainLayout>
                    <Switch>
                        <Route exact path="/" component={SamplePage} />
                       
                        {config.platforms.map(platform => {return (<Route exact path={'/' + platform + '/'} component={SamplePage} />)})}
                        
                        {config.platforms.map(platform => {return (<Route exact path={'/' + platform + '/:id/'} component={SamplePage} />)})}

                        <AuthGuard>
                            {config.platforms.map(platform => {return (<Route exact path={'/' + platform + '/:id/edit/'} component={SamplePage} />)})}
                        </AuthGuard>
                    </Switch>
                </MainLayout>
            </Route>

            {/* MinimalLayout routes */}

            <Route exact path={['/login']}>
                <MinimalLayout>
                    <Switch>
                        <GuestGuard>
                            <Route path="/login" component={AuthLogin} />
                        </GuestGuard>
                    </Switch>
                </MinimalLayout>
            </Route>
        
            {/* 404 route */}

            <Route>
                <MinimalLayout>
                    <Route component={ErrorPage} />  
                </MinimalLayout>
            </Route>


        </Switch>
    );
};

export default Routes;
