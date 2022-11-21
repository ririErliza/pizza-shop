import Image from 'next/image'
import css from '../styles/Header.module.css'
import Logo from '../assets/Logo.png'
import {UilShoppingBag} from '@iconscout/react-unicons'
import {useStore} from '../store/store'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {

  //state in terminal
  // const state = useStore((state)=>state)
  // console.log(state)

  const[order, setOrder]= useState("")

  useEffect(()=>{
    setOrder(localStorage.getItem("order"));
  },[])

  // item in cart
  const items = useStore((state)=>state.cart.pizzas.length)

  return (
    <div className={css.header}>
       {/* Logo */}
       <Link href='/'>
        <div className={css.logo}>
          <Image src={Logo} alt="" width={50} height={50}/>
          <span>Fudo</span>
        </div>
      </Link>

       {/* Menu*/}
       <ul className={css.menu}>
        <Link href='/'><li>Home</li></Link>
            <li>Menu</li>
            <li>Contact</li>
       </ul>

       {/* Right side*/}
       <div className={css.rightSide}>
        <Link href='/cart'>
          <div className={css.cart}>
              <UilShoppingBag size={35} color="#2E2E2E"/>
              <div className={css.badge}>{items}</div>
          </div>
        </Link>
       </div>


    </div>

    
  )
}

export default Header