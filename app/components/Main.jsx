var React = require('react');
var TopBarLogin = require('TopBarLogin');

var Main = (props) => {

    return(
            <div className="expanded row" id="Holder">
                <TopBarLogin></TopBarLogin>
                <div className="row expanded">
                <div className="columns medium-12 large-12 small-12">
                    {props.children}
                </div>
                </div>
            </div>
         );    
};

module.exports = Main;