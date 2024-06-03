import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainNav from './MainNav';

describe('MainNav', () => {
  it('renders the main nav', () => {
    render(<MainNav />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders the logo', () => {
    render(<MainNav />);
    expect(screen.getByAltText('Octopus')).toBeInTheDocument();
  });

  it('renders the basket', () => {
    render(<MainNav />);
    expect(screen.getByAltText('basket')).toBeInTheDocument();
  });
});
