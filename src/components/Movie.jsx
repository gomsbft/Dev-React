import React from 'react';
import HeaderComponent from './HeaderComponent';
import BodyComponent from './BodyComponent';
import FooterComponent from './FooterComponent';

const Movie = (props) => {

  const {director, img, title, day} = props;

  return (
    <div className='movieList'>
      <img src = {img} alt='영화 포스터' className='movieImg'></img>
      <h1>영화 제목: {title}</h1>
      <h2>감독: {director}</h2>
      <h3>개봉일: {day}</h3>
      
    </div>
  );
};

export default Movie;