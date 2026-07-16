import React from 'react'
import HeroImage from '../../assets/HeroImage.png'
import styles from './hero.module.css'
import { Button } from '../Button/Button'

 export const Hero = () => {
  return (
    <div className={styles['hero-container']}>
    
     
     <div className={styles['hero-text']}>
      
       <h1 style={{color: 'rgb(7, 58, 7)' , fontSize: '50px'}}> A New Kind of Soda</h1>
        <Button text={'Shop OLIPOP'} />
     </div>

    <div className={styles['hero-image']} >
        <img src={HeroImage} alt="Coke image" className={styles['hero-img']}/>
    </div>

    </div>
  )
}
