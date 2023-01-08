const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "CLEAR_SINGLE_ITEM") {
    const updatedCartItems = state.cart.filter(
      (eachItem) => eachItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCartItems,
    };
  }
  if (action.type === "INCREASE_AMOUNT") {
    const tempCart = state.cart.map((eachItem) => {
      if (eachItem.id === action.payload) {
        return { ...eachItem, amount: eachItem.amount + 1 };
      }
      return eachItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "DECREASE_AMOUNT") {
    const tempCart = state.cart
      .map((eachItem) => {
        if (eachItem.id === action.payload) {
          return { ...eachItem, amount: eachItem.amount - 1 };
        }
        return eachItem;
      })
      .filter((eachItem) => eachItem.amount >= 1);
    return { ...state, cart: tempCart };
  }

  throw new Error("no matching action");
};

export default reducer;
