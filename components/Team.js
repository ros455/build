import React from 'react'
import style from '../styles/Team.module.scss'
import { motion } from 'framer-motion';

const firstBlockAnimation = {
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

const secondBlockAnimation = {
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

 const Team = () => {
  return (
    <div className={style.wrap}>
        <motion.div 
        className={style.first_block }
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}>
            <motion.p 
            className={style.first_title}
            variants={firstBlockAnimation}
            custom={1}>TEAM</motion.p>
            <p className={style.second_title}>OUR AMAZING TEAM</p>
            <motion.span 
            className={style.line}
            variants={firstBlockAnimation}
            custom={1.5}></motion.span>
        </motion.div>
        <motion.div 
        className={style.second_block }
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}>
        <motion.p 
        className={style.paragraph}
        variants={secondBlockAnimation}
        custom={1.5}>Archivolt is the place where you can be sure for your house and interior. We have a team of professionals who work on providing you with the best service and creative solutions. e are happy to complete the most complex projects and to provide you with the interior of your dream!</motion.p>
        </motion.div>
    </div>
  )
}

export default Team;