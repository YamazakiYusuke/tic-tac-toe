import Game from '../components/Game';

export default {
  title: 'Game',
  component: Game
}

const Template = args => <Game {...args} />

export const Default = Template.bind()