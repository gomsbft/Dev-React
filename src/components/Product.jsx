import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';

const fetchItem = () => {
  return fetch("https://fakestoreapi.com/products")
  .then(
    (response) => response.json()
  )
}

const Product = () => {

  const {data, error, isLoading} = useQuery({
    queryKey: ["item"],
    queryFn: fetchItem
  })

  const [productId, setProductId] = useState("")
  const navigate = useNavigate();

  const clickHandler = (e) => {
    setProductId(e.target.value);
  }

  useEffect(() => {
    navigate(`/product/${productId}`);
  },[productId])

  if(isLoading) {
    return(
      <div className='spinner-container'>
        <PacmanLoader color='blue' size={30} />
      {/* <div className='spinner'></div>; */}
      </div>
    
    )
  }

  if(error) return <div>An error occurred: {error.message}</div>



  return (
    <div className='allWrap'>
       <ul className='itemUl'>
        { data.map((item) => (<li className='itemWrap' key={item.id}><img className='itemP' src={item.image} />{item.title}{item.price}{item.category}<button onClick={clickHandler} value={item.id}>상세정보</button></li>))}
      </ul>
    </div>
  );
};

export default Product;