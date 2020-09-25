import React from 'react';
import { shallow } from "enzyme";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from "redux-mock-store";
import App from './App';
import data from '../__mockData__/data.json';

describe("App component", () => {
  let wrapper;
  const store = configureStore()(data);
  it("Component renders properly", () => {
    wrapper = shallow(<Provider store={store}>
      <BrowserRouter><App /></BrowserRouter></Provider>);
    expect(wrapper.html()).toMatchSnapshot();
  });
});