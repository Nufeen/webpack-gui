import React from 'react'
import './index.css'

import wp from '../../assets/webpack.svg'

const Header = () => (
  <React.Fragment>
    <header className="header">
      <span dangerouslySetInnerHTML={{ __html: wp }} />
      webpack (4.x.x) config generator
    </header>
  </React.Fragment>
)

export default Header
