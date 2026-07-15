import React from 'react'
import styles from './Navbar.module.css'
import icon from '../../assets/ball.png'

export const Navbar = () => {
  return (
    <nav>
        
     <img src={icon} alt="Navbar icon " className={styles['img-icon']} />
       <div className={styles['link']}>

        <a href='/#' className={styles['links']} > Shop Online</a>
        <a href='/#' className={styles['links']} > Find In Store</a>
        <a href='/#' className={styles['links']}>Learn More</a>
        <button> Subscribe</button>

       </div>

    </nav>
  )
}
