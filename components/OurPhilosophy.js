import React, { useState } from 'react'
import Counter from './Counter';
import style from '../styles/OurPhilosophy.module.scss'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const firstBlockAnimation = {
    hidden: {
        x: -80,
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
        x: -80,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.5 },
    }),
}



const OurPhilosophy = ({ time = 1, step = 1 }) => {

    const { ref, inView, entry } = useInView({
        threshold: 0.5,
    });

    const [currVal, setCurrVal] = useState(0);

    React.useEffect(() => {
        console.log('Change');
        let val = 724;
        const numbers = () => {
            let val = 724;
            if (currVal !== val) {
                setTimeout(setCurrVal, 1, currVal + 1);
            }
        }
    }, [inView])

    console.log('inView', inView);
    return (
        <div className={style.wrap}>
            <div
                className={style.first_block}>
                <p className={style.first_title}>SERVICES</p>
                <p className={style.second_title}>OUR PHILOSOPHY</p>
                <span className={style.line}></span>
                <div >
                    <motion.div
                        className={style.our_block}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}>
                        <motion.p
                            className={style.our_title}
                            variants={firstBlockAnimation}
                            custom={1}>OUR MISSION</motion.p>
                        <motion.p
                            className={style.our_text}
                            variants={firstBlockAnimation}
                            custom={1.3}>Designing sustainable, high-performance buildings requires an integration of architectural and engineered systems into a balanced design of sustainabilit.</motion.p>
                    </motion.div>
                    <motion.div
                        className={style.our_block}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}>
                        <motion.p
                            className={style.our_title}
                            variants={firstBlockAnimation}
                            custom={1}>OUR VISION</motion.p>
                        <motion.p
                            className={style.our_text}
                            variants={firstBlockAnimation}
                            custom={1.3}>We are here to meet your demand and resolve architecture issues the most beneficial way for you. Our skilled experts are able to resolve complex and unusual cases in the shortest time.</motion.p>
                    </motion.div>
                    <motion.div
                        className={style.our_block}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}>
                        <motion.p
                            className={style.our_title}
                            variants={firstBlockAnimation}
                            custom={1}>OUR VALUES</motion.p>
                        <motion.p
                            className={style.our_text}
                            variants={firstBlockAnimation}
                            custom={1.3}>Through this experience Warmhouse  has acquired a high level of expertise in the design and realisation of high-profile and luxury schemes, always reducing the complexity.</motion.p>
                    </motion.div>
                </div>
            </div>
            <div className={style.second_block}>
                <p className={style.first_title}>IMPORTANT MILESTONES</p>
                <p className={style.second_title}>WHAT WEACCOMPLISHED</p>
                <span className={style.line}></span>
                <div className={style.numbers_wrap} ref={ref}>
                    <motion.div
                        className={style.numbers_block}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}>
                        <div className={style.numbers}>
                        <Counter val={358} time={5} isBool={inView}/>
                        </div>
                        <motion.p
                            className={style.text}
                            variants={secondBlockAnimation}
                            custom={1.5}>FINISHED PROJECTS</motion.p>
                    </motion.div>
                    <motion.div
                        className={style.numbers_block}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}>
                        <div className={style.numbers}>
                        <Counter val={28} time={80} isBool={inView}/>
                        </div>
                        <motion.p
                            className={style.text}
                            variants={secondBlockAnimation}
                            custom={1.8}>DESIGN AWARDS</motion.p>
                    </motion.div>
                    <motion.div
                        className={style.numbers_block}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}>
                        <div className={style.numbers}>
                        <Counter val={18} time={80} isBool={inView}/>
                        </div>
                        <motion.p
                            className={style.text}
                            variants={secondBlockAnimation}
                            custom={2.1}>YEARS IN INDUSTRY</motion.p>
                    </motion.div>
                    <motion.div
                        className={style.numbers_block}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}>
                        <div className={style.numbers}>
                            <Counter val={724} time={3.5} isBool={inView}/>
                        </div>
                        <motion.p
                            className={style.text}
                            variants={secondBlockAnimation}
                            custom={2.4}>HAPPY CLIENTS</motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

// function Counter({ val, time, isBool }) {
//     const [ currVal, setCurrVal ] = useState(0);
  
//     React.useEffect(() => {
//       if(isBool) {
//         currVal !== val && setTimeout(setCurrVal, time, currVal + 1);
//       }
//     }, [ currVal, isBool ]);
  
//     return <div>{currVal}</div>;
//   }

export default OurPhilosophy;
