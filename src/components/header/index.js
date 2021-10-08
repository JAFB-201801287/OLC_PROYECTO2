import React from 'react';

import HeaderContainer from '../../container/header';
import NavBarComponent from '../navbar';

const Header = ({classes}) => {
    return (
        <HeaderContainer classes={classes ? classes : null}>
            <NavBarComponent/>
        </HeaderContainer>
    );
};

export default Header;