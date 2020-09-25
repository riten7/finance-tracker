import reducer from './tags';

describe('tags reducer', () => {
  const initialState = {
    tags: []
  };
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ "tags": [] })
  })

  it('should handle ADD_TAG', () => {
    expect(
      reducer(initialState, {
        type: 'ADD_TAG',
        payload: {
          key: "rte",
          text: "rte",
          value: "rte"
        }
      })
    ).toEqual({ "tags": [{ key: "rte", text: "rte", value: "rte" }] });
  });
})