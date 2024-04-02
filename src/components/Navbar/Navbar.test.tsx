import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import user from '@testing-library/user-event';

describe('Navbar', () => {
  const mockFn = jest.fn();

  test('Company Name is present', () => {
    render(<Navbar setNavbarMode={mockFn} companyName={'Company Name'} />);

    const companyName = screen.getByText('Company Name');
    expect(companyName).toBeInTheDocument();
  });

  test('handleNavbarToggleClick', async () => {
    user.setup();
    render(<Navbar setNavbarMode={mockFn} />);
    const toggleIcon = screen.getByTestId('navbar-icon');

    expect(toggleIcon).toBeInTheDocument();
    await user.click(toggleIcon);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
