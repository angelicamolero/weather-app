import React, { Fragment } from 'react';

const Header = ({titulo}) => {
    return(
        <nav>
            <div className="nav-wrapper blue-grey darken-4">
                <a href="#!" className="brand-logo">{titulo}</a>
            </div>
        </nav>
    );
}

export default Header;