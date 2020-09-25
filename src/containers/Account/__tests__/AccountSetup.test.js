import React from 'react';
import { mount } from "enzyme";
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import AccountSetup from '../AccountSetup';
import data from '../../../__mockData__/data.json';

describe("AccountForm component", () => {
  let wrapper;
  const finalizeFormSubmit = jest.fn();
  const store = configureStore()(data);
   it("Component renders properly", () => {
    wrapper = mount(<Provider store={store}><AccountSetup /></Provider>);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Save button works properly", () => {
    //console.log(wrapper.find('.form .button').props())
    //wrapper.find('.form .form-submit').props().onClick();
    //expect(finalizeFormSubmit).toHaveBeenCalled();
  });
});