import React from 'react'
import ShopCard from './ShopCard/ShopCard'
import PropTypes from 'prop-types'
import './CardsView.css'

function CardsView(props) {
  const cards = props.cards

  return (
    <div className="cardView__container">
      {cards.map(o => (
        <ShopCard key={o.id} card={o} />
      ))}
    </div>
  )
}

CardsView.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
}

export default CardsView
