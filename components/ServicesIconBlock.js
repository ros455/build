import React, { useState } from 'react';
import style from '../styles/ServicesIconBlock.module.scss'
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
  
const ServicesIconBlock = () => {
    const [items] = useState([
        {
            title: 'INTERIOR PLANING',
            text: 'A relaxing bathroom helps you start and end your day in good spirits. It’s beneficial to have well designed storage to keep an open, clean feel.',
            path: '/pencil-ruler.png'
        },
        {
            title: 'LANDSPACING',
            text: 'We all are living busy lives, giving time to family, friends, and work, hence our bedroom is oftentimes the place where we go to relax and escape everyday life struggles.',
            path: '/map.png'
        },
        {
            title: 'DECORATION',
            text: 'For improving entire appeal of the house homeowners can opt for the renovation projects. Unique renovation can completely.',
            path: '/tree.png'
        },
        {
            title: 'INTERIOR DESIGN',
            text: 'We combine decades of design projecting experience with an unrelenting dedication to setting new benchmarks in the lighting marketplace.',
            path: '/couch.png'
        },
        {
            title: 'ARCHITECTURE',
            text: 'We offer dozens of custom options - from special finishes to hand-applied gilding to a choice of leg styles on some pieces, and even more choices.',
            path: '/apartment.png'
        },
        {
            title: 'STYLE SELECTION',
            text: 'We understand that most homeowners don’t undertake major exterior replacements and redesign projects more than once, and that’s why our goal.',
            path: '/color-sampler.png'
        },
    ])
    return (
        <div className={style.wrap}>
            <div className={style.main_block}>
                {items.map((el,index) => (
                    <motion.div 
                    className={style.block} key={el.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}>
                        <motion.div 
                        className={style.icon_wrap}
                        variants={firstBlockAnimation_1}
                        custom={(1 + index)/2}>
                            <Image
                                width='1000'
                                height='1000'
                                alt='image'
                                codemods="responsive"
    
                                src={el.path}
                                className={style.icon}
                            />
                        </motion.div>
                        <motion.div 
                        className={style.info_block}>
                            <motion.p 
                            className={style.title}>{el.title}</motion.p>
                            <motion.p 
                            className={style.text}>{el.text}</motion.p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ServicesIconBlock;