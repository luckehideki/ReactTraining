import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList title={"Título"} />
        <TaskList title="Faznedo" />
        <TaskList title="Completa" />
      </div>
    </div>
  );
}
