import React from 'react'
import reactDom from 'react-dom'

import Login from '../login'

test('calls onSubmit with the username and password when submitted', () => {
  const onSubmit = jest.fn()

  const container = document.createElement('div')
  reactDom.render(<Login onSubmit={onSubmit} />, container)

  const username = container.querySelector('[name=username]')
  const password = container.querySelector('[name=password]')
  const form = container.querySelector('form')

  username.value = 'rafa'
  password.value = '123'

  form.dispatchEvent(new window.Event('submit'))

  expect(onSubmit).toHaveBeenCalledTimes(1)
  expect(onSubmit).toHaveBeenCalledWith({
    username: 'rafa',
    password: '123',
  })
})
