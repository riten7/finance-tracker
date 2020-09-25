import reducer from './transaction';

describe('transactions reducer', () => {
  const initialState = {
    transactions: []
  };
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ "transactions": [] })
  })

  it('should handle ADD_TRANSACTION', () => {
    expect(
      reducer(initialState, {
        type: 'ADD_TX',
        payload: {
          accountId: "6zb98plvkbr",
          accountName: "dtrdtr",
          amount: 12312,
          date: "2020-09-11T18:15:00.000Z",
          id: "ji26szpwofq",
          note: "asdasd",
          tags: ["asdasd"],
          type: "expense"
        }
      })
    ).toEqual({
      "transactions": [{
        accountId: "6zb98plvkbr",
        accountName: "dtrdtr",
        amount: 12312,
        date: "2020-09-11T18:15:00.000Z",
        id: "ji26szpwofq",
        note: "asdasd",
        tags: ["asdasd"],
        type: "expense"
      }]
    });

  });

  it('should handle UPDATE_TRANSACTION', () => {
    const state = {
      transactions: [
        {
          accountId: "6zb98plvkbr",
          accountName: "dtrdtr",
          amount: 12312,
          date: "2020-09-11T18:15:00.000Z",
          id: "ji26szpwofq",
          note: "asdasd",
          tags: ["asdasd"],
          type: "expense"
        }
      ]
    }
    expect(
      reducer(state, {
        type: 'UPDATE_TRANSACTION',
        payload: {
          accountId: "6zb98plvkbr",
          accountName: "dtrdtr",
          amount: 2000,
          date: "2020-09-11T18:15:00.000Z",
          id: "ji26szpwofq",
          note: "asdasd",
          tags: ["asdasd"],
          type: "expense"
        }
      })
    ).toEqual({
      "transactions": [{
        accountId: "6zb98plvkbr",
        accountName: "dtrdtr",
        amount: 2000,
        date: "2020-09-11T18:15:00.000Z",
        id: "ji26szpwofq",
        note: "asdasd",
        tags: ["asdasd"],
        type: "expense"
      }]
    });

  });

  it('should handle DELETE_TRANSACTION', () => {
    const state = {
      transactions: [
        {
          accountId: "6zb98plvkbr",
          accountName: "dtrdtr",
          amount: 12312,
          date: "2020-09-11T18:15:00.000Z",
          id: "ji26szpwofq",
          note: "asdasd",
          tags: ["asdasd"],
          type: "expense"
        }
      ]
    }
    expect(
      reducer(state, {
        type: 'DELETE_TRANSACTION',
        payload: {
          accountId: "6zb98plvkbr",
          accountName: "dtrdtr",
          amount: 12312,
          date: "2020-09-11T18:15:00.000Z",
          id: "ji26szpwofq",
          note: "asdasd",
          tags: ["asdasd"],
          type: "expense"
        }
      })
    ).toEqual({ "transactions": [] });
  });
})