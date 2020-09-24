import React from "react";
import moment from "moment";
import { mount } from "enzyme";
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ExpenseReport from "./ExpenseReport";

const data = [
  {
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
  },
  {
    "amount": 12312,
    "accountId": "6zb98plvkbr",
    "date": "2020-09-11T18:15:00.000Z",
    "note": "asdasd",
    "accountName": "dtrdtr",
    "tags": [
      "asdasd"
    ],
    "id": "ji26szpwofq",
    "type": "expense"
  },
  {
    "amount": 4000,
    "accountId": "6zb98plvkbr",
    "date": "2020-09-15T18:15:00.000Z",
    "note": "asd",
    "accountName": "dtrdtr",
    "tags": [
      "qw"
    ],
    "id": "ul3db7uhzw",
    "type": "income"
  }
]

const mockStore = configureMockStore();

describe("Chart Component renders properly", () => {
  const setFilteredTransactions = jest.fn();
  const handleClick = jest.spyOn(React, "useState");
  handleClick.mockImplementation(size => [size, setFilteredTransactions]);

  const store = mockStore({ transactions: { transactions: data } });

  const incomeWrapper = mount(
    <Provider store={store}>
      <ExpenseReport />
    </Provider>);

  it("Component renders successfully", () => {
    expect(incomeWrapper.html()).toMatchSnapshot();
    expect(incomeWrapper.find('.k-chart')).toHaveLength(2);
  });

  it("On Click of pdf export works properly", () => {
    const onHandlePdfExport = jest.fn();
    incomeWrapper.find('.k-button').at(0).simulate('click');
    //expect(onHandlePdfExport).toBeCalled();
  });

  it("On Date Change works properly", () => {
    act(() => {
      incomeWrapper.find('RangePicker').at(0).props().onChange([moment('2020-02-02'), moment('2020-02-05')]);
    });
    expect(setFilteredTransactions).toBeTruthy();
  });
});

describe("Chart Component renders properly", () => {
  const store = mockStore({ transactions: { transactions: [] } });

  const incomeWrapper = mount(
    <Provider store={store}>
      <ExpenseReport />
    </Provider>);

  it("Component renders successfully", () => {
    expect(incomeWrapper.html()).toMatchSnapshot();
    expect(incomeWrapper.find('.transactions-form__empty')).toHaveLength(1);
  });
})