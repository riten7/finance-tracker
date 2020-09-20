const initialState = {
  transactions: []
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TX':
      return { ...state,  transactions: [...state.transactions, action.payload] };

    default:
      return state;
  }
}

export default accountReducer;