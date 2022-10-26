import React from 'react'

function Profil() {
  return (
     
      <div class="container p-4 mt-4">
        <div class="row justify-content-evenly mt-4">
           
           <div class="col-lg-6 col-md-12 mt-4">
               <div class="d-flex">
                <i class="fa-solid fa-user fs-1 mx-2"></i> <h2>Profile</h2>
               </div>
               <div class="p-6 shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundColor:" white"}}>
                   <form>
                       <div class=" mb-3">
                           <label  class="form-label">Telephone</label>
                           <div class="input-group">
                             <input type="text" class="form-control" name="tel"/>
                           </div>
                         </div>
                       <div class=" mb-3">
                         <label  class="form-label">City</label>
                         <div class="input-group">
                           <input type="text" class="form-control" name="city"/>
                         </div>
                       </div>
                       <div class=" mb-3">
                           <label  class="form-label">Country</label>
                           <div class="input-group">
                             <input type="text" class="form-control" name="country"/>
                           </div>
                         </div>
                         <div class=" mb-3">
                            <label  class="form-label">Bio</label>
                            <div class="input-group">
                              <input type="text" class="form-control" name="bio"/>
                            </div>
                          </div>
                          <div class=" mb-3">
                            <label  class="form-label">Address</label>
                            <div class="input-group">
                              <textarea type="text" class="form-control" name="address"></textarea>
                            </div>
                          </div>
                       <div class="d-flex justify-content-between">
                           <button type="submit" class="btn btn-outline-primary">Update <i class="fa-solid fa-floppy-disk"></i></button>
                       </div>
                     </form>
            </div>
           </div>
       </div>
   </div>
   
  )
}

export default Profil