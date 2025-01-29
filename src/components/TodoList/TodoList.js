import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = ({
  todos,
  toggleTodo,
  deleteTodo,
  editTodo,
  editingId,
  setEditingId,
}) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          editingId={editingId}
          setEditingId={setEditingId}
        />
      ))}
    </div>
  );
};

export default TodoList;
