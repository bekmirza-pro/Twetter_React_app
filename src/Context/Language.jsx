import React from "react";

const ContextLang = React.createContext();

function ProviderLang({ children }) {
  const [lng, setLang] = React.useState(
    window.localStorage.getItem("lang") || "en"
  );
  React.useEffect(() => {
    window.localStorage.setItem("lang", lng);
  }, [lng]);
  return (
    <ContextLang.Provider value={{ lng, setLang }}>
      {children}
    </ContextLang.Provider>
  );
}

export { ContextLang, ProviderLang };
