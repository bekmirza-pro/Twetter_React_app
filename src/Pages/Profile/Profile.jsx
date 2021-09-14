import React from "react";

import Contact from "../../Components/Contacts/Contact";
import Profiles from "../../Components/Profiles/Profiles";
import ProfilSearch from "../../Components/ProfilSearch/ProfilSearch";

function Profile() {
  return (
    <>
      <div className="container">
        <Contact />
        <Profiles />
        <ProfilSearch />
      </div>
    </>
  );
}

export default Profile;
