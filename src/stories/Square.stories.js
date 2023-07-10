import Square from '../components/Square';
import PropTypes from 'prop-types';

export default {
  title: 'Square',
  component: Square
}

const Template = args => <Square {...args} />

export const Empty = Template.bind()
Empty.args = {
  value: ''
}

export const SelectedByCircle = Template.bind()
SelectedByCircle.args = {
  value: 'O'
}

export const SelectedByCross = Template.bind()
SelectedByCross.args = {
  value: 'X'
}

export const SelectedByTriangle = Template.bind()
SelectedByTriangle.args = {
  value: '△'
}

Template.prototype = {
  value: PropTypes.oneOf(['', 'O', 'X', '△'])
}