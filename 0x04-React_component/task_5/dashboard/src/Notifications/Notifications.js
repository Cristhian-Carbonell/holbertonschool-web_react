import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const styles = { 
        position: 'relative',
        left: '1175px',
        bottom: '70px',
        border: 'none',
        background: 'transparent'
};

function printOnClick() {
    console.log('Close button has been clicked');
}

const notification = getLatestNotification();

const style = {
    position: "absolute",
    right: "1px",
    "margin-right": "20px",
}

export default class Notifications extends React.Component{

    shouldComponentUpdate(nextProps) {
        if (this.props.listNotifications.length < nextProps.listNotifications.length) return true
        return false;
    }

    render () {
        return (
            <div style={style}>
                <div className="menuItem">
                    Your notifications
                </div>
            {this.props.displayDrawer ? (
                <div className="Notifications">
                    <React.Fragment>
                        <p>Here is the list of notifications</p>
                        <button style={styles} arial-label="Close" onClick={printOnClick}>
                            <img src={close} alt="Close" width="10px"/>
                        </button>
                        <ul>
                            {this.props.listNotifications.length === 0 ? (<NotificationItem id={0} value="No new notification for now" type='no-new' markAsRead={this.markAsRead} />) : <></>}
                            {this.props.listNotifications.map((list) => (<NotificationItem id={list.id} key={list.id} type={list.type} value={list.value} html={list.html} markAsRead={this.markAsRead} />))}
                        </ul>
                    </React.Fragment>
                </div>) : <></> }
            </div>
        );
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`)
    }
}

Notifications.PropTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
    displayDrawer: true,
    listNotifications: []
}
