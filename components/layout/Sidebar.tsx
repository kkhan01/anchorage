import type { FCC } from "types/react";
import React from "react";
import { styled } from "lib/theme";
import { Flex } from "components/primitives";

export const Aside = styled("aside", {
  position: "sticky",
  maxHeight: "unset",
  top: "unset",
  marginTop: "24px",
  marginBottom: "16px",
  "@xl": {
    maxHeight: `300px`,
    top: "80px",
    marginTop: 0,
    marginBottom: 0,
  },
});
export const AsideContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginTop: "0rem",
  maxWidth: "100%",
  "@xl": {
    marginTop: "1.8rem",
    maxWidth: `225px`,
  },
  minWidth: "185px",
  overflow: "auto",
  alignItems: "flex-start",
});

const SidebarContainer: FCC = ({ children }) => (
  <Aside>
    <AsideContent>{children}</AsideContent>
  </Aside>
);

const LayoutStack = styled("div", {
  display: `block`,
  "@xl": {
    display: `flex`,
  },

  flexDirection: `row`,
  justifyContent: `flex`,
  "&[data-direction='right']": {
    flexDirection: `row-reverse`,
    justifyContent: `flex-end`,
  },

  gap: "5rem",
});

interface ISidebarProps {
  direction?: "left" | "right";
}

export const Sidebar: FCC<ISidebarProps> = ({ direction = `left`, children }) => (
  <LayoutStack data-direction={direction} className="page-container">
    <SidebarContainer>
      <h2
        className="h4"
        style={{
          textAlign: "center",
        }}
      >
        Table of Contents
      </h2>
      <Flex flexDirection="column">
        <a href="https://google.com">{`>`} Google</a>
        <a href="https://google.com">{`>`} Google</a>
        <a href="https://google.com">{`>>`} Google</a>
        <a href="https://google.com">{`>`} Google</a>
        <a href="https://google.com">{`>`} Testing a really long heading now</a>
        <a href="https://google.com">{`>`} Google</a>
      </Flex>
    </SidebarContainer>
    {children}
  </LayoutStack>
);

export default Sidebar;
