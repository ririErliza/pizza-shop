import Image from 'next/image'
import css from '../styles/Header.module.css'
import Logo from '../assets/Logo.png'
import {UilShoppingBag} from '@iconscout/react-unicons'
import {useStore} from '../store/store'

const Header = () => {

  //state in terminal
  const state = useStore((state)=>state)
  console.log(state)

  // item in cart
  const items = useStore((state)=>state.cart.pizzas.length)

  return (
    <div className={css.header}>
       {/* Logo */}
       <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50}/>
        <span>Fudo</span>
       </div>

       {/* Menu*/}
       <ul className={css.menu}>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
       </ul>

       {/* Right side*/}
       <div className={css.rightSide}>
        <div className={css.cart}>
            <UilShoppingBag size={35} color="#2E2E2E"/>
            <div className={css.badge}>{items}</div>
        </div>
       </div>


    </div>

    
  )
}

export default Header