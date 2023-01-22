import React from 'react'
import style from '../styles/Servicepage.module.scss'
import Partnersblock from '../components/Partnersblock'
import FormBlock from '../components/FormBlock'
import BestServices from '../components/BestServices'
import ServicesIconBlock from '../components/ServicesIconBlock'
import PricingTextBlock from '../components/PricingTextBlock'
import PricingBlock from '../components/PricingBlock'
 const service = () => {
  return (
    <div className={style.wrap}>
      <BestServices/>
      <ServicesIconBlock/>
      <Partnersblock/>
      <PricingTextBlock/>
      <PricingBlock/>
      <FormBlock/>
    </div>
  )
}

export default service;