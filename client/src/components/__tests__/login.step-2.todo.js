import React from 'react'

import {render, fireEvent} from 'react-testing-library'
import Login from '../login'

test('calls onSubmit with the username and password when submitted', () => {
  const onSubmit = jest.fn()

  const {getByLabelText, getByText, container} = render(
    <Login onSubmit={onSubmit} />,
  )

  const username = getByLabelText('Username')
  const password = getByLabelText('Password')
  const submit = getByText('Submit')
  const form = container.querySelector('form')

  username.value = 'rafa'
  password.value = '123'

  submit.click(submit)
  fireEvent.submit(form)

  expect(onSubmit).toHaveBeenCalledTimes(2)
  expect(onSubmit).toHaveBeenCalledWith({
    username: 'rafa',
    password: '123',
  })
})
