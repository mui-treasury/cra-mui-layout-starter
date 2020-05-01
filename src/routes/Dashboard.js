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
  Footer,
} = getLayoutComponents(styled);

const scheme = Layout();

scheme.configureHeader((builder) => {
  builder
    .create("whatever_id")
    .registerConfig("xs", {
      position: "sticky",
    })
    .registerConfig("md", {
      position: "relative", // won't stick to top when scroll down
    });
});

scheme.configureEdgeSidebar((builder) => {
  builder
    .create("unique_id", { anchor: "left" })
    .registerTemporaryConfig("xs", {
      anchor: "left",
      width: "auto", // 'auto' is only valid for temporary variant
    })
    .registerPermanentConfig("md", {
      width: 256, // px, (%, rem, em is compatible)
      collapsible: true,
      collapsedWidth: 64,
    });
});

const Dashboard = () => {
  return (
    <Root scheme={scheme}>
      {({ state: { sidebar } }) => (
        <>
          <CssBaseline />
          <Header>
            <Toolbar>
              <SidebarTrigger sidebarId="unique_id" />
              <HeaderMockUp />
            </Toolbar>
          </Header>
          <DrawerSidebar sidebarId="unique_id">
            <SidebarContent>
              <NavHeaderMockUp collapsed={sidebar.unique_id.collapsed} />
              <NavContentMockUp />
            </SidebarContent>
            <CollapseBtn />
          </DrawerSidebar>
          <Content>
            <ContentMockUp />
          </Content>
          <Footer>
            <FooterMockUp />
          </Footer>
        </>
      )}
    </Root>
  );
};

export default Dashboard;
