export const ShopItem = (props) => {
  return (
    <div className='card-list'>
        <img className='item-img-list' src={props.item.img} alt="item color" />
        <h2 className='card-name'>{props.item.name}</h2>
        <h3 className='item-color'>{props.item.color}</h3>
        <div className='price'>${props.item.price}</div>
        <button className='add-to-card'>Add to cart</button>
    </div>
  )
}
