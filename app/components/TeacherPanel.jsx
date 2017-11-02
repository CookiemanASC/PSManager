var React = require('react');
var SideNav = require('SideNav');
var ImportStudents = require('ImportStudents');
var ExportStudents = require('ExportStudents');


var TeacherPanel = (props) => {

    return(
            <div className="expanded row align-left" id="Holder">
                <div className="large-2 medium-3 columns align-left">
                    <SideNav></SideNav>
                </div>
                <div  className="large-10 medium-9 columns">
                    <div>
                        <h2>TeacherPanel.jsx Rendered</h2>
                        {props.children}
                    </div>
                </div>
            </div>
         );    
};

module.exports = TeacherPanel;