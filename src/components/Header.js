import '../assets/css/Header.css'
import {Link,useLocation} from 'react-router-dom'
export default function Header() {
  const location = useLocation()
  console.log(location)
  return (
    <header>
      <Link to={location.pathname}><span className="material-symbols-outlined">arrow_back_ios_new</span></Link>
      <Link to={'/'}><h1>PandiStore</h1></Link>
      <Link to='/cart'><span className="material-symbols-outlined">shopping_cart</span></Link>
    </header>
  )
}
