import { screen, render } from '@testing-library/react';
import ProductDescription from './ProductDescription';

const props = {
  description: 'Product Description',
};

describe('ProductDescription', () => {
  it('should render correctly', () => {
    render(<ProductDescription {...props} />);
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });
});
