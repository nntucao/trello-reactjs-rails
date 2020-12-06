import './App.css';
import Board from './Board'; 
import { connect } from 'react-redux'; 
import { Component } from 'react';

class App extends Component {
  render() {
    const { boards } = this.props;  
    return (
      <div className="App">
        Board Name
      { boards.map(board => <Board name={board.name} task_lists={board.task_lists} /> )}
      </div>
      
    );
  }
}

const mapStateToProps = state => ({
  boards: state.task_boards
})

export default connect(mapStateToProps)(App);
