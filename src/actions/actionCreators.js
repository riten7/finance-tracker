export const addAccount = (data) => ({
  type: 'ADD_ACCOUNT',
  payload: data,
});

export const addTransaction = (data) => ({
  type: 'ADD_TX',
  payload: data,
});

export const updateAccount = (data) => ({
  type: 'UPDATE_ACCOUNT',
  payload: data,
})