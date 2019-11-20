
import * as React from 'react'
import {mount} from 'enzyme'
import {Project} from '../pages/index'

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function () {
      const wrap = mount(<Project/>)
      expect(wrap.find('h1').text()).toBe('unit testing')
    })
  })
})