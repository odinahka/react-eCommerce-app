import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';

import styles from './Header.module.css'
import gadgetsImage from '../../assets/gadgets.jpg'

const Header = props => {

    return <Fragment>
        <header className = {styles.header}>
            <h1>Tech Mart</h1>
            <HeaderCartButton showCartHandler = {props.showCartHandler}/>
            </header>
            <div className = {styles["main-image"]}>
                <img src = {gadgetsImage} alt="We can make your table this GADGETIC!"/>
            </div>
    </Fragment>
};

export default Header;