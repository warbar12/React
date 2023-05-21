import {default as ButtonBuy} from './BntBuy'
import './scss/header.scss'


function Header(){
  return (
    <div className='header'>
      <div className='header-top'>
        <div className='container'>
          <div className="header-item">
            <div className='social'>
              <img src="https://cdn-icons-png.flaticon.com/32/2111/2111463.png" alt="inst" />
              <img src="https://cdn-icons-png.flaticon.com/32/3670/3670070.png" alt="tel" />
              <img src="https://cdn-icons-png.flaticon.com/32/4494/4494494.png" alt="whatsapp" />
              <img src="https://cdn-icons-png.flaticon.com/32/2504/2504948.png" alt="viber" />
              <img src="https://cdn-icons-png.flaticon.com/32/3536/3536559.png" alt="pinterest" />
            </div>
           <ButtonBuy></ButtonBuy>
          </div>
        </div>
      </div>
      <div className='header-bot'>
        <div className='container'>
          <div className="header-bot-menu">
            <nav className='menu'>
              <ul className='menu-item'>
                <li className='menu-item-link'>home</li>
                <li className='menu-item-link'>phone</li>
                <li className='menu-item-link'>laptop</li>
                <li className='menu-item-link'>Gemer PC</li>
                <li className='menu-item-link'>about us</li>
                <li className='menu-item-link'>Feedback</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;