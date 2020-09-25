import React from 'react';
import { mount } from "enzyme";
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import AccountList from '../AccountList';
import data from '../../../__mockData__/data.json';

describe("AccountList component", () => {
  let wrapper;
  const store = configureStore()(data);
   it("Component renders properly", () => {
    wrapper = mount(<Provider store={store}><AccountList /></Provider>);
    expect(wrapper.html()).toMatchSnapshot();
  });
});