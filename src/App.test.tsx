import { render } from '@testing-library/react';
import App from './App';
import Router from './common/navigation/Router';

jest.mock('./common/navigation/Router', () => ({ __esModule: true, default: jest.fn() }));

describe('App', () => {
  beforeEach(() => {
    (Router as jest.Mock).mockImplementation(() => null);
  });

  it('renders without errors', () => {
    const view = render(<App />);
    expect(view).not.toBeFalsy();
  });
});
