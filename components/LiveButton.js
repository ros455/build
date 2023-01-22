import React from 'react';
import style from '../styles/Livebutton.module.scss'

const LiveButton = () => {
    return (
        <div>
      <button className={style.button}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </button>
        </div>
    );
};

export default LiveButton;