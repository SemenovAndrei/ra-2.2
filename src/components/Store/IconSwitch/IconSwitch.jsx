import React from 'react'
import './IconSwitch.css'
import PropTypes from 'prop-types'

function IconSwitch(props) {
  const icon = props.icon

  const iconNames = ['view_list', 'view_module']

  const onSwitch = () => {
    props.onSwitch(icon)
  }

  return (
    <button className="iconSwitch__icon material-icons" onClick={onSwitch}>
      {icon ? iconNames[0] : iconNames[1]}
    </button>
  )
}

IconSwitch.propTypes = {
  icon: PropTypes.bool.isRequired,
}

export default IconSwitch
