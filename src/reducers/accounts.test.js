import reducer from './account';

describe('account reducer', () => {
  const initialState = {
    accounts: []
  };
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ "accounts": [] })
  })

  it('should handle ADD_ACCOUNT', () => {
    expect(
      reducer(initialState, {
        type: 'ADD_ACCOUNT',
        payload: {
          balance: 1000,
          id: "6zb98plvkbr",
          name: "dtrdtr",
          type: "cash",
        }
      })
    ).toEqual({ "accounts": [{ "balance": 1000, "id": "6zb98plvkbr", "name": "dtrdtr", "type": "cash" }] });

  });

  it('should handle UPDATE_ACCOUNT', () => {
    const state = {
      accounts: [
        { "balance": 1000, "id": "6zb98plvkbr", "name": "dtrdtr", "type": "cash" }
      ]
    }
    expect(
      reducer(state, {
        type: 'UPDATE_ACCOUNT',
        payload: {
          amount: 1000,
          id: "6zb98plvkbr",
          type: "income",
        }
      })
    ).toEqual({ "accounts": [{ "balance": 2000, "id": "6zb98plvkbr", "name": "dtrdtr", "type": "cash" }] });

  });

  it('should handle UPDATE_ACCOUNT 2', () => {
    const state = {
      accounts: [
        { "balance": 1000, "id": "6zb98plvkbr", "name": "dtrdtr", "type": "cash" }
      ]
    }
    expect(
      reducer(state, {
        type: 'UPDATE_ACCOUNT',
        payload: {
          amount: 500,
          id: "6zb98plvkbr",
          type: "expense",
        }
      })
    ).toEqual({ "accounts": [{ "balance": 500, "id": "6zb98plvkbr", "name": "dtrdtr", "type": "cash" }] });

  });
})