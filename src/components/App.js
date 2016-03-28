var React = require('react');
var Button = require('./Button');

var App = React.createClass({

    render: function () {

        return (
            <div>
                <h1>Hello!</h1>
                <Button />
            </div>
        )

    }

});

module.exports = App;
