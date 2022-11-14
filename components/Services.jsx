import css from '../styles/Services.module.css'

const Services = () => {
  return (
    <>
    <div className={css.heading}>
        <span>WHAT WE SERVE</span>
        <span>Your Favorite Food</span>
        <span>Delivery Partner</span>
    </div>

    {/* Features */}
    <div className={css.services}>
        <div className={css.feature}></div>
        <div className={css.feature}>2nd feature</div>
        <div className={css.feature}>3rd feature</div>
    </div>


    </>
  )
}

export default Services