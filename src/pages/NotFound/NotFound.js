import React from 'react';
import styles from './NotFound.module.css';
class NotFound extends React.Component {
    render() {
        return (React.createElement("main", { className: styles['not-found'] },
            React.createElement("h1", null, "404"),
            React.createElement("h2", null, "Sorry, page not found")));
    }
}
export default NotFound;
