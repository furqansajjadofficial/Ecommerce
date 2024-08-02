import React from 'react'
import { forwardRef , useId } from 'react'


const Input = ({
    label,
    labelclassName,
    type = 'text',
    className = '',
    ...props
},ref) => {

    const id = useId()
  return (
    <div className='w-full'>
        <label className={labelclassName} htmlFor={id} >{label}</label>
        <input 
        id={id}
        type={type}  
        className={`${className}`} 
        {...props}
        ref={ref} />
    </div> 
  )
}

export default forwardRef(Input)
