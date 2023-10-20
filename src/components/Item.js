import '../assets/css/Item.css'

export default function Item(props) {
  const { img,nombre,medidas,precio} = props
  return (
    <li>
      <div>
        <img src={img} alt={nombre} />
        <p className='nombre'>{nombre}</p> 
      </div>
      <div>
        <p className='medidas'>Medidas: {medidas}</p>
        <div>
          <p>AR$ {precio}</p>
          <button>+</button>
        </div>
      </div>
      
    </li>
  )
}
