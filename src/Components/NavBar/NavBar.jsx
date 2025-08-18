import './NavBar.css'
import logo from "../../assets/logo.png"
import arrowIcon from '../../assets/arrow_icon.png'
import { useContext } from 'react'
import { CoinContext } from '../../Context/CoinContext/CoinContext'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const { setCurrency } = useContext(CoinContext)

    const handleCurrencyChange = (event) => {

        switch (event.target.value) {
            case "brl": {
                setCurrency({ name: 'brl', symbol: 'R$' })
                break;
            }
            case "usd": {
                setCurrency({ name: 'usd', symbol: '$' })
                break;
            }
            case "eur": {
                setCurrency({ name: 'eur', symbol: '€' })
                break;
            }
            default: {
                setCurrency({ name: 'brl', symbol: 'R$' })
                break;
            }
        }
    }

    return (
        <header>
            <nav className='navbar'>
                <Link to="/">
                    <img className='logo' src={logo} alt="logo cryptoplace" />
                </Link>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
                <div className='nav-right'>
                    <select onChange={handleCurrencyChange}>
                        <option value="brl">BRL</option>
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                    </select>
                    <button className='btn'> Sign Up <img src={arrowIcon} alt="arrow icon" /></button>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
