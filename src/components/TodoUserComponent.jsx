import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { PacmanLoader } from 'react-spinners';

const fetchTodo = () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
  .then(
    (response) => response.json()
  )
}

const TodoUserComponent = () => {

  const {data, error, isLoading} = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodo
  })

  if(isLoading) {
    return(
      <div className='spinner-container'>
        <PacmanLoader color='red' size={30} />
      {/* <div className='spinner'></div>; */}
      </div>
    )
  }

  if(error) return <div>An error occurred: {error.message}</div>

  return (
    <div>
      <h1>사용자 정보</h1>
      <ul>
        { data.map((user) => (<li key={user.id}>name: {user.name} <br /> email: {user.email} <br /> phone: {user.phone} <hr /></li>))}
      </ul>
    </div>
  );
};

export default TodoUserComponent;