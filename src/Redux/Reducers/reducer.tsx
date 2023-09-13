const initialState = [];

export const invoicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_INVOICES':
      const data = action.invoices;
      localStorage.setItem('invoices', JSON.stringify(data));
      return [ ...data];
    default:
      return state;
  }
};
