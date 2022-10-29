import React from 'react'

function inputs({name,type,label,icon,onChangeHandler}) {
  return (
    <div className=" mb-3">
    <label  className="form-label">{label}</label>
    <div className="input-group">
      <span className="input-group-text" ><i className={icon}></i></span>
      <input type={type} name={name} className="form-control" onChange={onChangeHandler}/>
    </div>
</div>
  )
}

export default inputs