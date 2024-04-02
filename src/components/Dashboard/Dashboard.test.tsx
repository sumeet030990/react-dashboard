import { render, screen } from '../../../test-utils';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
  test('Headline is present', () => {
    render(<Dashboard />);

    const headline = screen.getByText('Dashboard');
    const section = screen.getByText('section 1');

    expect(headline).toBeInTheDocument();
    expect(section).toBeInTheDocument();
  });
});
