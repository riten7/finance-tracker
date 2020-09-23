const initialState = {
  accounts: []
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ACCOUNT':
      return { ...state, accounts: [...state.accounts, action.payload] };
    
    case 'UPDATE_ACCOUNT':
      const { id, amount, type } = action.payload;
      const index = state.accounts.findIndex(acc => acc.id === id);
      const newArray = [...state.accounts];
      if (type === 'income'){
        newArray[index].balance = newArray[index].balance + amount;
      } else {
        newArray[index].balance = newArray[index].balance - amount;
      }
      return { 
         ...state,
        accounts: newArray,
      };

    default:
      return state;
  }
}

export default accountReducer;

export const getUpdatedArray = () => {
  
}