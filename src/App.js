import './App.css';
import Game from './components/Game';
import { useState } from 'react';

export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  
  return (<>
    <Game history={history} xIsNext={xIsNext} currentSquares={currentSquares} handlePlay={handlePlay} jumpTo={jumpTo} />
  </>);
}
