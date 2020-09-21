import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import FakeData from './dummy-store';

describe('App component', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it.skip('renders as expected', () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(FakeData.folders),
    })); // TODO: Figure out how to mock different fetch instances
    const tree = renderer.create(<BrowserRouter><App /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

jest.restoreAllMocks();
