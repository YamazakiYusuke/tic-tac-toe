import Board from '../components/Board';

export default {
  title: 'Board',
  component: Board
}

const Template = args => <Board {...args} />

export const Empty = Template.bind({})
Empty.args = {
  xIsNext: true,
  squares: Array(9).fill(null),
  onplay: () => null
}

export const AllRound = Template.bind({})
AllRound.args = {
  xIsNext: true,
  squares: Array(9).fill('O'),
  onplay: () => null
}

export const AllCross = Template.bind({})
AllCross.args = {
  xIsNext: true,
  squares: Array(9).fill('X'),
  onplay: () => null
}

export const AllTriangle = Template.bind({})
AllTriangle.args = {
  xIsNext: true,
  squares: Array(9).fill('△'),
  onplay: () => null
}

export const RoundAndCross = Template.bind({})
RoundAndCross.args = {
  xIsNext: true,
  squares: ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'O',],
  onplay: () => null
}

export const RoundAndTriangle = Template.bind({})
RoundAndTriangle.args = {
  xIsNext: true,
  squares: ['△', 'O', '△', '△', 'O', 'O', 'O', '△', 'O',],
  onplay: () => null
}

export const CrossAndTriangle = Template.bind({})
CrossAndTriangle.args = {
  xIsNext: true,
  squares: ['X', '△', 'X', 'X', '△', '△', '△', 'X', '△',],
  onplay: () => null
}

export const RoundAndCrossAndTriangle = Template.bind({})
RoundAndCrossAndTriangle.args = {
  xIsNext: true,
  squares: ['X', 'O', 'O', '△', 'O', '△', 'X', 'X', '△',],
  onplay: () => null
}