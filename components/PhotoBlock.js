import React from 'react';
import style from '../styles/Photoblock.module.scss'
import Image from 'next/image';
import { motion } from 'framer-motion';

const photoSFirstAnimation = {
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


const photoSecondAnimation = {
    hidden: {
        y: 30,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.5 },
    }),
}

const photoThirdAnimation = {
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

const PhotoBlock = () => {
  return (
    <motion.div 
    className={style.wrap}
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.1 }}>
        <motion.div 
        className={style.image_wrapper}
        variants={photoSFirstAnimation}
        custom={1}>
            <Image
                width='1000'
                height='1000'
                alt='image'
                codemods="responsive"
                src='/Architecture.jpg' 
                className={style.image}
                />
        </motion.div>
        <motion.div 
        className={style.image_wrapper}
        variants={photoSecondAnimation}
        custom={1.5}>
            <Image
                width='1000'
                height='1000'
                alt='image'
                codemods="responsive"
                src='/Engineering.jpg' 
                className={style.image}/>
        </motion.div>
        <motion.div 
        className={style.image_wrapper}
        variants={photoThirdAnimation}
        custom={2}>
            <Image
                width='1000'
                height='1000'
                alt='image'
                codemods="responsive"
                src='/Interior-Design.jpg' 
                className={style.image}/>
        </motion.div>
    </motion.div>
  )
};

export default PhotoBlock;