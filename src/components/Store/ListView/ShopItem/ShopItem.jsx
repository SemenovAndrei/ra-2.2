import React from 'react'
import './ShopItem.css'
import PropTypes from 'prop-types'

function ShopItem(props) {
  const card = props.card

  return (
    <div className="shopItem__card">
      <img className="shopItem__item shopItem__img" src={card.img} alt={card.name}></img>
      <h2 className="shopItem__item shopItem__title">{card.name}</h2>
      <div className="shopItem__item shopItem__color">{card.color}</div>
      <div className="shopItem__item shopItem__price">{card.price}</div>
      <button className="shopItem__item shopItem__btn">add to cart</button>
    </div>
  )
}

ShopItem.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
}

export default ShopItem
