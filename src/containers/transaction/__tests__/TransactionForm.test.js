import React from 'react';
import { mount } from "enzyme";
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import TransactionForm from '../TransactionForm';
import data from '../../../__mockData__/data.json';

describe("TransactionForm component", () => {
  let wrapper;
  const store = configureStore()(data);
  const handleFormSubmit = jest.fn();
   it("Component renders properly", () => {
    wrapper = mount(<Provider store={store}>
      <TransactionForm
      type="income"
      transaction={{
        "amount": 4000,
        "accountId": "6zb98plvkbr",
        "date": "2020-09-18T18:15:00.000Z",
        "note": "wrerw",
        "accountName": "dtrdtr",
        "tags": [
          "qw"
        ],
        "id": "vsmynjtll1e",
        "type": "expense"
      }}
      handleFormSubmit={handleFormSubmit}
     /></Provider>);
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('.form .input').at(0).find('input').props().value).toEqual(4000);
    expect(wrapper.find('.transaction-form__date').at(0).find('input').props().value).toEqual('2020-09-19');
  });

  it("Form Submit works properly", () => {
    wrapper.find('.form').simulate('submit');
    expect(handleFormSubmit).toHaveBeenCalled();
  });

  it('Input handle change works properly', () => {
    wrapper.find('.form .input').at(0).find('input').simulate('change', { target: { value: 5000 }});
    expect(wrapper.find('.form .input').at(0).find('input').props().value).toEqual(5000);
  });

  it('test', () => {
    //wrapper.find('.form .dropdown .item').at(0).simulate('change', { value: 'asd' })
    //wrapper.find(Dropdown).prop('onChange')({ value: ['val' ] });
    //wrapper.update();
  })
});