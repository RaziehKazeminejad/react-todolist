import React from 'react';
import styles from './Todo.module.css';
import {
  DeleteFilled,
  EditFilled,
  CheckCircleOutlined,
  CheckCircleFilled,
} from '@ant-design/icons';

export default function Todo({ todo, onComplete, onDelete, onEdit }) {
  return (
    <div className={styles.todo}>
      <div className={styles.completebtn}>
        <button onClick={onComplete} className={styles.btn}>
          {todo.isCompleted ? (
            <CheckCircleFilled style={{ fontSize: '17px', color: '#620093' }} />
          ) : (
            <CheckCircleOutlined style={{ fontSize: '17px', color: '#620093' }} />
          )}
        </button>
        <div
          onClick={onComplete}
          className={`${styles.todoText} ${
            todo.isCompleted ? styles.completed : ''
          }`}
        >
          {todo.text}
        </div>
      </div>
      <div>
        <button onClick={onEdit} className={styles.btn}>
          <EditFilled style={{ fontSize: '20px', color: '#F76301' }} />
        </button>
        <button onClick={onDelete} className={styles.btn}>
          <DeleteFilled style={{ fontSize: '20px', color: '#C6267B' }} />
        </button>
      </div>
    </div>
  );
}
