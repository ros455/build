import React from 'react';
import style from '../styles/Calltoaction.module.scss'
import { motion } from 'framer-motion';
import LiveButton from './LiveButton';
const textSecondAnimation = {
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
const CallToAction = () => {
    return (
        <motion.div
            className={style.wrap}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}>
            <motion.p
                className={style.title_first}
                variants={textSecondAnimation}
                custom={3}>WE BUILD THE FUTURE</motion.p>
            <motion.p
                className={style.title_second}
                variants={textSecondAnimation}
                custom={2}>Best Ideas – Best Solution – Best Result</motion.p>
            <motion.div
                variants={textSecondAnimation}
                custom={1}>
                <LiveButton />
            </motion.div>
        </motion.div>
    );
};

export default CallToAction;