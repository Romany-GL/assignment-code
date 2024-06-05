import { screen, render } from '@testing-library/react';
import QuantitySelector, { QuantitySelectorProps } from './QuantitySelector';

const props: QuantitySelectorProps = {
  price: 1299,
  quantity: 2,
  handleDecreaseQuantity: jest.fn(),
  handleIncreaseQuantity: jest.fn(),
  isDecreaseDisabled: false,
};

describe('QuantitySelector', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    render(<QuantitySelector {...props} />);
    expect(screen.getByText('Qty')).toBeInTheDocument();
    expect(screen.getByText('£12.99')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
  });

  it("should call the increase function when the '+' button is clicked", () => {
    render(<QuantitySelector {...props} />);
    const increaseButton = screen.getByRole('button', { name: '+' });
    increaseButton.click();
    expect(props.handleIncreaseQuantity).toHaveBeenCalled();
  });

  it("should call the decrease function when the '-' button is clicked", () => {
    render(<QuantitySelector {...props} />);
    const decreaseButton = screen.getByRole('button', { name: '-' });
    decreaseButton.click();
    expect(props.handleDecreaseQuantity).toHaveBeenCalled();
  });
});
