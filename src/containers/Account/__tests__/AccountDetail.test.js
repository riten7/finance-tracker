import React from 'react';
import { mount } from "enzyme";
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import AccountDetail from '../AccountDetail';
import data from '../../../__mockData__/data.json';

describe("AccountDetail component", () => {
  let wrapper;
  const store = configureStore()(data);
  const setShowModal = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setShowModal]);

  it("Component renders properly", () => {
    wrapper = mount(<Provider store={store}><AccountDetail /></Provider>);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Calls setShowModal to set value true', () => {
    wrapper.find('.account-detail-container .button').props().onClick();
    expect(setShowModal).toHaveBeenCalledWith(true);
  });
});