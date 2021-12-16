/** @jsxRuntime classic */
/** @jsx jsx */
/* @jsxFrag React.Fragment */
import React from "react";
import { jsx, Global, css } from "@emotion/react";
import * as style from "./style";

import { Heading } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <Global
        styles={css`
          html {
            font-family: "Poppins", sans-serif;
          }
        `}
      />
      <div>
        <h1 css={style.container}>Hello</h1>
      </div>
    </>
  );
};

export default App;
