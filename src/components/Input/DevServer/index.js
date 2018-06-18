import React from 'react'
import './index.css'
import Info from '../Info'

export default class DevServer extends React.Component {
  render() {
    const { d } = this.props
    const bools = Object.keys(d).filter(x => typeof d[x] === 'boolean')

    return (
      <nav className="panel input__devServer">
        <p className="panel-heading">
          dev-server
          <Info link="https://webpack.js.org/configuration/dev-server/" />
        </p>
        {bools.map(option => (
          <label className="panel-block" key={option}>
            <input
              type="checkbox"
              readOnly
              checked={d[option]}
              onClick={() => this.props.toggleOption(option)}
            />
            {option}
          </label>
        ))}
      </nav>
    )
  }
}
