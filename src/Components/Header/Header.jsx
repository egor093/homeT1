<<<<<<< HEAD
import './Header.css'
import img1 from '../../img/logo.png'
import img2 from "../../img/avatar.png"
import img3 from "../../img/basket.png"

export default function Header() {
    return (

        <header className="head">

            <img className="logo" src={img1} alt="" />

            <div className="burger">
                <i className="fas fa-bars"></i>

            </div>

            <a className="png" href="#">СПАЛЬНИ</a>
            <a href="#">ОФИС</a>
            <a href="#">ДЕТСКИЕ</a>
            <a href="#">КУХНИ</a>
            <a href="#">АКСЕССУАРЫ</a>
            <a href="#">ГДЕ КУПИТЬ</a>
            <img className="play" src={img2} alt="" />
            <img className="play" src={img3} alt="" />

        </header>

    )
=======


export default function Header() {
  return (
    <div>
      <h1>Header</h1>
    </div>
  )
>>>>>>> fe8b073dbab968cd8d454cb685872efacbda9450
}
