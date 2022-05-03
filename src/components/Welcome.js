import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>This is Class Component</h1>
                <h2>Properties as Follows</h2>
                <h3>{this.props.name} {this.props.lastName}</h3>
                {this.props.children[0]}
                {this.props.children[1]}
            </div>
        )
    }
}

export default Welcome