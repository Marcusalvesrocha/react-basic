import userEvent from '@testing-library/user-event';
import { Button } from '.';
const { render, screen } = require('@testing-library/react');

describe('<Button />', () => {
  it('should render the button with text "Load More"', () => {
    const fn = jest.fn();
    render(<Button text="Load More" onClick={fn} />);
    expect.assertions(1);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load More" onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });
    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load More" disabled={true} onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="Load More" disabled={false} onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).not.toBeDisabled();
  });
});
