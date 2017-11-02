var React = require('react');
var {IndexLink,Link} = require('react-router');

var SideNav = () => {

    return (
        <div className="side-bar secondary align-left">
            <div className="menu-vertical-example">
                <ul className="vertical menu">
                    <li className="menu-text">
                        <Link className="button expanded" to="/ImportStudents" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Import Students</Link>
                    </li>
                    <li className="menu-text">
                        <Link className="button expanded" to="/ExportStudents" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Export Accounts</Link>
                    </li>                 
                    <li className="menu-text">
                        <Link className="button expanded" to="/ViewStudents" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>View Students</Link>
                    </li>
                    <li className="menu-text">
                        <Link className="button expanded" to="/ExportStudentProgress" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Export Progress</Link>                      
                    </li>
                    <li className="menu-text">
                        <Link className="button expanded" to="/CreateWelcome" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Add Welcome Page</Link>                      
                    </li>                                         
                </ul>
            </div>
        </div>

    );

}

module.exports = SideNav;
