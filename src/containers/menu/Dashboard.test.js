import React from 'react';
import { shallow } from "enzyme";
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import Dashboard from './Dashboard';
import data from './data.json';

describe("Dashboard component", () => {
  let wrapper;
  const store = configureStore()(data);
   it("Component renders properly", () => {
    wrapper = shallow(<Provider store={store}><Dashboard /></Provider>);
    expect(wrapper.html()).toMatchSnapshot();
  });
});