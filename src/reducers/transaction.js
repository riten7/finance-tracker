const initialState = {
  transactions: [],
  txModalOpen: false,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TX':
      return { ...state,  transactions: [...state.transactions, action.payload] };
    
    case 'UPDATE_MODAL_STATE':
      return { ...state, txModalOpen: action.payload };
    
    case 'UPDATE_TRANSACTION':
      const { amount, accountId, accountName, tags, note, date, id } = action.payload;
      const index = state.transactions.findIndex(item => item.id === id);
      const newArray = [...state.transactions];
      const newObj = newArray[index];
      newObj.amount = amount;
      newObj.accountName = accountName;
      newObj.accountId = accountId;
      newObj.tags = tags;
      newObj.note = note;
      newObj.date = date;
      return { 
         ...state,
        transactions: newArray
      };

    default:
      return state;
  }
}

export default accountReducer;