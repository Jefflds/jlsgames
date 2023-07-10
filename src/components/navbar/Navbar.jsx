import Logo from '../logo/Logo'
import Styles from './Navbar.module.css'
import { BsCardList } from 'react-icons/bs';

export default function Navbar() {
  return (
    <nav className={Styles.navbar}>
      <Logo />
      <input type="text" />
      <BsCardList size={40} />
    </nav>
  )
}
