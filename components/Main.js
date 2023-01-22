import React from 'react';
import style from '../styles/Main.module.scss'
import BlockAbout from './BlockAbout';
import PhotoBlock from '../components/PhotoBlock'
import ExclusuveBlock from './ExclusuveBlock';
import LasterProjectBlock from './LasterProjectBlock';
import FormBlock from './FormBlock';
import PhotoGalereyBlock from './PhotoGalereyBlock';
import StaticButton from './StaticButton';
import Partnersblock from './Partnersblock';
const Main = () => {
    return (
        <div className={style.wrap}>
            <>
            <BlockAbout/>
            <PhotoBlock/>
            <ExclusuveBlock/>
            <LasterProjectBlock/>
            <PhotoGalereyBlock/>
            <div className={style.button_wrap }>
            <StaticButton/>
            </div>
            <Partnersblock/>
            <FormBlock/>
            </>
        </div>
    );
};

export default Main;