import { screen, render } from '@testing-library/react';
import MainFooter from './MainFooter';

describe('MainFooter', () => {
  it('should render correctly', () => {
    render(<MainFooter />);
    expect(screen.getByTestId('footer-text')).toBeInTheDocument();
  });
});
