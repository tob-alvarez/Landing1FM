import { useState } from 'react'
import logo from '../../assets/logo.svg'
import hamb from '../../assets/icon-hamburger.svg'
import x from '../../assets/icon-close.svg'

const Navbar = () => {

    const [menuAbierto, setMenuAbierto] = useState(false)
    const handleMenu = () =>{
        setMenuAbierto(!menuAbierto)
    }

  return (
    <>
        <div className='container d-flex py-4 align-items-center justify-content-between w-100 mb-5'>
            <img src={logo} alt="" />
            <img src={menuAbierto ? x : hamb} onClick={handleMenu} style={{cursor: 'pointer'}}/>
        </div>
        {menuAbierto ? 
        <>
            <div className='boxMenu'>
                <ul className='listaMenu'>
                    <li>Pricing</li>
                    <li>Product</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Community</li>
                </ul>
            </div>
        </> : <></>}
    </>
  )
}

export default Navbar