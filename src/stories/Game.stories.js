import Game from '../components/Game';
import PropTypes from 'prop-types';

export default {
  title: 'Game',
  component: Game
}

const Template = args => <Game {...args} />

export const Empty = Template.bind()
Empty.args = {
  value: ''
}
