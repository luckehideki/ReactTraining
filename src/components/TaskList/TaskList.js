import "./tasklist.css";
import PropTypes from "prop-types";
import { useState } from "react";

export default function TaskList({ title }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {count}
        <button onClick={increment}>incrementar</button>
      </div>
    </div>
  );
}

TaskList.PropTypes = {
  title: PropTypes.string.isRequired
};
