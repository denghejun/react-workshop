import React from 'react';

export default class Welcome extends React.Component {
    render() {
        return <h3>Hello, {this.props.name}</h3>;
    }
}
