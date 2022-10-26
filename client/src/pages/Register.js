import React from 'react'

function Register() {
  return (
   
    <div class="container p-4 mt-4">
         <div class="row justify-content-evenly mt-4">
            
            <div class="col-lg-6 col-md-12 mt-4">
                <div class="d-flex">
                    <i class="fa-solid fa-right-to-bracket fs-1 mx-2"></i> <h2>Register</h2>
                </div>
                <div class="p-6 shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundColor: "white"}}>
                    <form>
                        <div class=" mb-3">
                            <label  class="form-label">Name</label>
                            <div class="input-group">
                              <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-user"></i></span>
                              <input type="password" class="form-control"/>
                            </div>
                          </div>
                        <div class=" mb-3">
                          <label  class="form-label">Email address</label>
                          <div class="input-group">
                            <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-at"></i></span>
                            <input type="text" class="form-control"/>
                          </div>
                         
                        </div>
                        <div class="mb-3">
                            <label  class="form-label">Password</label>
                            <div class="input-group">
                              <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-key"></i></span>
                              <input type="password" class="form-control"/>
                            </div>
                          </div>
                        <div class="d-flex justify-content-between">
                            <button type="submit" class="btn btn-outline-primary">Save <i class="fa-solid fa-floppy-disk"></i></button>
                            <a href="/template/login.html">I have account</a>
                        </div>
                      </form>
             </div>
            </div>
        </div>
    </div>
   
  )
}

export default Register