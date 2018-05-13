import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class App extends Component {
    /** can add async and use axios or belowe look 
     * this function repopulate props
     */
    //static async getInitialProps(context) {
        /** Render page on server: use for fetch data from DB  */
    //    console.log(context);
    //    return {appName: 'Super App'};
    // }

    /** Here we create Promise manualy 
     * console.log() is only execut if you go to auth page and link back 
    */
    static getInitialProps(context) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({appName: 'Super App'});
            } , 1000);
        });
        promise.then( result => {
            console.log('Super: ', result );
        });
        return promise;
    }
    render() {
        return (
            <div>
                <h1>The main App page {this.props.appName}</h1>
                <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
                <button onClick={() => Router.push('/auth')} > Go to Auth </button>
            </div>
        );
    }
};

export default App;

