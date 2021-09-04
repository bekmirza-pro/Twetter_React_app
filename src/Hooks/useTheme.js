import React from "react";
import { Context } from "../Context/Theme";

const useTheme = () => {
    const ctx = React.useContext(Context);

    return [ctx.theme, ctx.setTheme];
}

export default useTheme;