import React from 'react'
import styles from './Content.module.css'
import Juice from '../../assets/JuiceSix.png'
import { Button } from '../Button/Button'

export const Content = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['content']} >
      <img src={Juice}  alt="Stacked juice image" />
      <div>
     <h1>Topic</h1>
     <p> This will be the paragraph</p>
     <Button text={'Read More'}/>
     </div>
      </div>
    </div>
  )
}
