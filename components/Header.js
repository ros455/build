import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap'
import style from '../styles/Header.module.scss'
import Link from 'next/link';
const Header = () => {
    const [headerLink] = useState([
        {
            name: 'Home',
            link: '/'
        }, {
            name: 'About',
            link: 'about'
        }, {
            name: 'Service',
            link: 'service'
        },
    ])
    return (
        <>
            <Navbar variant='dark' bg="dark" expand="lg">
                <Container>
                    <Link href='/'
                    className={style.link}>
                    <p className={style.logo}>BUILDING COMPANY</p>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className={style.navigation}>
                            {headerLink.map((el, index) => (
                                <Link 
                                href={el.link} 
                                className={style.link}
                                key={el.name}>
                                    <div
                                        key={el.name}
                                        className={style.item}>
                                        {el.name}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;