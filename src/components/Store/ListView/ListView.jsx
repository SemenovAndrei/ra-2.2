import React from 'react'
import ShopItem from './ShopItem/ShopItem'
import PropTypes from 'prop-types'
import './ListView.css'

function ListView(props) {
  const cards = props.cards

  return (
    <div className="listView__container">
      {cards.map(o => (
        <ShopItem key={o.id} card={o} />
      ))}
    </div>
  )
}

ListView.propTypes = {
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

export default ListView
