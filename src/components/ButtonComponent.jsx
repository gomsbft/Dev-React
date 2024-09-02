import React from 'react';
import styled from 'styled-components';

const ButtonComponent = () => {
  
  const Wrap = styled.div`
  padding: 1rem;
    margin: 0 auto;
    background-color: black;
    width: 1024px;

    @media (max-width: 768px) {
      width: 100%;
    }
  `

  const ButtonOne = styled.button`
    background-color: ${(props) => (props.main ? "blue" : "white")};
    color: ${(props) => (props.main ? "white" : "black")};
    border-color: ${(props) => (props.main ? "yellow" : "black")};
    margin: 1em;
  `;



  return (
    <div>
      <Wrap>
        <ButtonOne>버튼1</ButtonOne>
        <ButtonOne main>버튼2</ButtonOne>
      </Wrap>
    </div>
  );
};

export default ButtonComponent;