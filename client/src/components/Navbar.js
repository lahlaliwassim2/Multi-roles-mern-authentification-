import React from 'react'

function Navbar() {
  return (
 <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <link class="navbar-brand" to="#">MERN Profile</link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <link class="nav-link active" to="#">Profile</link>
              </li>
            </ul>
            <div class="d-flex">
                <div class="mx-4">
                  <link class="btn btn-outline-primary" to="/template/register.html">Register</link>
                  <link class="btn btn-outline-primary" to="/template/login.html">Login</link>
                </div>
              </div>
          </div>
        </div>
      </nav>
      </div>
  )
}

export default Navbar