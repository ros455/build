import React from 'react';
import style from '../styles/BlockAboutOnAboutPage.module.scss'
import { motion } from 'framer-motion';
import Image from 'next/image';
const textSFirstAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.5 },
    }),
}


const textSecondAnimation = {
    hidden: {
        x: 300,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.5 },
    }),
}

const secondBlockAnimation_1 = {
    hidden: {
        y: -30,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.5 },
    }),
}

const BlockAboutOnAboutPage = () => {

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
                    custom={1.5}>WE CREATEAND TURN INTO REALITY</motion.p>
                <motion.span
                    variants={textSecondAnimation}
                    custom={2}></motion.span>
            </motion.div>
            <motion.div 
            className={style.second_block}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}>
                <motion.div 
                className={style.image_wrapper}
                variants={secondBlockAnimation_1}
                custom={2}>
                <Image
                width='1000'
                height='1000'
                alt='image'
                codemods="responsive"
                src='/about.jpg' 
                className={style.image}
                />
                </motion.div>
                <p className={style.paragraph}>We apply innovative design solutions to enhance people’s residential wellbeing and to help workplaces succeed! All our team collaborates with our clients!</p>
                <p className={style.paragraph}>All our team collaborates with our clients, across all of our 3 offices, which are located throughout the US. Our mission is to implement the outstanding design ideas and solutions for any project we’re working on… During that process we carefully combine client’s guidelines, technical possibilities, as well as the environmental issues. Engineering and interior design solutions that we deliver are usually born after a collaborative process.</p>
            </motion.div>
        </div>
    );
};

export default BlockAboutOnAboutPage;