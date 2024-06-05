import { screen, render } from '@testing-library/react';
import AddToCartBtn from './AddToCartBtn';

const props = {
  handleAddToCart: jest.fn(),
};

describe('AddToCartBtn', () => {
  it('should render correctly', () => {
    render(<AddToCartBtn {...props} />);
    expect(
      screen.getByRole('button', { name: 'Add to cart' })
    ).toBeInTheDocument();
  });

  it('should call the addToCart function when the button is clicked', () => {
    render(<AddToCartBtn {...props} />);
    const addToCartButton = screen.getByRole('button', { name: 'Add to cart' });
    addToCartButton.click();
    expect(props.handleAddToCart).toHaveBeenCalled();
  });
});
