import { render } from '@testing-library/react'
import App from './App'

test('renders app', () => {
  render(<App />)
  const app = document.querySelector('.App')
  expect(app).toBeTruthy()
})
