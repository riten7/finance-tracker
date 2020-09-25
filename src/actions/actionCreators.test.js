import * as actions from './actionCreators';

describe('actions', () => {
  it('Create an action to add a account works', () => {
    const payload = {
      balance: 1000,
      id: "6zb98plvkbr",
      name: "dtrdtr",
      type: "cash",
    }
    const expectedAction = {
      type: 'ADD_ACCOUNT',
      payload
    }
    expect(actions.addAccount(payload)).toEqual(expectedAction)
  });

  it('Create an action to add a transaction works', () => {
    const payload = {
      accountId: "6zb98plvkbr",
      accountName: "dtrdtr",
      amount: 12312,
      date: "2020-09-11T18:15:00.000Z",
      id: "ji26szpwofq",
      note: "asdasd",
      tags: ["asdasd"],
      type: "expense"
    }
    const expectedAction = {
      type: 'ADD_TX',
      payload
    }
    expect(actions.addTransaction(payload)).toEqual(expectedAction)
  });

  it('Create an action to update account works', () => {
     const payload = {
      balance: 1000,
      id: "6zb98plvkbr",
      name: "dtrdtr",
      type: "cash",
    }
    const expectedAction = {
      type: 'UPDATE_ACCOUNT',
      payload
    }
    expect(actions.updateAccount(payload)).toEqual(expectedAction)
  });

  it('Create an action to update transaction works', () => {
    const payload = {
      accountId: "6zb98plvkbr",
      accountName: "dtrdtr",
      amount: 12312,
      date: "2020-09-11T18:15:00.000Z",
      id: "ji26szpwofq",
      note: "asdasd",
      tags: ["asdasd"],
      type: "expense"
    }
    const expectedAction = {
      type: 'UPDATE_TRANSACTION',
      payload
    }
    expect(actions.updateTransaction(payload)).toEqual(expectedAction)
  });

  it('Create an action to delete transaction works', () => {
   const payload = {
      accountId: "6zb98plvkbr",
      accountName: "dtrdtr",
      amount: 12312,
      date: "2020-09-11T18:15:00.000Z",
      id: "ji26szpwofq",
      note: "asdasd",
      tags: ["asdasd"],
      type: "expense"
    }
    const expectedAction = {
      type: 'DELETE_TRANSACTION',
      payload
    }
    expect(actions.deleteTransaction(payload)).toEqual(expectedAction)
  });

  it('Create an action to add tag works', () => {
    const payload = {
      key: "rte",
      text: "rte",
      value: "rte"
    }
    const expectedAction = {
      type: 'ADD_TAG',
      payload
    }
    expect(actions.addTag(payload)).toEqual(expectedAction)
  });


});