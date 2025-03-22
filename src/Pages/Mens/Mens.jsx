import React, { useContext } from 'react'
import Card from '../../Components/Cards/Card'
import { valuePassing } from '../../App'

const Mens = () => {
  const {all}  = useContext(valuePassing)
  const mensProducts = all.filter((item)=>(item.prodCat==="Mens"))
  console.log(mensProducts);
  
  return (
    <div className='Mens'>
      {mensProducts.map((item)=>(
        <Card {...item}></Card>
      ))}
      
    </div>
  )
}

export default Mens