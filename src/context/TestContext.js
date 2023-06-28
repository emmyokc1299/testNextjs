import React, {
  Dispatch,
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useReducer,
} from "react";

const initialState = {
  activeDir: "ltr",
  activeMode: "light", // This can be light or dark
  activeTheme: "BLUE_THEME", // BLUE_THEME, GREEN_THEME, BLACK_THEME, PURPLE_THEME, ORANGE_THEME
  // SidebarWidth: 270,
  SidebarWidth: 300,
  InnerSidebarWidth: 270,
  MiniSidebarWidth: 87,
  InnerMiniSidebar: 87,
  // TopbarHeight: 70,
  TopbarHeight: 100,
  OldTopbarHeight: 70,
  isLayout: "boxed", // This can be full or boxed
  isCollapse: false, // to make sidebar Mini by default
  isSidebarHover: false,
  isMobileSidebar: false,
  isHorizontal: false,
  isLanguage: "en",
  isCardShadow: true,
  borderRadius: 7,
  boxShadow: "0px 0px 12px -10px rgba(0,0,0,0.75)",
  bigBorderRadius: "15px",
  dateValue: new Date(),
  check: true,
  // "1px 1px 25px -7px rgba(0,0,0,0.75)"
};

const CustomizerContext = createContext(initialState);

const CustomizerReducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME": {
      return {
        ...state,
        activeTheme: action.payload,
      };
    }
    case "SET_DARK_MODE": {
      return {
        ...state,
        activeMode: action.payload,
      };
    }
    case "SET_DIR": {
      return {
        ...state,
        activeDir: action.payload,
      };
    }
    case "SET_LANGUAGE": {
      return {
        ...state,
        isLanguage: action.payload,
      };
    }
    case "SET_CARD_SHADOW": {
      return {
        ...state,
        isCardShadow: action.payload,
      };
    }
    case "TOGGLE_SIDEBAR": {
      return {
        ...state,
        isCollapse: !state.isCollapse,
      };
    }
    case "HOVER_SIDEBAR": {
      return {
        ...state,
        isSidebarHover: action.payload,
      };
    }
    case "TOGGLE_MOBILE_SIDEBAR": {
      return {
        ...state,
        isMobileSidebar: !state.isMobileSidebar,
      };
    }
    case "TOGGLE_LAYOUT": {
      return {
        ...state,
        isLayout: action.payload,
      };
    }
    case "TOGGLE_HORIZONTAL": {
      return {
        ...state,
        isHorizontal: action.payload,
      };
    }
    case "SET_BORDER_RADIUS": {
      return {
        ...state,
        borderRadius: action.payload,
      };
    }
    case "SET_DATE_VALUE": {
      return {
        ...state,
        dateValue: action.payload,
      };
    }
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

