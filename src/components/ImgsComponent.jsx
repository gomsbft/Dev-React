import React, { useState } from 'react';

import image from "./images/logo512.png"

const ImgsComponent = () => {

  const selectList = ["apple", "banana", "lemon"];

  const [img, setImg] = useState("/images/banana.png")

  function changeImg(e) {
    setImg(e.target.value)
  }



  return (
    // <div>
    //   {/* src 폴더 내부 이미지 */}
    //   <img src= {image} width= "150px" alt= "이미지" />

    //   <hr />
    //   {/* src 폴더 내부 이미지 */}
    //   <img src= {require("./images/logo512.png")} width= "150px" alt='이미지'/>

    //   <hr />
    //   {/* public 폴더 이미지 */}
    //   <img src='/images/logo512.png' width= "150px" alt='이미지' />

    //   <hr />
    //   {/* 외부 이미지 */}
    //   <img src='https://www.google.com/logos/doodles/2024/paris-games-basketball-6753651837110534-la202124.gif' width= "250px" alt='이미지' />
    // </div>
    <div>
      <h1>선택한 과일: {img}</h1>
      <select value={img} onChange={changeImg}>
        {
          selectList.map((item) => (<option value={`/images/${item}.png`}>{item}</option>))
        }
      </select>
      <img src={img} width= "150px" alt='과일 사진' />
    </div>
  );
};

export default ImgsComponent;