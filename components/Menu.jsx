import Image from 'next/image'
import React from 'react'
import { urlFor } from '../lib/client'
import css from '../styles/Menu.module.css'
import Link from 'next/link'


const Menu = ({pizzas}) => {
    // console.log(pizzas)
  return (
    <div className={css.container}>

        <div className={css.heading}>
            <span>Our MENU</span>
            <span>Menu That Always</span>
            <span>Make you Fall In Love</span>

        </div>

         {/* pizzas */}

        <div className={css.menu}>
        {pizzas.map((pizza,id)=>{
            const src = urlFor(pizza.image).url()

            return(
                <div className={css.pizza} key={id}>

                    <Link href={`./pizza/${pizza.slug.current}`}>
                    <div className={css.imageWrapper}>
                        <Image
                        loader={()=>src}
                        src={src}
                        alt=""
                        objectFit='cover'
                        layout='fill'
                        unoptimized
                      />
                    </div>

                    
                    </Link>

                    <span>{pizza.name}</span>
                    <span> {pizza.details}</span>

                    


                </div>
            )
        }
        )}
            
        </div>
       
        
    </div>
  )
}

export default Menu