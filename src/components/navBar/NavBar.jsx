import React, { useState } from 'react';
import style from './NavBar.module.scss'
import healthLogo from '../../imgs/ministry-of-health.png'
import interiorLogo from '../../imgs/ministry-of-interior.png'
import settings from '../../imgs/settings.svg'
import { Layout } from 'antd';
import SearchInput from './SearchInput';
import Hamburger from '../svgs/Hamburger';
const { Header } = Layout;

function NavBar(props) {

    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <>
            <Header className={style.navContainer}>
                <div className={style.appDetails}>
                    <div className={style.logos}>
                        <img src={healthLogo} alt="" />
                        <div className={style.vert}></div>
                        <img src={interiorLogo} alt="" />
                    </div>
                    <div className={style.title}><h3>الرئيسية</h3></div>
                </div>
                <div className={style.menuIcon} onClick={handleShowNavbar}>
                    <Hamburger />
                </div>
                <div className={`${style.searchContainer} ${showNavbar && style.active}`}>
                    <ul>
                        <SearchInput />
                        <img src={settings} alt="" />
                    </ul>
                </div>
            </Header>
        </>
    );
}

export default NavBar;