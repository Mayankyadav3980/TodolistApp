import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app-container">
      
        <Navbar/>
      <div className="main-container">
        <TodoForm/>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
