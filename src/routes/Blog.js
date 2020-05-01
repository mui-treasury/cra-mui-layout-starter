import React from "react";
import styled from "styled-components";
import Layout, { getLayoutComponents } from "@mui-treasury/layout";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  HeaderMockUp,
  NavHeaderMockUp,
  NavContentMockUp,
  ContentMockUp,
  FooterMockUp,
} from "@mui-treasury/mockup/layout";

const {
  Root,
  Header,
  DrawerSidebar,
  SidebarTrigger,
  SidebarContent,
  CollapseBtn,
  Content,
  InsetContainer,
  InsetSidebar,
  InsetFooter,
} = getLayoutComponents(styled);

const scheme = Layout();

scheme.configureHeader((builder) => {
  builder
    .create("appHeader")
    .registerConfig("xs", {
      position: "sticky",
      initialHeight: 56,
    })
    .registerConfig("md", {
      position: "relative", // won't stick to top when scroll down
      initialHeight: 64,
    });
});

scheme.configureEdgeSidebar((builder) => {
  builder
    .create("primarySidebar", { anchor: "left" })
    .registerTemporaryConfig("xs", {
      width: "auto", // 'auto' is only valid for temporary variant
    });
});

scheme.configureInsetSidebar((builder) => {
  builder
    .create("secondarySidebar", { anchor: "right" })
    .registerFixedConfig("md", {
      width: 256,
    });
});

const Blog = () => {
  return (
    <Root scheme={scheme}>
      {({ state: { sidebar } }) => (
        <>
          <CssBaseline />
          <Header>
            <Toolbar>
              <SidebarTrigger sidebarId="primarySidebar" />
              <HeaderMockUp />
            </Toolbar>
          </Header>
          <DrawerSidebar sidebarId="primarySidebar">
            <SidebarContent>
              <NavHeaderMockUp collapsed={sidebar.primarySidebar.collapsed} />
              <NavContentMockUp />
            </SidebarContent>
            <CollapseBtn />
          </DrawerSidebar>
          <Content>
            <InsetContainer
              rightSidebar={
                <InsetSidebar sidebarId="secondarySidebar">
                  <NavContentMockUp />
                </InsetSidebar>
              }
            >
              <ContentMockUp />
            </InsetContainer>
          </Content>
          <InsetFooter>
            <FooterMockUp />
          </InsetFooter>
        </>
      )}
    </Root>
  );
};

export default Blog;
