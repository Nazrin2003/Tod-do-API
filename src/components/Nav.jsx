import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
         <nav className="navbar navbar-expand-lg bg-danger navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand fs-3 fw-bold" to="/">📝 To Do</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Add</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/view">View</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav