import React, { useEffect } from 'react';
import { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import styles from './TodoApp.module.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');
  const [filteredTodos, setFileredTodos] = useState([]);

  useEffect(() => {
    filterTodos(status);
  }, [todos, status]);

  const addTodoHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  const filterTodos = (status) => {
    switch (status) {
      case 'Completed':
        setFileredTodos(todos.filter((todo) => todo.isCompleted));
        break;
      case 'unCompleted':
        setFileredTodos(todos.filter((todo) => !todo.isCompleted));
        break;
      default:
        setFileredTodos(todos);
    }
  };
  const selectHandler = (e) => {
    setStatus(e.target.value);
    filterTodos(e.value);
  };
  return (
    <div className={styles.container}>
      <TodoForm submitTodo={addTodoHandler} />
      <NavBar
        unCompletedTodo={todos.filter((todo) => !todo.isCompleted).length}
        status={status}
        onSelect={selectHandler}
      />
      <TodoList
        todos={filteredTodos}
        onComplete={completeTodo}
        onDelete={deleteTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoApp;
