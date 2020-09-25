import React from 'react';
import { shallow } from "enzyme";
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import AccountWorth from '../AccountWorth';
import data from '../../../__mockData__/data.json';

describe("AccountWorth component", () => {
  let wrapper;
  const store = configureStore()(data);
   it("Component renders properly", () => {
    wrapper = shallow(<Provider store={store}><AccountWorth /></Provider>);
    expect(wrapper.html()).toMatchSnapshot();
  });
});