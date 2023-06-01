/* eslint-disable no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';

/**
 * Manages the Todos by reading from and writing to the backend API.
 *
 * @returns {Object} with the following properties:
 *   isLoading: a boolean indicating if the data has not yet loaded;
 *   error: any error that occurred
 *   todos: a list of To Do items;
 *   addTodo: a function (newTodo) that will add a new To Do;
 *   toggleCompleted: a function (todoId) that will toggle the completion of an existing To Do.
 */
export function useTodos() {
  const [todos, setTodos] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    async function loadTodos() {
      try {
        const todosList = await readTodos();
        setTodos(todosList);
      } catch (error) {
        setError(error);
      }
    }
    if (!todos) loadTodos();
  }, [todos]);

  async function addTodo(newTodo) {
    try {
      const todoItem = await createTodo(newTodo);
      setTodos([...todos, todoItem]);
    } catch (error) {
      setError(error);
    }
  }

  async function toggleCompleted(todoId) {
    try {
      const finishedTodo = todos.find((todo) => todo.todoId === todoId);
      finishedTodo.isCompleted = !finishedTodo.isCompleted;
      const updatedTodoItem = await updateTodo(finishedTodo);
      const newTodoList = todos.map((todo) =>
        updatedTodoItem.todoId === todo.todoId ? updatedTodoItem : todo
      );
      setTodos(newTodoList);
    } catch (error) {
      setError(error);
    }
  }

  return {
    isLoading: todos === undefined && error === undefined,
    error,
    todos,
    addTodo,
    toggleCompleted,
  };
}

/**
 * Reads all To Do items from the API.
 * @returns Promise that resolves with the read items.
 */
async function readTodos() {
  const res = await fetch('/api/todos');
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Creates a new To Do item using the API.
 * @param todo The To Do to create.
 * @returns Promise that resolves with the new item returned from the API.
 */
async function createTodo(todo) {
  const req = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  };
  const res = await fetch('/api/todos', req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Updates a To Do item using the API by setting its `isCompleted` state.
 * @param todo The To Do to update.
 * @returns Promise that resolves with the updated To Do item.
 */
async function updateTodo(todo) {
  const req = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ isCompleted: todo.isCompleted }),
  };
  const res = await fetch(`/api/todos/${todo.todoId}`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
