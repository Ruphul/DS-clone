import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import logo from '../assets/logo.png'
function header() {
  return (
    <>
    <section className='bg-secondary-subtle py-2'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <i class="bi bi-telephone-fill"></i>
                9801433555
                </div>
            </div>
        </div>
    </section>
    <section className='py-4'>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-3">
        <img src={logo} alt="" />
      </div>
      <div className="col-lg-6">
        <form className="d-flex" role="search">
          <input className="form-control me-2 p-3" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-primary mm" type="submit"><i class="bi bi-search"></i></button>
        </form>
      </div>
      <div className="col-lg-3">
        <div className="d-flex gap-3 justify-content-end ">
      <button type="button" className="btn btn-primary position-relative rounded-circle">
      <i class="bi bi-cart-fill"></i>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
      <button type="button" className="btn btn-primary position-relative rounded-circle">
      <i class="bi bi-cart-fill"></i>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
      <button type="button" className="btn btn-primary position-relative rounded-circle">
      <i class="bi bi-cart-fill"></i>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
</div>
      </div>
    </div>
  </div>
</section>

<nav className="navbar navbar-expand-lg main">
  <div className="container">
    <div className='catlist p-1'>
        <p><i class="bi bi-list"></i></p>
        <p>Categories</p>
        <p><i class="bi bi-caret-down-fill"></i></p>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>


      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default header
