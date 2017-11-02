var React = require('react');
var{Link,IndexLink} = require('react-router');

var TopBarLogin = React.createClass({

    onLogin: function (e){
        e.preventDefault();
        var email = this.refs.email.value;
        var password = this.refs.password.value;
        //var encodedLocation = encodeURIComponent(location);
        
       //alert('Username:'+email.length+' Password: '+email.substring(0,5));
        if((email.length>0)&&(email.substring(0,5)=='teach')){
            window.location.hash = '#Teacher';
        }
        else{
            window.location.hash = '#Student';
        }
        
    },

    render: function(){
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <h1>PS Manager</h1>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onLogin}>
                        <div className="row align-bottom">
                            <div className="columns small-12 medium-5">
                                <label>
                                    email
                                    <input type="email" placeholder="account email" ref="email"/>
                                </label>
                            </div>
                            <div className="columns small-12 medium-5">
                                <label>
                                    password
                                    <input type="password" placeholder="account password" ref="password"/>
                                </label>
                            </div>
                            <div  className="columns small-12 medium-2">
                                <label>
                                    login
                                <input type="submit" className="expanded button" value="Login"/>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>            
            </div>
        );
    }

});

module.exports = TopBarLogin;