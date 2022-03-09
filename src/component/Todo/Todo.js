import React from 'react';
import styles from './Todo.module.css';
export default function Todo({ todo, onComplete, onDelete, onEdit }) {
  return (
    <div className={styles.todo}>
      <div
        onClick={onComplete}
        className={`${styles.todoText} ${todo.isCompleted ? styles.completed : ''}`}
      >
        {todo.text}
      </div>
      <div>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete} className={styles.delete}>
          Delete
        </button>
      </div>
    </div>
  );
}
