import React from "react";
import { mount } from "enzyme";
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import TransactionList from "../TransactionList";

import data from './data.json';

const mockStore = configureMockStore();

window.matchMedia = jest.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));

describe("Transaction Component", () => {
  let wrapper;
  const store = mockStore(data);
  it("Component renders properly", () => {
    wrapper = mount(<Provider store={store}><TransactionList from="transaction" /></Provider>);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Edit button wirks well", () => {
    wrapper.find('.editBtn').at(0).simulate('click');
    expect(wrapper.find('.modal')).toHaveLength(1);
  });
  it('pagination', () => {
    wrapper.find('.ant-pagination-item-1').simulate('click');
    expect(wrapper.find('.ant-pagination-item-1').text()).toBe("1");
  });
  it("Delete button works well", () => {
    wrapper.find('.deleteBtn').at(1).simulate('click');
    expect(store.getState().transactions.transactions).toStrictEqual([
      {
        "accountId": "6zb98plvkbr",
        "accountName": "dtrdtr",
        "amount": 4000,
        "date": "2020-09-18T18:15:00.000Z",
        "id": "vsmynjtll1e",
        "note": "wrerw",
        "tags": [
          "qw"
        ],
        "type": "expense"
      },
      {
        "accountId": "6zb98plvkbr",
        "accountName": "dtrdtr",
        "amount": 12312,
        "date": "2020-09-11T18:15:00.000Z",
        "id": "ji26szpwofq",
        "note": "asdasd",
        "tags": [
          "asdasd"
        ],
        "type": "expense"
      },
      {
        "accountId": "6zb98plvkbr",
        "accountName": "dtrdtr",
        "amount": 4000,
        "date": "2020-09-15T18:15:00.000Z",
        "id": "ul3db7uhzw",
        "note": "asd",
        "tags": [
          "qw"
        ],
        "type": "income"
      }
    ]);
  });
});

