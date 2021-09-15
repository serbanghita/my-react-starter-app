import {fireEvent, render, screen} from '@testing-library/react';
import HomePage from './HomePage';

test('some test', () => {
  render(<HomePage />);
  const usernameElement = screen.getByTestId("username");
  expect(usernameElement).toBeInTheDocument();
  expect(usernameElement.value).toBe("");

  const buttonElement = screen.getByTestId("button");
  expect(buttonElement).toBeInTheDocument();

  fireEvent.change(usernameElement, {target: {value: 'something'}});
  expect(usernameElement.value).toBe("something");

  // screen.debug(document.body);
});
