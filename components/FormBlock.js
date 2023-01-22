import React, {useState} from 'react'
import style from '../styles/Formblock.module.scss'
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

 const FormBlock = () => {

  const [isActive, setIsActive] = useState(false);

  const handleIsActive = (e) => {
    !e.preventDefault()
    setIsActive(true)
    setTimeout(() => {
      setIsActive(false)
    },2000)
  }

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
            custom={1}>LET’S GET IN TOUCH</motion.p>
            <p className={style.second_title}>CONTACT DETAILS</p>
            <motion.span 
            className={style.line}
            variants={firstBlockAnimation_2}
            custom={1.5}></motion.span>
            <p className={style.text}>Phone: <span>(555)123-4567</span></p>
            <p className={style.text}>E-mail: <span>info@demolink.org</span></p>
            <p className={style.text}>Address: Alexandria, 32 Washingtorn str, 22303</p>
            <p className={style.text}>Opening hours:</p>
            <p className={style.text}>Monday — Thursday 10:00 – 23:00</p>
            <p className={style.text}>Friday — Sunday 10:00 – 19:00</p>
        </motion.div>
        <form className={style.second_block}>
            <input className={style.input} placeholder=' Your Name'/>
            <input className={style.input} placeholder=' Your E-Mail'/>
            <textarea 
            className={`${style.input} ${style.textarea}`}
            placeholder=' Your Messege'/>
            <div className={style.button_block}>
            <input onClick={handleIsActive} type='submit' value="Send" className={ isActive ? `${style.button} ${style.button_active}` : `${style.button}`} />
            </div>
        </form>
    </div>
  )
}
export default FormBlock;