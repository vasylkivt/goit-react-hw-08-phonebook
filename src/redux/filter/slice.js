export const setFilter = value => ({
  type: 'filter/setFilter',
  payload: value,
});

export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return action.payload;

    default:
      return state;
  }
};
