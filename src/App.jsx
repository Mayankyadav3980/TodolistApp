import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <Navbar />
        <div className="main-container">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
