import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import styles from './TodoForm.module.css';
import { PlusOutlined, CheckOutlined } from '@ant-design/icons';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.text : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!input) {
      alert('enter todo!');
      return;
    }
    props.submitTodo(input);
    setInput('');
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={styles.formControl}>
        <input
          type="text"
          value={input}
          onChange={changeHandler}
          placeholder={props.edit ? 'Update todo ...' : 'Add todo ...'}
          ref={inputRef}
        />
        <button type="submit">
          {props.edit ? (
            <CheckOutlined style={{ fontSize: '14px', color: '#C6267B' }} />
          ) : (
            <PlusOutlined style={{ fontSize: '17px', color: '#C6267B' }} />
          )}
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
