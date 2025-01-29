import React, { useState, useEffect, useRef } from "react";
import "./TodoItem.css";

const TodoItem = ({
  todo,
  toggleTodo,
  deleteTodo,
  editTodo,
  editingId,
  setEditingId,
}) => {
  const [editText, setEditText] = useState(todo.text);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editingId === todo.id) {
      inputRef.current?.focus();
    }
  }, [editingId, todo.id]);

  const handleEdit = () => {
    if (editingId === todo.id) {
      editTodo(todo.id, editText);
    } else {
      setEditingId(todo.id);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      editTodo(todo.id, editText);
    }
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        disabled={editingId === todo.id}
      />
      {editingId === todo.id ? (
        <input
          ref={inputRef}
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="edit-input"
          onKeyDown={handleKeyDown}
        />
      ) : (
        <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
      )}
      <button onClick={handleEdit} className="edit-button">
        {editingId === todo.id ? "Save" : "Edit"}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
