import React from 'react'
import Inputs from '../components/Inputs'

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
                   <Inputs name="tel " type="text" label="Tel"  />

                   <Inputs name="city" type="text" label="city" />

                   <Inputs name="country" type="text" label="country" />

                   <Inputs name="address" type="text" label="address" />

                     
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