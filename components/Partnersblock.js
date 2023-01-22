import React from 'react';
import style from '../styles/Partnerblock.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

const firstBlockAnimation_1 = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.5 },
    }),
  }
  
  const firstBlockAnimation_2 = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.5 },
    }),
  }
  
  
  const firstBlockAnimation_3 = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.5 },
    }),
  }
 const Partnersblock = () => {
  return (
    <div className={style.wrap}>
        <motion.div 
        className={style.first_block}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}>
            <motion.p 
            className={style.first_title}
            variants={firstBlockAnimation_1}
            custom={2}>PARTNERS</motion.p>
            <motion.p 
            className={style.second_title}
            variants={firstBlockAnimation_2}
            custom={1.5}>OUR CLIENTS & PARTNERS</motion.p>
            <motion.span 
            className={style.line}
            variants={firstBlockAnimation_3}
            custom={1}></motion.span>
        </motion.div>
        <div className={style.second_block}>
            <div className={style.image_wrapper}>
            <Image
                width='1000'
                height='1000'
                alt='image'
                codemods="responsive"
                src='/home-brands-1.png'  
                className={style.image}
                />
            </div>
            <div className={style.image_wrapper}>
            <Image
                width='100'
                height='100'
                alt='icon'
                codemods="responsive"
                src='/home-brands-2.png'  
                className={style.image}
                />
            </div>
            <div className={style.image_wrapper}>
            <Image
                width='100'
                height='100'
                alt='icon'
                codemods="responsive"
                src='/home-brands-3.png'  
                className={style.image}
                />
            </div>
            <div className={style.image_wrapper}>
            <Image
                width='100'
                height='100'
                alt='icon'
                codemods="responsive"
                src='/home-brands-4.png'  
                className={style.image}
                />
            </div>
            <div className={style.image_wrapper}>
            <Image
                width='100'
                height='100'
                alt='icon'
                codemods="responsive"
                src='/home-brands-5.png'  
                className={style.image}
                />
            </div>
            <div className={style.image_wrapper}>
            <Image
                width='100'
                height='100'
                alt='icon'
                codemods="responsive"
                src='/home-brands-6.png'  
                className={style.image}
                />
            </div>
        </div>
    </div>
  )
}


export default Partnersblock;