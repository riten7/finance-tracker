import React from 'react';
import { mount } from "enzyme";
import AccountListItem from '../AccountListItem';

describe("AccountListItem component", () => {
  let wrapper;
   it("Component renders properly", () => {
    wrapper = mount(<AccountListItem account={{
        name: "dtrdtr",
        type: "cash",
        balance: 131406817,
        id: "6zb98plvkbr"
      }}/>);
    expect(wrapper.html()).toMatchSnapshot();
  });
});