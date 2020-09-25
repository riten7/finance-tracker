import React from 'react';
import { mount } from "enzyme";
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import AccountForm from '../AccountForm';
import data from '../../../__mockData__/data.json';

describe("AccountForm component", () => {
  let wrapper;
  const store = configureStore()(data);
  const handleFormSubmit = jest.fn();
  it("Component renders properly", () => {
    wrapper = mount(<Provider store={store}><AccountForm handleFormSubmit={handleFormSubmit} /></Provider>);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Form submission works properly", () => {
    wrapper.find('.form').simulate('submit');
    expect(handleFormSubmit).toHaveBeenCalled();
  });
  it('Input handle change works properly', () => {
    wrapper.find('.form .input').at(0).find('input').simulate('change', { target: { value: 5000 }});
    expect(wrapper.find('.form .input').at(0).find('input').props().value).toEqual(5000);
  });
});