import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList'

const year = getFullYear();
const getFooter = getFooterCopy(false);

export default function App({isLoggedIn}) {
    const loggedIn = (!isLoggedIn) ? <Login /> : <CourseList />;
    return (
        <React.Fragment>
            <Notifications />
            <Header />
            <div>
                {loggedIn}
            </div>
            <Footer />
        </React.Fragment>
    );
}

App.PropTypes = {
    isLoggedIn: PropTypes.bool,
}

App.defaultProps = {
    isLoggedIn: false
}
