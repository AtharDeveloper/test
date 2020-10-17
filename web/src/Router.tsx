import * as React from 'react';
import CONSTANT from './constant';
import { Route, Switch } from 'react-router-dom';

import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Sidebar from './components/common/Sidebar'

// Auth 
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Register from './components/auth/Register';

// Profile 
import ProfileAddress from './components/dashboard/Dashboard'



const PrivateRoute = (props: any) => { 
    return (
        <React.Fragment>
            <div className="kt-grid kt-grid--hor kt-grid--root">
                <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
                    <Sidebar />
                    <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
                        <Header />
                        <Route exact={true} path={props.path} component={props.component} />
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

const Router = (props: any) => {
    return (
        <Switch>
            {/* Auth  */}
            <Route exact={true} path={CONSTANT.url.login} component={Login} />
            <Route exact={true} path={CONSTANT.url.logout} component={Logout} />
            <Route exact={true} path={CONSTANT.url.register} component={Register} />   
            
            {/* profile */}
            <PrivateRoute path={CONSTANT.url.ProfileAddress} component={ProfileAddress} />          
        </Switch>
    );
}

export default Router;
