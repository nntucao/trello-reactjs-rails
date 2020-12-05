import './App.css';
import Board from './Board'; 
import TaskCard from './TaskCard'; 

function App() {
  return (
    <div style={styles.container}>
      <h1>Boards</h1>
      <Board />
      <TaskCard />
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#ccc", 
    borderRadius: 3, 
    width: 300
  }
}

export default App;
