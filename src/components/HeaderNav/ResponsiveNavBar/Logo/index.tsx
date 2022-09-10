import { Fragment } from 'react';
import logo from '../../../../assets/logo.svg';
import { ImageWrapper } from './styled.components';
import "./style.css"

const Logo = (): JSX.Element => {

    return (
        <Fragment>
            <ImageWrapper data-testId="microcap_logo_wrapper">
                <img className="image" src={logo}></img>
            </ImageWrapper>
        </Fragment>
    )
}

export default Logo;
