import React from 'react';

const DefaultProps = (props) => {

  const {name, old, city, nameColor, oldColor, cityColor} = props

  return (
    <div>
      <p>안녕하세요. 제 이름은 <span style={{color: nameColor}}>{name}</span> 입니다</p>
      <p>저는 <span style={{color: oldColor}}>{old}</span>살 이고, <span style={{color: cityColor}}>{city}</span>에 살고 있습니다</p>
    </div>
  );
};

DefaultProps.defaultProps = {name: "한지원"}

export default DefaultProps;