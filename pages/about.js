import React from 'react'
import BlockAboutOnAboutPage from '../components/BlockAboutOnAboutPage';
import style from '../styles/Aboutpage.module.scss'
import FormBlock from '../components/FormBlock'
import OurPhilosophy from '../components/OurPhilosophy';
import Team from '../components/Team';
import TeamPhoto from '../components/TeamPhoto';
 const about = () => {
  return (
    <div className={style.wrap}>
      <BlockAboutOnAboutPage/>
      <OurPhilosophy/>
      <Team/>
      <TeamPhoto/>
      <FormBlock/>
    </div>
  )
}

export default about;