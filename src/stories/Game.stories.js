import Game from '../components/Game';

export default {
  title: 'Game',
  component: Game
}

const Template = args => <Game {...args} />

export const Empty = Template.bind({})
Empty.args = {
  history: [],
  xIsNext: true,
  currentSquares: Array(9).fill(null),
  handlePlay: () => null,
  jumpTo: () => null,
}

export const XWin = Template.bind({})
XWin.args = {
  history: [
    [
      'X', null, null, 
      null, null, null, 
      null, null, null, 
    ],
    [
      'X', null, 'O', 
      null, null, null, 
      null, null, null, 
    ],
    [
      'X', null, 'O', 
      'X', null, null, 
      null, null, null, 
    ],
    [
      'X', null, 'O', 
      'X', null, 'O', 
      null, null, null, 
    ],
    [
      'X', null, 'O', 
      'X', null, 'O', 
      'X', null, null, 
    ],
  ],
  xIsNext: true,
  currentSquares: [
    'X', null, 'O', 
    'X', null, 'O', 
    'X', null, null, 
  ],
  handlePlay: () => null,
  jumpTo: () => null,
}

export const OWin = Template.bind({})
OWin.args = {
  history: [
    [
      'X', null, null, 
      null, null, null, 
      null, null, null, 
    ],
    [
      'X', null, 'O', 
      null, null, null, 
      null, null, null, 
    ],
    [
      'X', null, 'O', 
      'X', null, null, 
      null, null, null, 
    ],
    [
      'X', null, 'O', 
      'X', null, 'O', 
      null, null, null, 
    ],
    [
      'X', 'X', 'O', 
      'X', null, 'O', 
      null, null, null, 
    ],
    [
      'X', 'X', 'O', 
      'X', null, 'O', 
      null, null, 'O', 
    ],
  ],
  xIsNext: true,
  currentSquares: [
    'X', 'X', 'O', 
    'X', null, 'O', 
    null, null, 'O', 
  ],
  handlePlay: () => null,
  jumpTo: () => null,
}

export const Draw = Template.bind({})
Draw.args = {
  history: [
    [
      'X', null, null, 
      null, null, null, 
      null, null, null
    ],
  
    [
      'X', 'O', null, 
      null, null, null, 
      null, null, null
    ],
  
    [
      'X', 'O', null, 
      'X', null, null, 
      null, null, null
    ],
  
    [
      'X', 'O', null, 
      'X', 'O', null, 
      null, null, null
    ],
  
    [
      'X', 'O', 'X', 
      'X', 'O', null, 
      null, null, null
    ],
  
    [
      'X', 'O', 'X', 
      'X', 'O', null, 
      'O', null, null
    ],
  
    [
      'X', 'O', 'X', 
      'X', 'O', null, 
      'O', 'X', null
    ],
  
    [
      'X', 'O', 'X', 
      'X', 'O', 'O', 
      'O', 'X', null
    ],
  
    [
      'X', 'O', 'X', 
      'X', 'O', 'O', 
      'O', 'X', 'X'
    ],
  ],
  xIsNext: true,
  currentSquares: [
    'X', 'O', 'X', 
    'X', 'O', 'O', 
    'O', 'X', 'X'
  ],
  handlePlay: () => null,
  jumpTo: () => null,
}