import Image from 'next/image'
import css from '../styles/Hero.module.css'
import Cherry from '../assets/Cherry.png'
import HeroImage from '../assets/HeroImage.png'
import {UilPhone} from '@iconscout/react-unicons'
import Pizza1 from '../assets/p1.jpg'

const Hero = () => {
  return (
    <div className={css.container}>

        {/* Left side */}
        <div className={css.leftSide}>

            <div className={css.cherryDiv}>
                <span>More than faster</span>
                <Image src={Cherry} alt='' width={40} height={25} />
            </div>

            <div className={css.heroText}>
                <span>Be the fastest</span>
                <span>In delivering</span>
                <span>
                    Your <span style={{color:"var(--themeRed)"}}> pizza</span>
                </span>
            </div>

            <span className={css.miniText}>
                Our ingredients are always fresh and we guarantee the best pizza in the town
            </span>

            <button className={`btn ${css.btn}`}>
                Get started
            </button>

        </div>
        {/* Right side */}
        <div className={css.rightSide}>

            <div className={css.imageContainer}>
                <Image src={HeroImage} alt='' layout="responsive" />
            </div>

            <div className={css.ContactUs}>
                <span>Contact Us</span>
                <div>
                    <UilPhone color='white'/>
                </div>
            </div>

            <div className={css.pizza}>
                <div>
                <Image src={Pizza1} alt='' objectFit='cover' layout='intrinsic'/>
                </div>

                <div className={css.details}>
                    <span>Italian Pizza</span>
                    <span><span style={{color:"var(--themeRed)"}}>$</span>7.49</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero