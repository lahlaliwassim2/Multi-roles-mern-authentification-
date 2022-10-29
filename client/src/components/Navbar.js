import React from 'react'

function Navbar({user}) {
  return (
<div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="d-flex justify-content-around">  
             <button className="btn btn-outline-success m-2" type="submit">Search</button> 
            <button className="btn btn-outline-success m-2" type="submit">Search</button>
            <button className="btn btn-outline-success m-2" type="submit">Search</button>
            {
              user.role ==="ADMIN" ? (<button className="btn btn-outline-success m-2" type="submit">ADMIN</button>):""
            }
            
    </div>
</nav>
</div>
  )
}

export default Navbar