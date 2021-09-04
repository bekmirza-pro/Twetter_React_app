import React, { useContext } from "react";
import "./App.scss";
import { Context } from "./Context/Theme";
import { ContextLang } from "./Context/Language";

//Components;

import Contact from "./Components/Contacts/Contact";
import Comments from "./Components/Comments/Comments";
import Search from "./Components/Search/Search";

function App() {
  const ctx = useContext(Context);
  const lng = useContext(ContextLang);
  console.log(lng);
  console.log(ctx);

  return (
    <>
      <div className="container">
        <Contact />
        <Comments />
        <Search />
      </div>
    </>
  );
}

export default App;
