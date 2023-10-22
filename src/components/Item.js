import '../assets/css/Item.css'
import {Link} from 'react-router-dom'
export default function Item(props) {
  
  const { img,nombre,medidas,precio} = props
  return (
    <li>
      <div>
        <img src={img} alt={nombre} />
        <Link to={`/products?${nombre}`} >{nombre}</Link>
      </div>
      <div>
        <p className='medidas'>Medidas: {medidas}</p>
        <div>
          <p>AR$ {precio}</p>
          <button type='button'>+</button>
        </div>
      </div>
      
    </li>
  )
}
