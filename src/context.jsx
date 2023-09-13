import { createContext } from "react";
import { useReducer } from "react";

//initial state
const INITIAL_STATE = {
  destination: "Manchester",
  dates: "123",
  options: { adult: 2 },
};
export const SearchContext = createContext(INITIAL_STATE);

//ActionPlan
const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

//Context provider (wrapping the entire app with the provider)
export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        destination: state.destination,
        dates: state.dates,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
