import React from 'react'
import className from 'classnames'

function inputs({name,type,label,icon,onChangeHandler,errors}) {
  return (
    <div className=" mb-3">
    <label  className="form-label">{label}</label>
    <div className="input-group">
      <span className="input-group-text" ><i className={icon}></i></span>
      <input type={type} name={name} className={className("form-control",{"is-invalid":errors})} onChange={onChangeHandler}/>
    </div>
    {
      errors && (<div class="alert alert-danger" role="alert">
      {errors}
</div>)
    }
</div>
  )
}

export default inputs