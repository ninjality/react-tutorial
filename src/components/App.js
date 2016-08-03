var React = require('react');
var Button = require('./Button');
var IPAddress = require('./IPAddress');

var App = React.createClass({

    render: function () {

        return (
            <div>
                <h1>Hello!</h1>
                {/* Let's add some props to Button: */}
                <Button
                    initialText="Tap Here"
                    clickedText="Tapped!"
                    style={{
                        color: 'blue',
                    }}
                />

                {/* This is a default Button: */}
                <Button />

                <br /><br />

                {/* This fetches user's IP and displays it: */}
                <IPAddress />
            </div>
        )

    }

});

module.exports = App;
