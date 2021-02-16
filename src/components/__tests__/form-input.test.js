import React from 'react'
import renderer from 'react-test-renderer'

import { FormInput } from './../form-input'

it('Form input renders correctly', () => {
  const tree = renderer
    .create(<FormInput inputLabel="String 1" inputType="str1" inputId="str1" handleInputChange={() => {}} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
