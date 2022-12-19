import { Button } from ".";
const { render, screen } = require("@testing-library/react")


describe('<Button />', () => {

  it('should render the button with text "Load More"', () => {
    render(<Button text="Load More"/>)
    expect.assertions(1)
    const button = screen.getByRole('button', {name: /load more/i})
    expect(button).toBeInTheDocument();
  })


})
