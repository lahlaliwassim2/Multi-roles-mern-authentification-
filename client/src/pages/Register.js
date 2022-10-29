import React from 'react'
import Inputs from '../components/Inputs'
function Register() {
  return (
   
    <div className="container p-4 mt-4">
         <div className="row justify-content-evenly mt-4">
            
            <div className="col-lg-6 col-md-12 mt-4">
                <div className="d-flex">
                    <i className="fa-solid fa-right-to-bracket fs-1 mx-2"></i> <h2>Register</h2>
                </div>
                <div className="p-6 shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundColor: "white"}}>
                  
                    <form>

                       <Inputs name="name" type="name" label="Name" icon="fa-solid fa-user"  />

                       <Inputs name="email " type="email" label="Email" icon=" fa-solid fa-at "  />

                       <Inputs name="password " type="password" label="Password" icon=" fa-solid fa-key "  />

                       <Inputs name="confirmPassword " type="cpnfirmPassword" label="Confirm Password" icon=" fa-solid fa-key "  />

                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-outline-primary">Save <i className="fa-solid fa-floppy-disk"></i></button>
                            <a href="/login">I have account</a>
                        </div>

                      </form>
             </div>
            </div>
        </div>
    </div>
   
  )
}

export default Register