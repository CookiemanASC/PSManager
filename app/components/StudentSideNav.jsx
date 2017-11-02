var React = require('react');
var {IndexLink,Link} = require('react-router');

var StudentSideNav = () => {

    return (
        <div className="side-bar secondary align-left">
            <div className="menu-vertical-example">
                <ul className="vertical menu">
                    <li className="menu-text">
                        <Link className="button expanded" to="/PSPreviousVersions" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>View Previous Versions</Link>
                    </li>                                        
                </ul>
            </div>
        </div>

    );

}

module.exports = StudentSideNav;
