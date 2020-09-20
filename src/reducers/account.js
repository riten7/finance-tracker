const initialState = {
  accounts: []
};

const accountReducer = (state = initialState, action) => {
  console.log('12323423423', action)
  switch (action.type) {
    case 'CREATE_ACCOUNT':
      return { ...state, accounts: [...state.accounts, action.payload] };
    
    case 'LOAD_ACCOUNTS':
      return {...state, accounts: action.payload }

    default:
      return state;
  }
}

export default accountReducer;