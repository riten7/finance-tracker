import React from 'react';
import { shallow } from "enzyme";
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import TransactionTab from '../TransactionTab';
import data from '../../../__mockData__/data.json';

describe("TransactionTab component", () => {
  const store = configureStore()(data);
   it("Component renders properly", () => {
    const wrapper = shallow(<Provider store={store}><TransactionTab /></Provider>);
    expect(wrapper.html()).toMatchSnapshot();
  });
});