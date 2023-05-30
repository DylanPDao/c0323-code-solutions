/* eslint-disable no-unused-vars -- Remove me */
import React, { useEffect, useState } from 'react';
import PageTitle from './PageTitle';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  /* Implement useEffect to fetch all todos. Hints are at the bottom of the file. */
  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await fetch('/api/todos');
        if (!res.ok) {
          throw new Error('Fetch Error: ', res.status);
        }
        const todos = await res.json();
        setTodos(todos);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getTodos();
  }, []);

  /* Implement addTodo to add a new todo. Hints are at the bottom of the file. */
  async function addTodo(newTodo) {
    try {
      const res = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      });
      if (!res.ok) {
        throw new Error('Fetch Error: ', res.status);
      }
      const todo = await res.json();
      setTodos([...todos, todo]);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  /* Implement toggleCompleted to toggle the completed state of a todo. Hints are at the bottom of the file. */
  async function toggleCompleted(todoId) {
    const completedTodos = todos.find((todo) => todo.todoId === todoId);

    try {
      const res = await fetch(`/api/todos/${todoId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isCompleted: !completedTodos.isCompleted }),
      });
      if (!res.ok) {
        throw new Error(res.status);
      }
      const todoRes = await res.json();
      const allTodos = todos.map((todo) =>
        todo.todoId === todoRes.todoId ? todoRes : todo
      );
      setTodos(allTodos);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <div>Error! {error.message}</div>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col pt-5">
          <PageTitle text="Todo App" />
          <TodoForm onSubmit={addTodo} />
          <TodoList todos={todos} toggleCompleted={toggleCompleted} />
        </div>
      </div>
    </div>
  );
}
