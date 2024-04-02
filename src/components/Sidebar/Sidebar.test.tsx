import user from '@testing-library/user-event';
import { render, screen } from '../../../test-utils';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  test('Logged in User Details is present', () => {
    render(<Sidebar navbarMode={0} userName={'User Name'} />);

    const profileImage = screen.getByRole('img');
    const userName = screen.getByText('User Name');

    expect(profileImage).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
  });

  test('Menu Items are present', async () => {
    user.setup();
    render(<Sidebar navbarMode={0} userName={'User Name'} />);

    const dashboardMenu = screen.getByRole('link', {
      name: 'Dashboard',
    });
    const saudaBookdMenu = screen.getByRole('link', {
      name: 'Sauda Book',
    });
    const billMenu = screen.getByRole('link', {
      name: 'Bills',
    });
    const userMenu = screen.getByRole('link', {
      name: 'Users',
    });

    // check if Menu Items are present
    expect(dashboardMenu).toBeInTheDocument();
    expect(saudaBookdMenu).toBeInTheDocument();
    expect(billMenu).toBeInTheDocument();
    expect(userMenu).toBeInTheDocument();

    // check if order of focus on tab press is proper
    await user.tab();
    expect(dashboardMenu).toHaveFocus();
    await user.tab();
    expect(saudaBookdMenu).toHaveFocus();
    await user.tab();
    expect(billMenu).toHaveFocus();
    await user.tab();
    expect(userMenu).toHaveFocus();
  });
});
