import React from 'react';
import User from '../../components/User';

const auth = (props) => (
    <div>
        <h1>The Auth page - {props.appName}</h1>
        <User name="Emir" />
    </div>

);

auth.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appName: 'Super App (Auth)' });
        }, 1000);
    });
    promise.then(result => {
        console.log('Super: ', result);
    });
    return promise;
}

export default auth;

