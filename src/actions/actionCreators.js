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
});

export const updateTxModalState = (value) => ({
  type: 'UPDATE_MODAL_STATE',
  payload: value,
});

export const updateTransaction = (data) => ({
  type: 'UPDATE_TRANSACTION',
  payload: data,
});

export const deleteTransaction = (data) => ({
  type: 'DELETE_TRANSACTION',
  payload: data,
})

export const addTag = (data) => ({
  type: 'ADD_TAG',
  payload: data
})