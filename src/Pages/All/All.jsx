import React, { useContext } from 'react'
import Card from '../../Components/Cards/Card'
import { valuePassing } from '../../App'


const All = () => {
  const {all}  = useContext(valuePassing)
  console.log(all);
  
  return (
    <div className='All'>
      {all.map((item)=>(
        <Card {...item}/>
      ))}
      
    </div>
  )
}

export default All