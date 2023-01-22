import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { motion } from 'framer-motion';
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
    const [activeIndex, setActive] = useState(0);
    return (
        <>
            <Navbar variant='dark' bg="dark" expand="lg">
                <Container>
                    <h1 className={style.text}>Logotype</h1>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className={style.navigation}>
                            {headerLink.map((el, index) => (
                                <Link 
                                href={el.link} 
                                className={style.link}
                                key={el.name}>
                                    <motion.div
                                        key={index}
                                        onClick={() => setActive(index)}
                                        className={style.item}
                                        initial={{ color: '#000' }}
                                        animate={{ color: activeIndex == index ? 'rgba(255,0,0)' : '#fcfcfc' }}>
                                        {activeIndex == index && <ActiveLine />}
                                        {el.name}
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

function ActiveLine() {
    return (
        <motion.span
            className={style.line}
            layoutId='activeItem' />
    )
}

export default Header;



// const Header = () => {
//     const [headerLink] = useState([
//         'Home','About','Services','Blog'
//     ])
//     return (
//         <>
//             <Navbar variant='dark' bg="dark" expand="lg">
//                 <Container>
//                     <h1 className={style.text}>Logotype</h1>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <div className={style.navigation}>
//                             <p className={style.text}>Home</p>
//                             <p className={style.text}>About</p>
//                             <p className={style.text}>Services</p>
//                             <p className={style.text}>Blog</p>
//                         </div>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </>
//     );
// };