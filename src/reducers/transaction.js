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
      const newArray = state.transactions.map(item => {
        if(item.id !== action.payload.id) {
          return item;
        }
        return {...action.payload}
      });
      return {
        ...state,
        transactions: newArray
      }
    
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(tx => tx.id !== action.payload.id),
      }

    default:
      return state;
  }
}

export default accountReducer;