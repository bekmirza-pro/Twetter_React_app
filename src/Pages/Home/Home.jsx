import React from "react";

import Contact from "../../Components/Contacts/Contact";
import Comments from "../../Components/Comments/Comments";
import Search from "../../Components/Search/Search";

function Home() {
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

export default Home;
