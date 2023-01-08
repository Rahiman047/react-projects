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
  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      //let used so that we can change the value later
      (cartTotal, cartItem) => {
        // we are iterating over each array and getting the values of amount and price from each array and adding it to state values {total:0,amount:0},
        //but where as the eachArray has a amount as 1 and price as some value

        const { price, amount } = cartItem; // cartItem = {id: 1,title: 'Samsung Galaxy S7',price: 599.99,img: 'https://dl.airtable.com/.attachments/91ee456448cef47deec553a2ea3fa8ad/b08bec68/phone-2_ohtt5s.png',amount: 1}
        const itemTotal = price * amount;

        cartTotal.amount += amount; //cartTotal.amount will be total amounts of items present in cart
        cartTotal.total += itemTotal; // cartTotal.total will be total cost of items present in cart
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart: action.payload, loading: false };
  }

  throw new Error("no matching action");
};

export default reducer;
