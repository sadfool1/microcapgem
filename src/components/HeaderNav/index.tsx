import React, { Fragment } from 'react';
import Header from './Header';
import ResponsiveAppBar from './ResponsiveNavBar';

const HeaderNav = () => {
    const onClickNavBarHandler = () => {
        console.log("I have been clicked");
    }
    return (
        <Fragment>
            <div className=''>
                <ResponsiveAppBar />
                <Header />
            </div>
        </Fragment>
    );
}

export default HeaderNav;