import { screen, render } from '@testing-library/react';

import ProductTitle from './ProductTitle';

const props = {
  title: 'Product Title',
  power: 'Product Power',
  packet: 10,
};

describe('ProductTitle', () => {
  it('should render correctly', () => {
    render(<ProductTitle {...props} />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(
      screen.getByText(`${props.power} // Packet of ${props.packet}`)
    ).toBeInTheDocument();
  });
});
