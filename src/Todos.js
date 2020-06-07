import React from "react";

const Todos = ({ todos }) => {
  const toDoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span> {todo.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center"> You have no todo's left, horaa </p>
  );
  return <div className="todos collection">
      {toDoList}
  </div>;
};

export default Todos;
