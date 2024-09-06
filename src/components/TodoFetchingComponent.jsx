import { useQuery } from '@tanstack/react-query';
import React from 'react';


const fetchTodo = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(
    (response) => response.json()
  )
}


const TodoFetchingComponent = () => {

  const { data, error, isLoading} = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodo
  });

  if(isLoading) return <div className='spinner'></div>;

  if(error) return <div>An error occurred: {error.message}</div>

  return (
    <div>
      <h3>Todo: {data.title}</h3>
      <p>Status: {data.completed ? "Completed" : "Not completed"}</p>
    </div>
  );
};

export default TodoFetchingComponent;