import '../App.css';

function Square({value, onSquareClick, index}) {
  return (<button className="square" data-e2e={`square-${index}`} onClick={onSquareClick}>{value}</button>);
}

export default Square;