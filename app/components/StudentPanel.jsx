var React = require('react');
var SideNav = require('SideNav');

var StudentPanel = (props) => {

    return(
        <div>
            <div className="expanded row" id="Holder">
                <div className="large-3 medium-3 columns">
                    <SideNav></SideNav>
                </div>
                <div  className="large-9 medium-9 columns">
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