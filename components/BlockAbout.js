import React from 'react';
import style from '../styles/BlockAbout.module.scss'
import { motion } from 'framer-motion';

const textSFirstAnimation = {
    hidden: {
        y: 50,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.5 },
    }),
}


const textSecondAnimation = {
    hidden: {
        y: 50,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.5 },
    }),
}

const BlockAbout = () => {
    return (
        <div className={style.wrap}>
            <motion.div
                className={style.first_block}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}>
                <motion.p
                    className={style.first_title}
                    variants={textSecondAnimation}
                    custom={1}>ABOUT COMPANY</motion.p>
                <motion.p
                    className={style.second_title}
                    variants={textSFirstAnimation}
                    custom={1.5}>WE CREATE AND TURN INTO REALITY</motion.p>
                <motion.span
                    variants={textSecondAnimation}
                    custom={2}></motion.span>
            </motion.div>
            <div className={style.second_block}>
                <p className={style.paragraph}>We apply innovative design solutions to enhance people’s residential wellbeing and to help workplaces succeed! All our team collaborates with our clients!</p>
                <p className={style.paragraph}>All our team collaborates with our clients, across all of our 3 offices, which are located throughout the US. Our mission is to implement the outstanding design ideas and solutions for any project we’re working on… During that process we carefully combine client’s guidelines, technical possibilities, as well as the environmental issues. Engineering and interior design solutions that we deliver are usually born after a collaborative process.</p>
            </div>
        </div>
    );
};

export default BlockAbout;