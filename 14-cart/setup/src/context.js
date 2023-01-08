import React, { useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const InitialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const clearSingleItem = (id) => {
    const singleItemId = id;
    dispatch({ type: "CLEAR_SINGLE_ITEM", payload: singleItemId });
  };

  const increaseAmount = (id) => {
    dispatch({ type: "INCREASE_AMOUNT", payload: id }); //we will change each amount inside the cartItems but not on the InitialState.amount
  };

  const decreaseAmount = (id) => {
    dispatch({ type: "DECREASE_AMOUNT", payload: id }); //we will change each amount inside the cartItems but not on the InitialState.amount
  };

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: data });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" }); //we will get amount inside the InitialState.amount
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        clearSingleItem,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
