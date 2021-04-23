import React, { Component, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { Profile } from 'components';
import { AuthRoute, signIn } from 'lib';

function Login() {
    const [user, setUser] = useState(null);
    const authenticated = user != null;

    const loginDone = ({email, password}) => setUser(signIn({ email, password }));
    const logout = () => setUser(null);

    return (
        <AuthRoute
            authenticated={authenticated}
            path="/profile"
            render={props => <Profile user={user} {...props} />}/>
    );
}

export default Login;
