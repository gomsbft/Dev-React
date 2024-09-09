import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { PacmanLoader } from 'react-spinners';

const fetchTodo = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos")
  .then(
    (response) => response.json()
  )
}



const TodoTitieComponent = () => {

  const {data, error, isLoading} = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodo
  })

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
    <div>
      <h3>이번주 할 일 리스트</h3>
      <ul>
        { data.map((todo) => (<li key={todo.id}><input type='checkbox' />{todo.title}</li>))}
      </ul>
    </div>
  );
};

export default TodoTitieComponent;