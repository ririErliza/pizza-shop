import Image from 'next/image'
import css from '../styles/Hero.module.css'
import Cherry from '../assets/Cherry.png'

const Hero = () => {
  return (
    <div className={css.container}>
        {/* Left side */}
        <div className={css.leftSide}>
            <div className={css.cherryDiv}>
                <span>More than faster</span>
                <Image src={Cherry} alt='' width={40} height={25} />
            </div>

        </div>
        {/* Right side */}
        <div className={css.rightSide}>

        </div>
    </div>
  )
}

export default Hero