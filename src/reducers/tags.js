const initialState = {
  tags: []
};

const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TAG':
      return state.tags.some(tag => tag.key === action.payload.key) ? state : { ...state, tags: [...state.tags, action.payload] };

    default:
      return state;
  }
}

export default tagReducer;