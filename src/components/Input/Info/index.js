import React from 'react'

import './index.css'

const Info = ({ link }) => (
  <a className="info" href={link}>
    <span className="icon has-text-info">
      <i className="fas fa-info-circle" />
    </span>
  </a>
)

export default Info
