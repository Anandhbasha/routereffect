import React, { useContext } from 'react'
import { valuePassing } from '../../App'

const Card = ({productName,productPrice,productDesrc,image}) => {
    const {count,setCount} = useContext(valuePassing)
    const handleClick = ()=>{
        setCount(count+1)
    }
  return (
    <div className='Cards'>
        <div className="card" style={{width:"18rem"}}>
            <img className="card-img-top" src={image} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">{productName}</h5>
                <h5 className="card-title">{productPrice}</h5>
                <p className="card-text">{productDesrc}</p>
                <button className='btn-primary' onClick={handleClick}>Add to cart</button>
                <p>{count}</p>
            </div>
        </div>
    </div>
  )
}

export default Card