import type { FCC } from "types/react";
import React, { Fragment } from "react";
import { Flex } from "components/primitives";
import Headroom from "react-headroom";
import Header from "./header";
import Footer from "./footer";

export const BaseLayout: FCC = ({ children }) => {
  return (
    <Fragment>
      <Flex flexDirection="column" css={{ minHeight: "96vh" }}>
        <Headroom>
          <Header />
        </Headroom>

        {children}
      </Flex>
      <Footer />
    </Fragment>
  );
};

export default BaseLayout;
