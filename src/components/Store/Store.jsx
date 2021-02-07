import React, { useState } from 'react'
import products from './products'
import IconSwitch from './IconSwitch/IconSwitch'
import CardsView from './CardsView/CardsView'
import ListView from './ListView/ListView'
import './Store.css'
// import PropTypes from 'prop-types'

function Store() {
  const [icon, setIcon] = useState(true)

  const productsList = products

  const onSwitchIcon = icon => {
    setIcon(prevIcon => !prevIcon)
  }

  const from = [<CardsView cards={productsList} />, <ListView cards={productsList} />]

  const index = icon ? 0 : 1

  return (
    <div className="store__container">
      <div className="store__icon">
        <IconSwitch onSwitch={onSwitchIcon} icon={icon} />
      </div>
      <div>{from[index]}</div>
    </div>
  )
}

// Store.propTypes = {}

export default Store
