import { createContext, useReducer } from "react";

export const initialState = {
  check: false,
};

const NewContext = createContext(null);

const NewReducer = (state, action) => {
  switch (action.type) {
    case "SET_CHECK": {
      return {
        ...state,
        check: !state.check,
      };
    }

    default:
      return state;
  }
};

const NewProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NewReducer, initialState);

  const setCheck = () => {
    dispatch({ type: "SET_CHECK" });
  };

  const value = {
    check: state.check,
    setCheck,
  };

  return <NewContext.Provider value={value}>{children}</NewContext.Provider>;
};


export {NewProvider, NewContext}