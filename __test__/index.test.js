import MyComponent from '../pages/index.js'
import {mount,equal} from 'enzyme'

const sum = require('../lib/sum');
const wrapper = mount(<MyComponent />);

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('equals', () => {
  expect(wrapper.contains(<h6 id="foo" >a</h6>)).toEqual(true);
})
