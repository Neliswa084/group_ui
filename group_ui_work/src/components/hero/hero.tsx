import React from 'react'
import HeroImage from '../../assets/HeroImage.png'
import styles from './hero.module.css'

 export const Hero = () => {
  return (
    <div className={styles['Hero-Container']}>
     <div>
        <h1>A New Kind of Soda</h1>
        <span>TM</span>
     </div>
    <div>
        <img src={HeroImage} alt="Coke image" className={styles['hero-img']}/>
    </div>

    </div>
  )
}
