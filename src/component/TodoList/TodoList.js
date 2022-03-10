import React, { useState } from 'react';
import Todo from '../Todo/Todo';
import TodoForm from '../TodoForm/TodoForm';
import styles from './TodoList.module.css';

function TodoList({ todos, onComplete, onDelete, onUpdateTodo }) {
  const [edit, setEdit] = useState({ id: null, text: '', isCompleted: false });

  const editTodoHandler = (newValue) => {
    onUpdateTodo(edit.id, newValue);
    setEdit({ id: null, text: '' });
  };

  return (
    <div>
      {edit.id ? (
        <div className={styles.container}>
          <TodoForm submitTodo={editTodoHandler} edit={edit} />
        </div>
      ) : (
        todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onComplete={() => onComplete(todo.id)}
              onDelete={() => onDelete(todo.id)}
              onEdit={() => setEdit(todo)}
            />
          );
        })
      )}
    </div>
  );
}

export default TodoList;
