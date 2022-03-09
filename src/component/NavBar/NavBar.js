import React from 'react';
import styles from './NavBar.module.css';

export default function NavBar({ unCompletedTodo, status, onSelect }) {
  return (
    <div>
      <div className={styles.select}>
        <select onChange={onSelect} value={status}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="unCompleted">unCompleted</option>
        </select>
      </div>
      <div className={styles.header}>
          {unCompletedTodo ? (
        <>
          <span>{unCompletedTodo}</span>
          <h2>task pendding!</h2>
        </>
      ) : (
        <>
          <h2>Set your today todos!</h2>
        </>
      )}
      </div>
      
    </div>
  );
}
