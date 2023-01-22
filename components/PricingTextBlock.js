import React from 'react'
import style from '../styles/PricingTextBlock.module.scss'
import { motion } from 'framer-motion';
const firstBlockAnimation_1 = {
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

  const firstBlockAnimation_2 = {
    hidden: {
        x: 100,
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

 const PricingTextBlock = () => {
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
            custom={1}>OUR PRICING</motion.p>
            <p className={style.second_title}>A VARIETY OF OPTIONS</p>
            <motion.span 
            className={style.line}
            variants={firstBlockAnimation_2}
            custom={1.5}></motion.span>
        </motion.div>
        <motion.div 
        className={style.second_block}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}>
            <motion.p 
            className={style.paragraph}
            variants={secondBlockAnimation_1}
            custom={2}>Transform your everyday environment with these 3 different sets of architecture services offered at affordable price. Every pricing package can be customized according to your wishes.</motion.p>
        </motion.div>
    </div>
  )
}

export default PricingTextBlock;