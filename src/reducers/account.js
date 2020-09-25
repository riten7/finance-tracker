const initialState = {
  accounts: []
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ACCOUNT':
      return { ...state, accounts: [...state.accounts, action.payload] };
    
    case 'UPDATE_ACCOUNT':
      const { id, amount, type } = action.payload;
      const newArray = state.accounts.map(item => {
        if(item.id !== id) {
          return item;
        }
        const balance = (type === 'income') ? item.balance + amount  : item.balance - amount;
        return {
          ...item,
          balance
        }
      })
      return { 
         ...state,
        accounts: newArray,
      };

    default:
      return state;
  }
}

export default accountReducer;