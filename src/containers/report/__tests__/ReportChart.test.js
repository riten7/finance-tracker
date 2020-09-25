import React from 'react';
import { mount } from "enzyme";
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import ReportChart from '../ReportChart';
import data from '../../../__mockData__/data.json';

describe("ReportChart component", () => {
  let wrapper;
  const store = configureStore()(data);
   it("Component renders properly", () => {
    wrapper = mount(<Provider store={store}><ReportChart /></Provider>);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Tab click works properly", () => {
    wrapper.find('.menu .item').at(1).simulate('click');
    expect(wrapper.find('.menu .item').at(1).hasClass('active')).toEqual(true);

    wrapper.find('.menu .item').at(0).simulate('click');
    expect(wrapper.find('.menu .item').at(0).hasClass('active')).toEqual(true);  
  })
});