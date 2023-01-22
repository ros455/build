import React, { useState } from 'react'
import style from '../styles/PricingBlock.module.scss'
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

const PricingBlock = () => {
    const [data] = useState([
        {
            title: 'BASIC',
            price: '$29.00',
            text1: 'Interior Design',
            text2: 'Space Planning',
            text3: 'Decorating Service',
            text4: 'Project Management',
        },
        {
            title: 'STANDARD',
            price: '$49.00',
            text1: 'Interior Architecture',
            text2: 'Exterior Design',
            text3: 'Renovation Service',
            text4: 'Lighting Installation',
        },
        {
            title: 'PREMIUM',
            price: '$79.00',
            text1: 'Landscape Design',
            text2: 'Planning & Development',
            text3: 'Custom Furniture',
            text4: 'Refurbishing',
        },
    ])
    return (
        <motion.div
            className={style.wrap}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}>
            {data.map((el, index) => (
                <motion.div
                    className={style.block}
                    key={el.title}
                    variants={firstBlockAnimation_1}
                    custom={1 + index}>
                    <p className={style.title}>{el.title}</p>
                    <p className={style.price}>{el.price}</p>
                    <p className={style.text}>{el.text1}</p>
                    <p className={style.text}>{el.text2}</p>
                    <p className={style.text}>{el.text3}</p>
                    <p className={style.text}>{el.text4}</p>
                    <button className={style.btn}>VIEW MORE</button>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default PricingBlock;