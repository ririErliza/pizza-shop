import Image from 'next/image'
import React from 'react'
import { urlFor } from '../lib/client'
import css from '../styles/Menu.module.css'

const Menu = ({pizzas}) => {
    console.log(pizzas)
  return (
    <div className={css.container}>

        <div className={css.heading}>
            <span>Our MENU</span>
            <span>Menu That Always</span>
            <span>Make you Fall In Love</span>

        </div>

        <div className={css.menu}>
        {pizzas.map((pizza,id)=>{
            const src = urlFor(pizza.image).url()

            return(
                <div className={css.pizza} key={id}>


                    <div className={css.imageWrapper}>
                        <Image
                        loader={()=>src}
                        src={src}
                        alt=""
                        objectFit='cover'
                        layout='fill'/>
                    </div>

                    <span>{pizza.name}</span>
                    <span> <span style={{color:"var(--themeRed)"}}>$</span> {pizza.price[1]}</span>


                </div>
            )
        }
        )}
            
        </div>
        {/* pizzas */}
        
    </div>
  )
}

export default Menu