import React from 'react';
import styles from './NavBar.module.css';

export default function NavBar({ unCompletedTodo, status, onSelect }) {
  return (
    <div className={styles.container}>
      <div>
        {unCompletedTodo ? (
          <div>
            <h2>{unCompletedTodo} | task pendding!</h2>
          </div>
        ) : (
          <div>
            <h2>Tasks</h2>
          </div>
        )}
      </div>

      <div className={styles.select}>
        <select onChange={onSelect} value={status}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="unCompleted">unCompleted</option>
        </select>
      </div>
    </div>
  );
}
