import { ShopItem } from '../ShopItem/ShopItem'

export const ListView = (props) => {
  return (
    <ul className='cards-list'>
        {props.items.map((item, i) => <ShopItem item={item} key={i}/>)}
    </ul>
  )
}