const CustomizerContextProvider = (props) => {
  const [state, dispatch] = useReducer(CustomizerReducer, initialState);

  const setTheme = (payload) => {
    dispatch({ type: "SET_THEME", payload: payload });
  };

  const setDarkMode = (payload) => {
    dispatch({ type: "SET_DARK_MODE", payload: payload });
  };

  const setDir = (payload) => {
    dispatch({ type: "SET_DIR", payload: payload });
  };

  const setLanguage = (payload) => {
    dispatch({ type: "SET_LANGUAGE", payload: payload });
  };

  const setCardShadow = (payload) => {
    // useCallback
    dispatch({ type: "SET_CARD_SHADOW", payload: payload });
  };

  const toggleSidebar = () => {
    console.log("toggleSidebar");
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  const hoverSidebar = (payload) => {
    dispatch({ type: "HOVER_SIDEBAR", payload: payload });
  };

  const toggleMobileSidebar = () => {
    dispatch({ type: "TOGGLE_MOBILE_SIDEBAR" });
  };

  const toggleLayout = (payload) => {
    dispatch({ type: "TOGGLE_LAYOUT", payload: payload });
  };

  const toggleHorizontal = (payload) => {
    dispatch({ type: "TOGGLE_HORIZONTAL", payload: payload });
  };

  const setBorderRadius = (payload) => {
    dispatch({ type: "SET_BORDER_RADIUS", payload: payload });
  };

  const setDateValue = (payload) => {
    dispatch({ type: "SET_DATE_VALUE", payload: payload });
  };

  const setCheck = (payload) => {
    dispatch({ type: "SET_CHECK", payload: payload });
  };

  const value = useMemo(
    () => {
      console.log("CustomzierContextProvider useMemo");
      return {
        activeDir: state.activeDir,
        activeMode: state.activeMode,
        activeTheme: state.activeTheme,
        SidebarWidth: state.SidebarWidth,
        InnerSidebarWidth: state.InnerSidebarWidth,
        MiniSidebarWidth: state.MiniSidebarWidth,
        InnerMiniSidebar: state.InnerMiniSidebar,
        TopbarHeight: state.TopbarHeight,
        OldTopbarHeight: state.OldTopbarHeight,
        isLayout: state.isLayout,
        isCollapse: state.isCollapse,
        isSidebarHover: state.isSidebarHover,
        isMobileSidebar: state.isMobileSidebar,
        isHorizontal: state.isHorizontal,
        isLanguage: state.isLanguage,
        isCardShadow: state.isCardShadow,
        borderRadius: state.borderRadius,
        boxShadow: state.boxShadow,
        bigBorderRadius: state.bigBorderRadius,
        dateValue: state.dateValue,
        check: state.check,
        setTheme: setTheme,
        setDarkMode: setDarkMode,
        setDir: setDir,
        setLanguage: setLanguage,
        setCardShadow: setCardShadow,
        toggleSidebar: toggleSidebar,
        hoverSidebar: hoverSidebar,
        toggleMobileSidebar: toggleMobileSidebar,
        toggleLayout: toggleLayout,
        toggleHorizontal: toggleHorizontal,
        setBorderRadius: setBorderRadius,
        setDateValue: setDateValue,
        setCheck: setCheck,
      };
    },
    [
      // state.activeDir,
      // state.activeMode,
      // state.activeTheme,
      // state.SidebarWidth,
      // state.InnerSidebarWidth,
      // state.MiniSidebarWidth,
      // state.InnerMiniSidebar,
      // state.TopbarHeight,
      // state.OldTopbarHeight,
      // state.isLayout,
      // state.isCollapse,
      // state.isSidebarHover,
      // state.isMobileSidebar,
      // state.isHorizontal,
      // state.isLanguage,
      // state.isCardShadow,
      // state.borderRadius,
      // state.boxShadow,
      // state.bigBorderRadius,
      // state.dateValue,
      // state.check,
      // setTheme,
      // setDarkMode,
      // setDir,
      // setLanguage,
      // setCardShadow,
      // toggleSidebar,
      // hoverSidebar,
      // toggleMobileSidebar,
      // toggleLayout,
      // toggleHorizontal,
      // setBorderRadius,
      // setDateValue,
      // setCheck,
    ]
  );

  return (
    <CustomizerContext.Provider value={value}>
      {props.children}
    </CustomizerContext.Provider>
  );
};

export { CustomizerContext, CustomizerContextProvider };

/**
 * import { createContext, useReducer } from "react";

const initialState = {
  check: false,
  testValue: 12,
};

export const TestContext = createContext(null);

const TestReducer = (state, action) => {
  if (action.type === "CHECK") {
    console.log("check");
    return {
      ...state,
      check: !state.check,
    };
  }
  if (action.type === "VALUE") {
    return {
      ...state,
      testValue: state.testValue + 1,
    };
  }
  return state;
};

export const TestContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TestReducer, initialState);

  const setCheck = () => {
    dispatch({ type: "CHECK" });
  };

  const setValue = () => {
    dispatch({ type: "VALUE" });
  };

  const value = {
    check: state.check,
    testValue: state.testValue,
    setCheck: setCheck,
    setValue: setValue,
  };

  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
};

export default TestContextProvider;

 */
