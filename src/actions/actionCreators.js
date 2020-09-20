export const addAccount = (data) => ({
  type: 'CREATE_ACCOUNT',
  payload: data,
});

export const loadAccounts = (data) => ({
  type: 'LOAD_ACCOUNTS',
  payload: data
})