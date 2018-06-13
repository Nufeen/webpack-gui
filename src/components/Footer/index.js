import React from 'react'
import './index.css'

import gh from '../../assets/gh.svg'
import tg from '../../assets/tg.svg'

const Footer = () => (
  <footer className="footer">
    <a target="_blank" href="https://github.com/Nufeen/webpack-gui">
      <div dangerouslySetInnerHTML={{ __html: gh }} />
    </a>
    <a target="_blank" href="https://telegram.me/Lyrical_Tokarev">
      <div dangerouslySetInnerHTML={{ __html: tg }} />
    </a>
  </footer>
)

export default Footer
