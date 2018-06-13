import React from 'react'
// import autobind from 'react-autobind'
import Info from '../Info'

import './index.css'

export default class SourceMaps extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render() {
    const { d } = this.props
    // console.log(d)
    return (
      <nav className="panel">
        <p className="panel-heading">
          source maps
          <Info link="https://webpack.js.org/configuration/devtool/" />
        </p>
        <div className="panel-block">
          <div className="dropdown is-hoverable">
            <div className="dropdown-trigger">
              <button
                className="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu4"
              >
                <span>{d.__option != null ? d.__option : 'none'}</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true" />
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu4" role="menu">
              <div className="dropdown-content">
                <div className="dropdown-item">
                  {d.map(option => (
                    <a
                      key={option}
                      className="dropdown-item"
                      onClick={() => this.props.setSourceMap(option)}
                    >
                      {option}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
