import React, { Component } from 'react';
import '../css/404Page.css';
import Page404 from './404Page/Page404';

class PageNotFound extends Component {
    render() {
        return (
            <div className="main">
                <Page404></Page404>
            </div>
        );
    }
}

export default PageNotFound;