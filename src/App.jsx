import "./App.css";

function App() {
  return (
    <div className="app-container">
      <nav></nav>
      <div className="main-container">
        <TodoForm/>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
