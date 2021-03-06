import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { render } from 'react-dom';
import {getLatestNotification} from '../utils/utils';

const year = getFullYear();
const getFooter = getFooterCopy(false);

const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 1, name: 'React', credit: 40}
];

const listNotifications = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume availalbe'},
    {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}
];

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleclick = this.handleClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleClick)
    }

    handleClick(e) {
        if(e.keyCode === 72 && e.ctrlkey) {
            alert('Logging you out');
            this.props.logOut();
        }
    }

    render() {
        return (
            <React.Fragment>
                <Notifications listNotifications={listNotifications}/>
                <Header/>
                <div>
                    {!this.props.isLoggedIn ? <Login /> : <CourseList listCourses={listCourses}/>}
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

App.PropTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
}

App.defaultProps = {
    isLoggedIn: false,
    logOut: () => void(0),
}
