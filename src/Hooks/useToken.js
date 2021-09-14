import React from "react";
import { AutContext } from "../Context/Authentication"

const useToken = (setterOnly) => {
    const ctx = React.useContext(AutContext);
    return setterOnly ? [ctx.setState] : [ctx.state, ctx.State];
}

export default useToken;