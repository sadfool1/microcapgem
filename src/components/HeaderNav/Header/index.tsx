import React, { Fragment } from 'react';
import { HeaderContainer } from './styled.component';

const Header = () => {

    return (
        <Fragment>
            <HeaderContainer data-testId="microcap_header_container">
                Hello from container
            </HeaderContainer>
        </Fragment>
    );
}

export default Header;