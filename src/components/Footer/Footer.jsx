import fb from '../../assets/icon-facebook.svg'
import yt from '../../assets/icon-youtube.svg'
import tw from '../../assets/icon-twitter.svg'
import pt from '../../assets/icon-pinterest.svg'
import ig from '../../assets/icon-instagram.svg'
import logo from '../../assets/logo.svg'


const Footer = () => {
  return (
    <>
    <div className="container-fluid footer">
    <div className="row py-5">
            <div className='col-12 col-md-4 container justify-content-center d-flex gap-2'>
                <input type="text" placeholder="Updates in your inbox"/>
                <button className="boton">GO</button>
            </div>
            <div className="col-12 col-md-4">
                <div className="d-flex">
                    <ul className="listaFooter d-flex gap-2 flex-column align-items-center justify-content-center w-100">
                        <li>Home</li>
                        <li>Pricing</li>
                        <li>Products</li>
                        <li>About Us</li>
                    </ul>
                    <ul className="listaFooter d-flex gap-2 flex-column align-items-center justify-content-center w-100">
                        <li>Careers</li>
                        <li>Community</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                </div>
                <div className="col-12 col-md-4">
                <div className="d-flex gap-3 justify-content-center mt-4 contenedorIMG">
                    <img src={fb} alt="" />
                    <img src={yt} alt="" />
                    <img src={tw} alt="" />
                    <img src={pt} alt="" />
                    <img src={ig} alt="" />
                </div>
                <div className="d-flex gap-3 justify-content-center mt-4 flex-column">
                    <img src={logo} className='fotitoNav' />
                    <p className='parrafo'>Copyright 2023. All rights reserved</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer