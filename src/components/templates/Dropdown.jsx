import React from 'react'

const Dropdown = ({title,options,func}) => {
  return (
    <div className='select'>
<select name="format" defaultValue="0" id="format" onChange={func} >
    <option value="0" disabled>
       {title}
    </option>
    {options.map((o,i)=>(
        <option   key={i} value={o}  > 
        
        {o.toUpperCase()}</option>
))}
</select>

    </div>
  )
}

export default Dropdown