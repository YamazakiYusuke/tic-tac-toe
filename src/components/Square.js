import '../App.css';
import PropTypes from 'prop-types';

function Square({value, onSquareClick}) {
  return (<button className="square" onClick={onSquareClick}>{value}</button>);
}

export default Square;