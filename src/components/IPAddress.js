var React = require('react');

var IPAddress = React.createClass({

    getInitialState: function () {
        return {
            ip: null
        };
    },

    componentDidMount: function () {
        var headers = new Headers();
        headers.append('Accept', 'application/json');

        fetch('http://ipinfo.io', {headers: headers})
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            this.setState({ip: json.ip});
        }.bind(this));
    },

    render: function () {
        if (this.state.ip === null) {
          return (
            <div>Fetching IP address...</div>
          );
        }

        return (
          <div>Your IP Address is {this.state.ip}.</div>
        );
    }

});

module.exports = IPAddress;
