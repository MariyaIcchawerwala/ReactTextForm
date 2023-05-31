import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.aboutText}</a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
            <div className={`form-check form-switch text-${props.classcolor}`}>
              <input style={{cursor:'pointer'}} className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Darkmode</label>
            </div>
          </div>
        </div>
    </nav>
</>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,  //prop type should be string or it will throw error and it is neseccary to pass title as we have used isRequired  if default is set then no error will be shown
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Set title here', //if nothing is passed then these values will be used
  aboutText: 'about text here'
}


