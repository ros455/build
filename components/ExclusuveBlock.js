import React from 'react'
import style from '../styles/Exclusivebloc.module.scss'
import { motion } from 'framer-motion';
import StaticButton from './StaticButton';

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
      x: -100,
      opacity: 0,
  },
  visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.5 },
  }),
}


const firstBlockAnimation_3 = {
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
      y: -100,
      opacity: 0,
  },
  visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.5 },
  }),
}

const secondBlockAnimation_2 = {
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


const secondBlockAnimation_3 = {
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

const secondBlockAnimation_4 = {
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

const secondBlockAnimation_5 = {
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




 const ExclusuveBlock = () => {

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
    custom={1.5}>ADVANTAGES</motion.p>
    <motion.p 
    className={style.second_title}
    variants={firstBlockAnimation_2}
    custom={1.8}>WORKING ON EXCLUSIVE PROJECTS</motion.p>
    <motion.span 
    className={style.line}
    variants={firstBlockAnimation_3}
    custom={2}></motion.span>
    <p className={style.paragraph}>Designing sustainable, high-performance buildings requires an integration of architectural and engineered systems into a balanced design of sustainability and cost-effectiveness. Archus merges these practices with the unique requirements and guidelines necessary for advanced technology facilities.</p>
    <StaticButton/>
      </motion.div>

    <motion.div 
    className={style.second_block}
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2 }}>
    <motion.p 
    className={style.first_title}
    variants={secondBlockAnimation_1}
    custom={2.8}>TESTIMONIALS</motion.p>
    <motion.p 
    className={style.second_title}
    variants={secondBlockAnimation_2}
    custom={2.6}>WHAT OUR CLIENTS SAY</motion.p>
    <motion.span 
    className={style.line}
    variants={secondBlockAnimation_3}
    custom={2.4}></motion.span>
    <motion.p 
    className={style.paragraph__second_block}
    variants={secondBlockAnimation_4}
    custom={2.2}>It is not every construction company that can build a building from ground up and complete 80,000 sq. ft. of first class office improvement space in 13 months.</motion.p>
    <motion.p 
    className={style.paragraph__second_block}
    variants={secondBlockAnimation_5}
    custom={2}><span>KENT</span>, POSTED ON EVERYWHERE</motion.p>
      </motion.div>
    </div>
  )
}

export default ExclusuveBlock;
