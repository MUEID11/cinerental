export const initialState = {
  cartData: [],
};
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        cartData: [...state.cartData, action.payload],
      };
    case "remove":
      return {
        ...state.cartData,
        cartData: state.cartData.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
