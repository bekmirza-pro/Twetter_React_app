import React from "react";

const AutContext = React.createContext(true);

function Provider({ children }) {
  const [state, setState] = React.useState(
    JSON.parse(window.localStorage.getItem("token")) || false
  );
  React.useEffect(() => {
    if (state) {
      window.localStorage.setItem("token", JSON.stringify(state));
    } else {
      window.localStorage.removeItem("token");
    }
  }, [state]);
  return (
    <AutContext.Provider value={{ state, setState }}>
      {children}
    </AutContext.Provider>
  );
}

export { AutContext, Provider };
