var React = require('react');

var Button = React.createClass({

    propTypes: {
        initialText: React.PropTypes.string.isRequired,
        clickedText: React.PropTypes.string.isRequired,
        style: React.PropTypes.object
    },

    getDefaultProps: function() {
        return {
            initialText: 'Click Me!',
            clickedText: 'Clicked!',
            style: {
                color: '#fff',
                background: '#333'
            }
        };
    },

    getInitialState: function () {
        return {
            clicked: false
        };
    },

    handleClick: function () {
        this.setState({ clicked: true });
    },

    render: function () {
        return (
            <button onClick={this.handleClick} style={this.props.style}>
                {this.state.clicked ? this.props.clickedText : this.props.initialText}
            </button>
        );
    }

});

module.exports = Button;
