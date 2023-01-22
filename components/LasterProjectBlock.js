import React from 'react'
import style from '../styles/Lasterprojectblock.module.scss'
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

 const LasterProjectBlock = () => {
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
            custom={1}>PORTFOLIO</motion.p>
            <p className={style.second_title}>OUR LATEST PROJECTS</p>
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
            custom={2}>We specialize in author’s projects which represent your individuality. Our award-winning designers know how to create a perfect space for your. We stand for durable materials, qualitative work and innovative technologies. Enjoy our unique architectural solution and design projects! Archivolt.</motion.p>
        </motion.div>
    </div>
  )
}

export default LasterProjectBlock;