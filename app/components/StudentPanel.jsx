var React = require('react');
var StudentSideNav = require('StudentSideNav');

var StudentPanel = (props) => {

    return(
        <div>
            <div className="expanded row align-left" id="Holder">
                <div className="large-2 medium-3 columns align-left">
                    <StudentSideNav></StudentSideNav>
                </div>
                <div  className="large-10 medium-9 columns">
                    <div>
                        <p>StudentPanel.jsx Rendered</p>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
         );    
};

module.exports = StudentPanel;