import { ShopCard } from '../ShopCard/ShopCard'

export const CardsView = (props) => {
  return (
    <ul className='cards-module'>
        {props.cards.map((card, i) => <ShopCard card={card} key={i}/>)}
    </ul>
  )
}
