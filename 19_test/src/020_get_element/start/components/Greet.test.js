import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('h1が存在するかどうか', () => {
  const { debug } = render(<Greet />);
  const h1El = screen.getByText('こんにちは');
  expect(h1El).toBeInTheDocument();

  const radioEl = screen.getByRole('radio');
  expect(radioEl).toBeInTheDocument();

  const imgEl = screen.getByRole('img');
  expect(imgEl).toBeInTheDocument();

  const headingEl = screen.getByRole('heading');
  expect(headingEl).toBeInTheDocument();
  debug(headingEl);
});
