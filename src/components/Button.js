var React = require('react');

var Button = React.createClass({

    getInitialState: function () {
        return {
            text: 'Click Me!'
        };
    },

    handleClick: function () {
        this.setState({ text: 'Clicked!' });
    },

    render: function () {
        return (
            <button onClick={this.handleClick}>{this.state.text}</button>
        );
    }

});

module.exports = Button;
