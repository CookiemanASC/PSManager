var React = require('react');

var Login = React.createClass({

    render: function() {
      
        return(
            <div className="row expanded">
                <p>Login Page</p>
                <form action="">
                    <div className="row">
                        <div className="columns small-12 medium-6" >
                        <label>Email
                            <input type="email" name="logEmail" id="Email" placeholder="enter a valid email" />
                        </label>
                        <label>Password
                            <input type="password" name="logPwd" id="Password" placeholder="password" />
                        </label>                        
                        </div>
                    </div>
                    <div className="row" >
                        <div className="columns small-12 medium-12" >
                            <button>Log In</button>
                        </div>
                    </div>
                </form>
            </div>
        );
        
    },

});

module.exports = Login;