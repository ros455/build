import React from 'react'
import style from '../styles/Photogalereyblock.module.scss'
import Image from 'next/image';
import { motion } from 'framer-motion';
 const PhotoGalereyBlock = () => {

  const photoAnimation_1 = {
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


const photoAnimation_2 = {
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

const photoAnimation_3 = {
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

const photoAnimation_4 = {
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

const photoAnimation_5 = {
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

const photoAnimation_6 = {
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

  return (
    <motion.div 
    className={style.wrap}
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.1 }}>
        <motion.div 
        className={style.image_wrapper}
        variants={photoAnimation_1}
        custom={2}>
            <Image
                width='1000'
                height='1000'
                alt='image'
                codemods="responsive"
                src='/gallery-1.jpg' 
                className={style.image}
                />
        </motion.div>
        <motion.div 
        className={style.image_wrapper}
        variants={photoAnimation_2}
        custom={1.5}>
            <Image
                width='1000'
                height='1000'
                alt='image'
                codemods="responsive"
                src='/gallery-2.jpg' 
                className={style.image}/>
        </motion.div>
        <motion.div 
        className={style.image_wrapper}
        variants={photoAnimation_3}
        custom={1}>
            <Image
                width='1000'
                height='1000'
                alt='image'
                codemods="responsive"
                src='/gallery-3.jpg' 
                className={style.image}/>
        </motion.div>
        <motion.div 
        className={style.image_wrapper}
        variants={photoAnimation_4}
        custom={2.9}>
            <Image
                width='1000'
                height='1000'
                alt='image'
                codemods="responsive"
                src='/gallery-4.jpg' 
                className={style.image}
                />
        </motion.div>
        <motion.div 
        className={style.image_wrapper}
        variants={photoAnimation_5}
        custom={2.6}>
            <Image
                width='1000'
                height='1000'
                alt='image'
                codemods="responsive"
                src='/gallery-5.jpg' 
                className={style.image}/>
        </motion.div>
        <motion.div 
        className={style.image_wrapper}
        variants={photoAnimation_6}
        custom={2.3}>
            <Image
                width='1000'
                height='1000'
                alt='image'
                codemods="responsive"
                src='/gallery-6.jpg' 
                className={style.image}/>
        </motion.div>
    </motion.div>
);
}

export default PhotoGalereyBlock;
