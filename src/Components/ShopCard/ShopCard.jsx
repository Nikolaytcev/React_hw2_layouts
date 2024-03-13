export const ShopCard = (props) => {
  return (
    <div className='card-module'>
        <h2 className='card-name'>{props.card.name}</h2>
        <h3 className='item-color'>{props.card.color}</h3>
        <img className='item-img-module' src={props.card.img} alt="item color" />
        <div className='price-and-add'>
            <div className='price'>${props.card.price}</div>
            <button className='add-to-card'>Add to cart</button>
        </div>
        
    </div>
  )
}
